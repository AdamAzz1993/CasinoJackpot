import { startGame, rollJackpot, cashOut } from '../../src/api/jackpot';
import { apiRequest } from '../../src/utils/apiProvider';
import { BASE_URL, CASH_OUT, ROLL_JACKPOT } from '../../src/constants/api';
import { eApiRequestMethods } from '../../src/enums/eApiRequestMethods';

jest.mock('../../src/utils/apiProvider', () => ({
  apiRequest: jest.fn(),
}));

describe('jackpot.ts', () => {
  beforeEach(() => {
    (apiRequest as jest.Mock).mockClear();
  });

  it('startGame calls apiRequest with correct arguments and returns expected result', async () => {
    const mockResponse = { gameStarted: true };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const response = await startGame();

    expect(apiRequest).toHaveBeenCalledWith(BASE_URL, eApiRequestMethods.Get);
    expect(response).toEqual(mockResponse);
  });

  it('rollJackpot calls apiRequest with correct arguments and returns expected result', async () => {
    const mockResponse = { jackpotRolled: true };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const response = await rollJackpot();

    expect(apiRequest).toHaveBeenCalledWith(ROLL_JACKPOT, eApiRequestMethods.Post);
    expect(response).toEqual(mockResponse);
  });

  it('cashOut calls apiRequest with correct arguments and returns expected result', async () => {
    const mockResponse = { status: 200 };
    (apiRequest as jest.Mock).mockResolvedValue(mockResponse);

    const response = await cashOut();

    expect(apiRequest).toHaveBeenCalledWith(CASH_OUT, eApiRequestMethods.Post);
    expect(response).toEqual(mockResponse);
  });
});