import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../features/Pagination/paginationSlice';
import SelecedPage from './SelecedPage';

const Pagination = () => {
    const dispatch = useDispatch();
    const [transactions, setTransactions] = useState([])
    const { pageNumber, perPageExpenses } = useSelector(
        (state) => state.pagination
    );

    const totalPages = Math.ceil(transactions.length / perPageExpenses);

    const handlePageChange = (number) => {
        dispatch(changePage(number))
    };

    let paginationArray = [];

    for (let i = 1; i <= totalPages; i++) {
        paginationArray.push(i)
    }
    useEffect(() => {
        fetch("https://think-in-redux-way-server.herokuapp.com/transactions")
            .then(res => res.json())
            .then(data => setTransactions(data));
    }, [transactions]);
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">

                {/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}

                {
                    paginationArray.map((selectedPageNumber, index) => <SelecedPage pageNumber={pageNumber} selectedPageNumber={selectedPageNumber} handlePageChange={handlePageChange} key={index} />)
                }

            </div>
        </section>
    );
};

export default Pagination;