import { useState } from 'react'

const users = ['Irfan', 'Aman', 'Rahul', 'Sneha', 'Priya', 'Karan']

const SearchFilter = () => {
  const [search, setSearch] = useState('')

  // Trim input to avoid issues with accidental spaces
  const filtered = users.filter(name =>
    name.toLowerCase().includes(search.trim().toLowerCase())
  )

  const clearSearch = () => setSearch('')

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold text-center mb-2">
            🔍 Search Filter
          </h2>
          <p className="text-center text-blue-100">
            Find users by name
          </p>
        </div>

        {/* Search Section */}
        <div className="p-6">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for a name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search name"
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg placeholder-gray-400"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Results */}
          <div className="space-y-3">
            {filtered.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''} found
                  </span>
                </div>
                <div className="space-y-2">
                  {filtered.map((name, index) => (
                    <div
                      key={name}
                      className="group bg-linear-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {name.charAt(0)}
                        </div>
                        <span className="text-lg font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.882-5.833-2.209" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg font-medium">No results found</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
