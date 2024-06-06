import PagesTitle from "@/components/PagesTitle";
import RecentTransactionBox from "@/components/ui/Overview/RecentTransactionBox";
import Summary from "@/components/ui/Overview/Summary";
import Totals from "@/components/ui/Overview/Totals";

const Overview = () => {
  return (
    <div className="flex flex-col gap-3">
      <PagesTitle title="Overview" />

      <div className="flex gap-2">
        <div className="flex w-full flex-col gap-3">
          <Summary />
          <Totals />
        </div>

        <div className="w-[40%]">
          <RecentTransactionBox />
        </div>
      </div>
    </div>
  );
};

export default Overview;
