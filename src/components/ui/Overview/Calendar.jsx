import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";

const Calendar = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();

    let start, end;

    if (day <= 15) {
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      end = new Date(today.getFullYear(), today.getMonth(), 15);
    } else {
      start = new Date(today.getFullYear(), today.getMonth(), 16);
      end = endOfMonth(today);
    }

    setStartDate(format(start, "yyyy-MM-dd"));
    setEndDate(format(end, "yyyy-MM-dd"));
  }, []);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="flex items-center justify-between text-sm text-slate-700">
      <p className="font-medium">Total Summary</p>
      <div className="flex items-center space-x-2">
        <input
          type="date"
          name="start-date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Start Date"
          className="rounded-full border border-slate-300 px-2 py-1"
        />
        <span className="text-slate-500">to</span>
        <input
          type="date"
          name="end-date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="End Date"
          className="rounded-full border border-slate-300 px-2 py-1"
        />
      </div>
    </div>
  );
};

export default Calendar;
