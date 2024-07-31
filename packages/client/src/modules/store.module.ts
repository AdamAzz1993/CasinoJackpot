import { eBlockType } from '@enums/eBlockType';
import { createSlice, configureStore, EnhancedStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        credit: 0,
        currentBlocks: ['X', 'X', 'X']
    },
    reducers: {
        setCredit: (state, action) => {
            state.credit = action.payload
        },
        setCurrentBlocks: (state, action) => {
            state.currentBlocks = action.payload
        },
        addCredit: (state, action) => {
            state.credit += action.payload;
        }
    }
})

export const { setCredit, addCredit, setCurrentBlocks } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer,
})

export const createStoreWithGettersAndSetters = (store: EnhancedStore) => {
    return {
        ...store,
        getCreditValue: () => store.getState().credit,
        getBlocksValue: () => store.getState().currentBlocks,
        setCreditValue: (credit: number) => store.dispatch(setCredit(credit)),
        addCredit: (pointsEarned: number) => store.dispatch(addCredit(pointsEarned)),
        setBlocks: (blocks: Array<eBlockType>) => store.dispatch(setCurrentBlocks(blocks)),
    }
}

export const casinoStore = createStoreWithGettersAndSetters(store);
