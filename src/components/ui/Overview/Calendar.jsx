import { useState, useEffect } from 'react';
import { format, endOfMonth } from 'date-fns';

const Calendar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const cachedStartDate = localStorage.getItem('startDate');
    const cachedEndDate = localStorage.getItem('endDate');

    if (cachedStartDate && cachedEndDate) {
      setStartDate(cachedStartDate);
      setEndDate(cachedEndDate);
    } else {
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

      const formattedStartDate = format(start, 'yyyy-MM-dd');
      const formattedEndDate = format(end, 'yyyy-MM-dd');

      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);

      localStorage.setItem('startDate', formattedStartDate);
      localStorage.setItem('endDate', formattedEndDate);
    }
  }, []);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    localStorage.setItem('startDate', newStartDate);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    localStorage.setItem('endDate', newEndDate);
  };

  return (
    <div className="flex flex-col items-center justify-between text-sm text-slate-700 xs:flex-row">
      <p className="font-medium">Total Summary</p>
      <div className="my-4 flex items-center space-x-1 xs:my-0">
        <input
          type="date"
          name="start-date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Start Date"
          className="rounded-full border border-slate-300 px-2 py-1 text-sm"
        />
        <span className="text-slate-500">to</span>
        <input
          type="date"
          name="end-date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="End Date"
          className="rounded-full border border-slate-300 px-2 py-1 text-sm"
        />
      </div>
    </div>
  );
};

export default Calendar;
