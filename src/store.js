import { configureStore, createSlice } from "@reduxjs/toolkit";

const changeMode = createSlice({
    name: '다크모드',
    initialState: false,
    reducers: {
        change: (state) => !state
    }
})

export const { change } = changeMode.actions;


const store = configureStore({
    reducer: {
        changeMode: changeMode.reducer
    }
});

export default store;