import { configureStore, createSlice } from "@reduxjs/toolkit";

const changeMode = createSlice({
    name: '다크모드',
    initialState: false,
    reducers: {
        change: (state) => !state
    }
})

export const { change } = changeMode.actions;

// const LoadingPage = createSlice({
//     name: '로딩페이지',
//     initialState: false,
//     reducers: {
//         change: (state) => !state
//     }
// })

// export const { loading } = LoadingPage.actions;

const store = configureStore({
    reducer: {
        changeMode: changeMode.reducer,
        // LoadingPage: LoadingPage.reducer
    }
});

export default store;