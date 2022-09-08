import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";
import paginationReducer from '../features/Pagination/paginationSlice';
import filtersReducers from "../features/filter/filterSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        pagination: paginationReducer,
        filters: filtersReducers
    },
});
