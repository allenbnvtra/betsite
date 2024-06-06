const Box = ({ icon, rating, title, value }) => {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="rounded-md border border-slate-200 p-2 text-lg">
            {icon}
          </div>
          <p className="text-xs font-light text-slate-700">{rating}</p>
        </div>

        <p className="text-sm font-light text-slate-700">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default Box;
