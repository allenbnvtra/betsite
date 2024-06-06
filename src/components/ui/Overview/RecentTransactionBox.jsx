import { HiDotsHorizontal } from "react-icons/hi";

const RecentTransactionBox = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
      <div className="flex justify-between text-sm text-slate-700">
        <p className="font-medium">Recent Transactions</p>
        <HiDotsHorizontal className="cursor-pointer text-xl" />
      </div>

      {/* <div className="h-[315px] flex justify-center items-center">
        <p className="text-sm text-slate-700">No transaction found.</p>
      </div> */}

      <table className="mt-4 w-full">
        <thead className="bg-slate-200 text-xs text-slate-800">
          <tr>
            <th className="p-3 text-center font-normal">Username</th>
            <th className="p-3 text-center font-normal">Amount</th>
            <th className="p-3 text-center font-normal">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b text-xs text-slate-800">
            <td className="p-2 text-center">testuser</td>
            <td className="p-2 text-center">₱10,293.00</td>
            <td className="flex justify-center p-2 text-center">
              <p className="rounded-lg border border-green-800 bg-green-200 px-2 py-1 text-green-800">
                Deposit
              </p>
            </td>
          </tr>

          <tr className="border-b text-xs text-slate-800">
            <td className="p-2 text-center">testuser</td>
            <td className="p-2 text-center">₱1,003.00</td>
            <td className="flex justify-center p-2 text-center">
              <p className="rounded-lg border border-red-800 bg-red-200 px-2 py-1 text-red-800">
                Withdrawal
              </p>
            </td>
          </tr>

          <tr className="border-b text-xs text-slate-800">
            <td className="p-2 text-center">testuser</td>
            <td className="p-2 text-center">₱10,293.00</td>
            <td className="flex justify-center p-2 text-center">
              <p className="rounded-lg border border-green-800 bg-green-200 px-2 py-1 text-green-800">
                Deposit
              </p>
            </td>
          </tr>

          <tr className="border-b text-xs text-slate-800">
            <td className="p-2 text-center">testuser</td>
            <td className="p-2 text-center">₱1,003.00</td>
            <td className="flex justify-center p-2 text-center">
              <p className="rounded-lg border border-red-800 bg-red-200 px-2 py-1 text-red-800">
                Withdrawal
              </p>
            </td>
          </tr>

          <tr className="border-b text-xs text-slate-800">
            <td className="p-2 text-center">testuser</td>
            <td className="p-2 text-center">₱10,293.00</td>
            <td className="flex justify-center p-2 text-center">
              <p className="rounded-lg border border-green-800 bg-green-200 px-2 py-1 text-green-800">
                Deposit
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactionBox;
