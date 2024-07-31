import { BASE_URL, CASH_OUT, ROLL_JACKPOT } from '@constants/api';
import { eApiRequestMethods } from '@enums/eApiRequestMethods';
import { apiRequest } from '@utils/apiProvider';
import { IStartGameResponse } from '@interfaces/api/IStartGameResponse';
import { IRollJackpotResponse } from '@interfaces/api/IRollJackpotResponse';

export async function startGame(): Promise<IStartGameResponse> {
    return await apiRequest(BASE_URL, eApiRequestMethods.Get);
}

export async function rollJackpot(): Promise<IRollJackpotResponse> {
    return await apiRequest(ROLL_JACKPOT, eApiRequestMethods.Post);
}

export async function cashOut(): Promise<Response> {
    return await apiRequest(CASH_OUT, eApiRequestMethods.Post);
}