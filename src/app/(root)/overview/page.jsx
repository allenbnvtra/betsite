import PagesTitle from '@/components/PagesTitle';
import RecentTransactionBox from '@/components/ui/Overview/RecentTransactionBox';
import Summary from '@/components/ui/Overview/Summary';
import Totals from '@/components/ui/Overview/Totals';

const Overview = () => {
  return (
    <div className="flex flex-col gap-3">
      <PagesTitle title="Overview" />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Summary />
          <Totals />
        </div>

        <div className="lg:col-span-1">
          <RecentTransactionBox />
        </div>
      </div>
    </div>
  );
};

export default Overview;
