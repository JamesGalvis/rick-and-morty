import React from 'react'

function NavPage({ page, setPage }) {
  return (
    <nav className="flex items-center justify-around py-6 ">
      <button 
      className="w-20 md:text-base text-sm font-medium text-slate-900 md:p-2 py-2 rounded-md bg-lime-450/80 hover:bg-lime-450/70"
      onClick={() => setPage(page === 1 ? 1 : page - 1)}
      >
        Previous
      </button>
      <span className="text-lg font-medium text-gray-400/95">Page {page}</span>
      <button className="w-20 md:text-base text-sm font-medium text-slate-900 md:p-2 py-2 rounded-md bg-lime-450/80 hover:bg-lime-450/70"
      onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </nav>
  )
}

export default NavPage
