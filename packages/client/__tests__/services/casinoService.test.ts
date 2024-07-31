import { CasinoService } from '../../src/services/casinoService';
import * as jackpotApi from '../../src/api/jackpot';

jest.mock('@api/jackpot', () => ({
  startGame: jest.fn(),
  rollJackpot: jest.fn(),
  cashOut: jest.fn(),
}));

jest.mock('@services/storeService', () => {
  return jest.fn().mockImplementation(() => ({
    setCreditInStore: jest.fn(),
    setBlocks: jest.fn(),
    addCredit: jest.fn(),
  }));
});

describe('CasinoService', () => {
  let casinoService: CasinoService;

  beforeEach(() => {
    jest.clearAllMocks();
    casinoService = new CasinoService();
  });

  it('startGame calls startGame API and updates store credit', async () => {
    const mockResponse = { credit: 100 };
    (jackpotApi.startGame as jest.Mock).mockResolvedValue(mockResponse);
    await casinoService.startGame();
    expect(jackpotApi.startGame).toHaveBeenCalledTimes(1);
  });

  it('rollJackpot calls rollJackpot API', async () => {
    const mockResponse = { blocks: ['Spinner', 'Spinner', 'Spinner'], pointsEarned: 50 };
    (jackpotApi.rollJackpot as jest.Mock).mockResolvedValue(mockResponse);
    await casinoService.rollJackpot();
    expect(jackpotApi.rollJackpot).toHaveBeenCalled();
  });

  it('cashOut calls cashOut API', async () => {
    (jackpotApi.cashOut as jest.Mock).mockResolvedValue({});
    await casinoService.cashOut();
    expect(jackpotApi.cashOut).toHaveBeenCalled();
  });
});