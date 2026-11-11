const SkillCard = ({ name, icon }) => {
  return (
    <div className="group flex min-h-[136px] flex-col items-center justify-center gap-3.5 rounded-2xl border border-blue-200/80 bg-white px-4 py-6 text-center shadow-[0_6px_18px_rgba(37,99,235,0.07),0_2px_6px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_14px_28px_rgba(37,99,235,0.14),0_4px_10px_rgba(15,23,42,0.06)] dark:border-slate-700 dark:bg-slate-800/95 dark:shadow-[0_6px_18px_rgba(0,0,0,0.3)] dark:hover:border-blue-500/70">
      <div
        className="flex h-14 w-14 items-center justify-center transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-100 sm:text-[15px]">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
