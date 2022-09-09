import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterMode: "",
    search: "",
    reset: false
}

const filterSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        selecteFilterMode: (state, action) => {
            state.filterMode = action.payload
            state.search = ""
        },
        searched: (state, action) => {
            state.search = action.payload;
            state.reset = false
            state.filterMode = ''
        },
        resetFilters: (state) => {
            state.reset = true
            state.search = ""
            state.filterMode = ""

        }
    }
});

export default filterSlice.reducer;
export const { selecteFilterMode, resetFilters, searched } = filterSlice.actions