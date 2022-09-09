import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTransaction } from '../features/transaction/transactionSlice';

const Modal = ({ setModalOpen }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state) => state.transaction);
    const { editing } = useSelector((state) => state.transaction) || {};


    const reset = () => {
        setName("");
        setType("");
        setAmount("");
    };

    // listen for edit mode active
    useEffect(() => {
        const { id, name, amount, type } = editing || {};
        if (id) {
            setName(name);
            setType(type);
            setAmount(amount);
        } else {
            reset();
        }
    }, [editing]);
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            changeTransaction({
                id: editing?.id,
                data: {
                    name: name,
                    amount: Number(amount),
                    type: type,
                },
            })
        );

        reset();
    };

    const cancelEditMode = () => {
        setModalOpen(false)
        reset();

    };

    return (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            {/* <div class="fixed inset-0 bg-opacity-80 transition-opacity"></div> */}

            <div class="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">

                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 class="text-lg font-medium text-center leading-6 text-gray-900" id="modal-title">Update Your Transaction</h3>
                                    <hr />
                                    <div class="mt-2 form">

                                        <form onSubmit={handleUpdate}>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    placeholder="enter title"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group radio">
                                                <label>Type</label>
                                                <div className="radio_group">
                                                    <input
                                                        required
                                                        type="radio"
                                                        value="income"
                                                        name="type"
                                                        checked={type === "income"}
                                                        onChange={(e) => setType("income")}
                                                    />
                                                    <label>Income</label>
                                                </div>
                                                <div className="radio_group">
                                                    <input
                                                        type="radio"
                                                        value="expense"
                                                        name="type"
                                                        placeholder="Expense"
                                                        checked={type === "expense"}
                                                        onChange={(e) => setType("expense")}
                                                    />
                                                    <label>Expense</label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Amount</label>
                                                <input
                                                    type="number"
                                                    required
                                                    placeholder="enter amount"
                                                    name="amount"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>

                                            <button disabled={isLoading} className="btn" type="submit">
                                                Update Transaction
                                            </button>

                                            {!isLoading && isError && (
                                                <p className="error">There was an error occured</p>
                                            )}
                                        </form>
                                        <button className="btn cancel_edit" onClick={cancelEditMode}>
                                            Cancel Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;