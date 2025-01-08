const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose md:text-left">
          <a
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            All rights reserved 2025
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
