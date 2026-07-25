const Info = ({ icon, title, value }) => {
  return (
    <div
      className="
        group
        flex
        items-start
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-gradient-to-br
        from-white
        to-slate-50
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-200
        hover:shadow-lg
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-sky-100
          to-cyan-100
          text-sky-600
          text-xl
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:rotate-3
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-slate-400">
          {title}
        </p>

        <p className="mt-1 break-words text-[clamp(.95rem,1.3vw,1.05rem)] font-semibold leading-6 text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
};

export default Info;
