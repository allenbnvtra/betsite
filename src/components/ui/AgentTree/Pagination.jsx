import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mt-4 flex items-center justify-end space-x-1 text-sm">
      <button
        className={`border px-2 ${currentPage === 1 ? 'bg-gray-200' : 'bg-white'}`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`border px-2 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => handleClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={`border px-2 ${currentPage === totalPages ? 'bg-gray-200' : 'bg-white'}`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
