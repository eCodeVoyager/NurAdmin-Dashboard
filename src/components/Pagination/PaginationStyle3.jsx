import React from 'react'

const PaginationStyle3 = () => {
  return (
    <nav>
    <ul className="flex flex-wrap items-center gap-2">
      <li>
        <a className="flex items-center justify-center rounded bg-[#EDEFF1] px-3 py-1.5 text-xs font-medium text-black hover:bg-primary hover:text-white " href="#">
          Previous
        </a>
      </li>
      <li>
        <a className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary text-secondary hover:text-white" href="#">1</a>
      </li>
      <li>
        <a className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary text-secondary hover:text-white" href="#">2</a>
      </li>
      <li>
        <a className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary text-secondary hover:text-white" href="#">3</a>
      </li>
      <li>
        <a className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary text-secondary hover:text-white" href="#">4</a>
      </li>
      <li>
        <a className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary text-secondary hover:text-white" href="#">5</a>
      </li>
      <li>
        <a className="flex items-center justify-center rounded bg-[#EDEFF1] px-3 py-1.5 text-xs font-medium text-black hover:bg-primary hover:text-white" href="#">
          Next
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default PaginationStyle3
