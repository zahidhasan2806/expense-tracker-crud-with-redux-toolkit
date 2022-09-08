import React from 'react';

const SelecedPage = ({ pageNumber, selectedPageNumber, handlePageChange }) => {
    const style = selectedPageNumber === pageNumber ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
    return (
        <div
            className={style}
            onClick={() => { handlePageChange(selectedPageNumber) }}
        >
            {selectedPageNumber}
        </div>
    );
};

export default SelecedPage;