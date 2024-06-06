import React from "react";
import Box from "./Box";
import { BsPeople } from "react-icons/bs";
import { LuTimerReset } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Summary = () => {
  return (
    <div className="flex gap-2">
      <Box
        icon={<BsPeople />}
        title="Total Player/s"
        rating="1 new player"
        value="10"
      />
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
  );
};

export default Summary;
