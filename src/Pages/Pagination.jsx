import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = data.slice(startIndex, startIndex + pageSize);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-2">
            📄 Pagination
          </h1>
          <p className="text-center text-emerald-100">
            Navigate through your data
          </p>
        </div>

        <div className="p-6">
          {/* Page Size Selector */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-600">Items per page:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
          </div>

          {/* Items List */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + pageSize, data.length)} of {data.length} items
              </span>
            </div>
            <div className="grid gap-3">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200 transform hover:scale-[1.01]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {startIndex + index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center space-x-1">
                {getVisiblePages().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' && setCurrentPage(page)}
                    disabled={page === '...'}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                      page === currentPage
                        ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg transform scale-105'
                        : page === '...'
                        ? 'cursor-default text-gray-400'
                        : 'bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
              >
                <span className="hidden sm:inline">Next</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
