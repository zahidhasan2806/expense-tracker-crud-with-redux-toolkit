import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../features/transaction/transactionSlice';
import Form from '../components/Form'
import Alltransaction from './Alltransaction';
import { useState } from 'react';
import Pagination from '../components/ui/Pagination';
import RadioFilter from '../components/FilterTypes/RadioFilter';
import SearchFilter from '../components/FilterTypes/SearchFilter';
import { Link } from 'react-router-dom';
const AllTransactions = () => {
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false)

    const { transactions, isLoading, isError } = useSelector(
        (state) => state.transaction
    );
    const { filterMode, search } = useSelector(
        (state) => state.filters
    );
    const { pageNumber, perPageExpenses } = useSelector(
        (state) => state.pagination
    );

    useEffect(() => {
        dispatch(fetchTransactions({ filterMode, search, pageNumber, perPageExpenses }));
    }, [dispatch, filterMode, search, pageNumber, perPageExpenses]);
    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {
        content = transactions.map((transaction) => (
            <Alltransaction key={transaction.id} setShowEditForm={setShowEditForm} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }




    return (
        <>

            <div className='form'>
                <SearchFilter />
                <RadioFilter />
            </div>
            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
                <div className='flex justify-between'>
                    <div>
                        <Link to="/">
                            <button
                                className="bg-green-500 text-white px-4 py-1 rounded-full cursor-pointer"
                            >
                                Go to Home page
                            </button>
                        </Link>
                    </div>
                    <div>

                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllTransactions;