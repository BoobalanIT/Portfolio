import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-base sm:text-lg dark:text-light dark:border-light">
      <div className="py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-2 text-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <span>2026 &copy; Boobalan V. All Rights Reserved.</span>
        <div className="flex items-center justify-center gap-4 text-sm sm:text-base">
          <span>Chennai, India</span>
          <span>&bull;</span>
          <Link href="/contact" className="underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark">
            Say Hello
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
