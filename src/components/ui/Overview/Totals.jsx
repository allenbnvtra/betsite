import Calendar from './Calendar';
import Computed from './Computed';

const Totals = () => {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
      <Calendar />
      <Computed />
    </div>
  );
};

export default Totals;
