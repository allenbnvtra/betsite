'use client';
import React, { useState, useEffect } from 'react';
import Box from './Box';
import { BsPeople } from 'react-icons/bs';
import { LuTimerReset } from 'react-icons/lu';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const Summary = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {isMobile && (
        <div className="mb-2 mt-[-1rem] flex justify-end">
          <button
            className="mb-3 text-end text-sm text-slate-800 underline"
            onClick={handleToggle}
          >
            {showAll ? 'Show Less' : 'See All'}
          </button>
        </div>
      )}
      <div className="grid-col-1 grid gap-3 sm:grid-cols-3">
        <Box
          icon={<BsPeople />}
          title="Total Player/s"
          rating="1 new player"
          value="10"
        />
        {isMobile ? (
          <div>
            {showAll && (
              <div className="flex flex-col gap-3">
                <Box
                  icon={<RiMoneyDollarCircleLine />}
                  title="Total Player Credit/s"
                  rating="+10% increase"
                  value="₱10,293.00"
                />
                <Box
                  icon={<LuTimerReset />}
                  title="Total Open Bet/s"
                  rating="+20% increase"
                  value="₱100,092.30"
                />
              </div>
            )}
          </div>
        ) : (
          <>
            <Box
              icon={<RiMoneyDollarCircleLine />}
              title="Total Player Credit/s"
              rating="+10% increase"
              value="₱10,293.00"
            />
            <Box
              icon={<LuTimerReset />}
              title="Total Open Bet/s"
              rating="+20% increase"
              value="₱100,092.30"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;
