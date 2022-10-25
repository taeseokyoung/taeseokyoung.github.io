import { configureStore, createSlice } from "@reduxjs/toolkit";

const changeMode = createSlice({
    name: '다크모드',
    initialState: false,
    reducers: {
        change: (state) => !state
    }
})

export const { change } = changeMode.actions;

const changeNav = createSlice({
    name: '네비게이션',
    initialState: false,
    reducers: {
        change: (state) => !state
    }
})
export const { changenav } = changeNav.actions;


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
        changeNav: changeNav.reducer,
        // LoadingPage: LoadingPage.reducer
    }
});

export default store;