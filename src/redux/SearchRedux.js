import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: null
    },
    reducers: {
        searchFun: (state, action) => {
            state.search = action.payload
        },
    },
});

export const { searchFun } = searchSlice.actions
export default searchSlice.reducer;
