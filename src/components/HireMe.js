import Link from "next/link";

const HireMe = () => {
  const text = "Available For Work • ".repeat(3);

  return (
    <div className="hidden lg:flex fixed left-4 bottom-4 flex-col items-center justify-center overflow-hidden z-20">
      <div className="w-36 xl:w-44 h-auto flex items-center justify-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="496"
          height="496"
          viewBox="0 0 496 496"
          className="w-full h-auto fill-dark dark:fill-light animate-spin-slow"
        >
          <defs>
            <path
              id="circle"
              d="M 248, 248 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
            />
          </defs>
          <text fontSize="26" fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="6">
            <textPath href="#circle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        <Link
          href="mailto:boobalanvaithiyanthan1@gmail.com"
          className="flex items-center justify-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid bg-dark rounded-full text-white w-16 h-16 xl:w-20 xl:h-20 text-xs xl:text-sm font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
