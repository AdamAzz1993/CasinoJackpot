"use strict";
const express = require('express');
const isNil = require('lodash/isNil')
const { rollJackpot, initialState, cashOut } = require('../services');

const router = express.Router();

/**
 * Route to get the initial credit for a new game session.
 * It retrieves the session's credit or initializes it using the initialState function.
 * 
 * @path {GET} /
 * @response {Object} - Returns an object containing the credit amount.
 * @responseExample {json} Success-Response:
 *  {
 *      "credit": 100
 *  }
 * @throws {Error} Throws an error if there's an issue retrieving the credit amount.
 */
router.get('/', (request, response) => {
    let credit;
    try {
        const { session } = request;
        credit = initialState(session);
        request.session.credit = credit;
        response.status(200).send({ credit });
    } catch (err) {
        throw Error.caller('Error occurs on retrieving credit amount');
    }
});

/**
 * It decrements the session's credit by 1 and adds any points earned from the roll.
 * If the session's credit is 0 or less, the session is destroyed.
 * 
 * @path {POST} /roll
 * @response {Object} - Returns an object containing points earned and the symbols array.
 * @responseExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * @throws {Error} Throws an error if there's an issue during the roll or session handling.
 */
router.post('/roll', (request, response) => {
    let { credit } = request.session ?? {};

    if (!isNil(credit) && credit <= 0) {
        const { sessionID } = request.session;
        request.session.destroy(sessionID);
        return response.status(200).send();
    }

    const result = rollJackpot(credit);
    if (request.session) {
        request.session.credit += result.pointsEarned ?? 0;
    }
    response.status(200).send(result);
});

/**
 * 
 * Retrieves the credit from session and write it to the history.txt file for the user.
 * And then destroy the session.
 * @path {POST} /cashout
 * @param {Object} request - The request object.
 * @returns {Response} response - the response status
 */
router.post('/cashOut', (request, response) => {
    const { session } = request ?? {};
    const { credit } = session ?? {};
    if (session && credit > 0) {
        cashOut(request.session);
        return response.status(200).send();
    }
    response.status(204);
});

module.exports = router;