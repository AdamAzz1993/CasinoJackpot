// someService.js
import { eBlockType } from '@enums/eBlockType';
import { casinoStore } from '@modules/store.module';

const useStoreService = () => {
  const setCreditInStore = (value: number) => {
    casinoStore.setCreditValue(value)
  }

  const addCredit = (value: number) => {
    return casinoStore.addCredit(value);
  }

  const getValueFromStore = () => {
    return casinoStore.getCreditValue()
  }

  const setBlocks = (blocks: Array<eBlockType>) => {
    casinoStore.setBlocks(blocks)
  }

  const getBlocksValue = () => {
    return casinoStore.getBlocksValue()
  }

  return {
    setCreditInStore,
    setBlocks,
    addCredit,
    getBlocksValue,
    getValueFromStore
  }
}

export default useStoreService
