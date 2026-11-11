import Link from "next/link";

const HireMe = () => {
  const firstWord = "Available For Work • ";
  const secondWord = "Available For Work • ";
  const text = (firstWord + secondWord).repeat(2);

  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center overflow-hidden max-md:right-8 max-md:left-auto max-md:top-0 max-md:bottom-auto max-md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative max-md:w-24">
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
          <text fontSize="28" fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="8">
            <textPath href="#circle" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        <Link
          href="mailto:boobalanvaithiyanthan1@gmail.com"
          className="flex items-center justify-center absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 shadow-md border border-solid bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25 max-md:w-12 max-md:h-12 max-md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
