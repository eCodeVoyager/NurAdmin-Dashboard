import React, { useEffect, useState } from "react";
import BredCrumb from "../components/shared/Buredcrumb/BredCrumb";
import data from "../lib/FakeDB";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiEye, FiDownload } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Helmet } from "react-helmet";
import UserServices from "../services/UserServices";

const Tables = () => {
  console.log(data);
  const [tableData, setTableData] = useState(
    data.map((item) => ({
      username: item.username,
      email: item.email,
      role: item.role,
    }))
  );

  useEffect(() => {
    UserServices.getAllusers().then((res) => {
      setTableData(res.data);
    });
  }, []);

  const [entriesPerPage, setEntriesPerPage] = useState(10); // Updated to show 10 data per page
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Handler for changing the number of entries per page
  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10)); // Parse the selected value to an integer
    setCurrentPage(1); // Reset current page when entries per page changes
  };

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset current page when search query changes
  };

  // Filter data based on search query
  const filteredData = tableData.filter(
    (item) =>
      (item.username &&
        item.username.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.email &&
        item.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.role && item.role.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Calculate the total number of pages based on the number of entries per page
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  // Slice the data to display only the entries for the current page
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Helmet>
        <title>NurAdmin | Table</title>
      </Helmet>
      <div className="container_fluid">
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Data Tables "} />

          <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
            <div className="rounded-sm border border-stroke bg-white shadow-default overflow-x-auto">
              <div className="px-[1.875rem] py-[1.125rem] border-b flex justify-between w-[45rem] md:w-auto">
                <div className="w-[15rem] md:w-[25rem]">
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="px-[1.25rem] h-[46px] w-full border focus:outline-none rounded-md"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <select
                    name="entriesPerPage"
                    value={entriesPerPage}
                    onChange={handleEntriesPerPageChange}
                    className="cursor-pointer focus:border-none focus:outline-none"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value={filteredData.length}>All</option>
                  </select>
                  <p className="capitalize p-0 text-sm font-medium whitespace-nowrap">
                    Entries per page
                  </p>
                </div>
              </div>
              <div className="w-full">
                <table className="w-full">
                  <thead>
                    <tr className="pb-8">
                      <th className="whitespace-nowrap text-sm font-normal text-gray-700 pl-[1.875rem] py-4">
                        Username
                      </th>
                      <th className="whitespace-nowrap text-sm font-normal text-gray-700 py-4">
                        Email
                      </th>
                      <th className="whitespace-nowrap text-sm font-normal text-gray-700 py-4">
                        Role
                      </th>
                      <th className="whitespace-nowrap text-sm font-normal text-gray-700 py-4">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((item, index) => (
                      <tr key={index} className="border">
                        <td className="whitespace-nowrap text-sm font-normal text-gray-700 pl-[1.875rem] py-4">
                          {item.username}
                        </td>
                        <td className="whitespace-nowrap text-sm font-normal text-gray-700 py-4">
                          {item.email}
                        </td>
                        <td className="whitespace-nowrap text-sm font-normal text-gray-700 py-4">
                          {item.role}
                        </td>
                        <td className="whitespace-nowrap text-sm font-normal text-gray-700 pr-[1.125rem] py-4">
                          <div className="flex items-center justify-end space-x-3">
                            <button className="hover:text-primary">
                              <FiEye className="text-lg" />
                            </button>
                            <button className="hover:text-primary">
                              <AiOutlineDelete className="text-lg" />
                            </button>
                            <button className="hover:text-primary">
                              <FiDownload className="text-lg" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between px-[1.875rem] py-[2rem]">
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-gray-600 rounded-md disabled:opacity-50"
                  >
                    <IoIosArrowBack />
                  </button>

                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`mx-1 px-3 py-1 rounded-md ${
                        currentPage === number
                          ? "bg-primary text-white"
                          : "text-blue-500"
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prevPage) =>
                        Math.min(prevPage + 1, totalPages)
                      )
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-gray-600 rounded-md disabled:opacity-50"
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
                <div>
                  <span>
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, filteredData.length)} of{" "}
                    {filteredData.length} entries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
