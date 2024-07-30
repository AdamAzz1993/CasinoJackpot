"use strict";
const express = require('express');
const isNil = require('lodash/isNil')
const { rollJackpot, initialState } = require('../services');

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
 * Route to perform a roll in the jackpot game.
 * It decrements the session's credit by 1 and adds any points earned from the roll.
 * If the session's credit is 0 or less, the session is destroyed.
 * 
 * @path {GET} /roll
 * @response {void} - Does not return a body, but may end the session if credit is 0 or less.
 * @responseExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * @throws {Error} Throws an error if there's an issue during the roll or session handling.
 */
router.get('/roll', (request, response) => {
    let { credit } = request.session ?? {};


    if (!isNil(credit) && credit <= 0) {
        const { sessionID } = request.session;
        request.session.destroy(sessionID);
        return response.status(200).send();
    }

    const result = rollJackpot(credit);
    if (request.session) {
        request.session.credit = --credit + (result.pointsEarned ?? 0);
    }
    response.status(200).send(result);
});

/**
 * Route to perform a withdraw and end the game session.
 * 
 * Retrieves the session ID from the request session object.
 * @param {Object} request - The request object.
 * @returns {Response} response - the response status
 */
router.get('/withdraw', (request, response) => {
    const { session } = request ?? {};
    const { credit } = session ?? {};
    if (session && credit > 0) {
        const { sessionID } = request.session;
        request.session.destroy(sessionID);
        return response.status(200).send();
    }
    response.status(204);
});

module.exports = router;