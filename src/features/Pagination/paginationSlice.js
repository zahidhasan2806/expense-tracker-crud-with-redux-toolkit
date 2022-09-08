const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    pageNumber: 1,
    perPageExpenses: 10
};


const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.pageNumber = action.payload;
        },

        resetPagination: (state) => {
            state.pageNumber = 1;
        }

    }
})
export const { changePage, resetPagination } = paginationSlice.actions
export default paginationSlice.reducer;