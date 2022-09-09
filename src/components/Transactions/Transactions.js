import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();

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
        content = transactions.slice(-5).reverse().map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <>
            <p className="second_heading">Recently added transactions :</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
            <Link to="/all-transactions">
                <button className="bg-green-500 text-white px-6 py-1 rounded-full cursor-pointer w-96">View All</button>
            </Link>
        </>
    );
}
