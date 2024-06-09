'use client';
import DataGraph from '@/components/ui/Overview/DataGraph';
import RecentTransactionBox from '@/components/ui/Overview/RecentTransactionBox';
import Summary from '@/components/ui/Overview/Summary';
import Totals from '@/components/ui/Overview/Totals';
import { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im';

const Overview = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white bg-opacity-75">
          <ImSpinner3 className="animate-spin text-3xl text-blue-800" />
        </div>
      )}
      <div className="space-y-4 lg:col-span-2">
        <Summary />
        <Totals />
      </div>

      <div className="space-y-4 lg:col-span-1">
        <RecentTransactionBox />
        <DataGraph />
      </div>
    </div>
  );
};

export default Overview;
