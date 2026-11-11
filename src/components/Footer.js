
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light max-sm:text-base">
      <div className="py-8 flex items-center justify-between px-32 xl:px-24 max-lg:px-16 max-md:px-12 max-sm:px-8 max-lg:py-6 max-lg:flex-col max-lg:gap-2">
        <span>2026 &copy; Boobalan V. All Rights Reserved.</span>
        <div className="flex items-center gap-4 text-base max-sm:text-sm">
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
