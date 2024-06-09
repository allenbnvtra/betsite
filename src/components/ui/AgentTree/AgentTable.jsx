'use client';
import React, { useState } from 'react';
import Pagination from './Pagination';
import { IoSearch } from 'react-icons/io5';

const AgentTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-medium">Agent Tree</h1>
        <button className="rounded-md bg-indigo-800 px-4 py-2 text-sm font-light text-white">
          Add Agent
        </button>
      </div>

      {/* Table */}
      <div className="mb-2 mt-7 justify-between sm:flex">
        <div className="relative">
          <IoSearch className="text-md absolute left-3 top-2 text-gray-500" />
          <input
            type="search"
            name="search"
            placeholder="Agent Name"
            className="w-full rounded-md border-2 border-slate-300 py-1 pl-9 pr-3 text-sm sm:w-[20rem]"
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
      <div className="h-[34rem] overflow-x-auto rounded-md border">
        <table className="w-full">
          <colgroup>
            <col className="w-[5%]" />
            <col className="w-[25%]" />
            <col className="w-[10%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
          </colgroup>

          <thead>
            <tr className="text-sm text-slate-700">
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Role
              </th>
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Username
              </th>
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Currency
              </th>
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Player Count
              </th>
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Balance
              </th>
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Credits
              </th>
              <th className="bg-gray-200 px-5 py-4 text-center font-medium">
                Pending Commission
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-sm text-slate-700">
              <td className="flex justify-center border-b py-2">
                <p className="rounded-md border-2 border-green-400 bg-green-100 p-1 text-green-700">
                  AG
                </p>
              </td>
              <td className="border-b py-2 text-center">
                <div className="flex w-full items-center justify-center">
                  <span className="w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap text-center">
                    agentUSernameeeeeeeeeeeeeee
                  </span>
                </div>
              </td>
              <td className="border-b py-2 text-center">PHP</td>
              <td className="border-b py-2 text-center">10</td>
              <td className="border-b py-2 text-center">7,840.58</td>
              <td className="border-b py-2 text-center">0</td>
              <td className="border-b py-2 text-center">6,130.87</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentTable;
