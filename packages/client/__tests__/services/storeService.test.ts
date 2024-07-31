import useStoreService from '../../src/services/storeService';
import { casinoStore } from '../../src/modules/store.module';

// Mock the casinoStore module
jest.mock('@modules/store.module', () => ({
  casinoStore: {
    addCredit: jest.fn(),
    getCreditValue: jest.fn(),
    setCreditValue: jest.fn(),
    setBlocks: jest.fn(),
    getBlocksValue: jest.fn(),
  },
}));

describe('useStoreService', () => {
  let service: any;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    service = useStoreService();
  });

  describe('addCredit', () => {
    it('calls casinoStore.addCredit with the correct value', () => {
      const valueToAdd = 100;
      service.addCredit(valueToAdd);
      expect(casinoStore.addCredit).toHaveBeenCalledWith(valueToAdd);
    });

    it('returns the correct value from casinoStore.addCredit', () => {
      const mockReturnValue = 200;
      (casinoStore.addCredit as jest.Mock).mockReturnValue(mockReturnValue);
      const result = service.addCredit(100);
      expect(result).toBe(mockReturnValue);
    });
  });
});