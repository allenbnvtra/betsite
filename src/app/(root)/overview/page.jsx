import PagesTitle from '@/components/PagesTitle';
import Overview from '@/components/ui/Overview/Overview';

const OverviewPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <PagesTitle title="Overview" />

      <Overview />
    </div>
  );
};

export default OverviewPage;
