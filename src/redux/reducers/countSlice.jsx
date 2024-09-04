import {createSlice} from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'count',
    initialState: {value: 0},
    reducers: {
        increment(state, action) {
            state.value += action.payload
        },
        decrement(state, action) {
            state.value -= action.payload
        },
        muliply(state, action) {
            state.value = state.value * action.payload
        }
    }
});

export const {increment, decrement, muliply} = countSlice.actions;
export default countSlice;