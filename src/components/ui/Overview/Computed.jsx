'use client';

import { totalSummary } from '@/constants';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Computed = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500, // xs breakpoint for tailwind
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="z-0 mb-3 mt-2 flex w-full flex-col justify-center gap-7 pb-3">
      {isMobile ? (
        <Slider {...settings}>
          {totalSummary.map(({ category, items }) => (
            <div key={category}>
              <h1 className="text-md mb-2 text-center font-semibold text-slate-700">
                {category}
              </h1>
              {items.map(({ title, amount }) => (
                <div key={title} className="w-full border-x py-5 xs:w-[15rem]">
                  <p className="text-center text-sm font-light text-slate-800">
                    {title}
                  </p>
                  <div className="flex justify-center">
                    <p className="mt-1 rounded-full border-2 border-indigo-500 bg-indigo-50 px-3 py-1 text-center text-sm font-medium text-indigo-800">
                      {amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          {totalSummary.map(({ category, items }) => (
            <div key={category}>
              <h1 className="text-md mb-2 text-center font-semibold text-slate-700">
                {category}
              </h1>
              <div className="mb-3 flex justify-center gap-3">
                {items.map(({ title, amount }) => (
                  <div
                    key={title}
                    className="w-full border-x py-5 xs:w-[15rem]"
                  >
                    <p className="text-center text-sm font-light text-slate-800">
                      {title}
                    </p>
                    <div className="flex justify-center">
                      <p className="mt-1 rounded-full border-2 border-indigo-500 bg-indigo-50 px-3 py-1 text-center text-sm font-medium text-indigo-800">
                        {amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Computed;
