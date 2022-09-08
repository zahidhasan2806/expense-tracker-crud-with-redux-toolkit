import axios from "../../utils/axios";

export const getTransactions = async (filterMode, search, pageNumber, perPageExpenses) => {
    let queryString = "";
    if (search !== "") {
        pageNumber = 1;
        const searchString = search.split("").map(word => `name_like=${word}`.join("&"))
        queryString += `&${searchString}`;
    }
    if (filterMode !== "") {
        pageNumber = 1;
        queryString += `type=${filterMode}`

    }
    const response = await axios.get(`/transactions/?${queryString}&_limit=${perPageExpenses}&_page=${pageNumber}`);

    return response.data;
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
};
