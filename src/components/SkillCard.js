const SkillCard = ({ name, icon }) => {
  return (
    <div className="group flex min-h-[132px] flex-col items-center justify-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-6 text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_24px_rgba(37,99,235,0.1)] dark:border-slate-700/80 dark:bg-slate-800/90 dark:hover:border-blue-500/60">
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
