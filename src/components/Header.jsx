import { useEffect, useState } from "react";
import header from "../assets/header.png";
import header1 from "../assets/header1.png";
import { Link } from "react-router";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bgImage = isMobile ? header1 : header;

  return (
    <>
      <header className="bg-[#fc0606] text-white p-4 shadow-md sticky top-0 z-10">
        <nav className="container mx-auto flex justify-center items-center ">
          <ul className="flex space-x-4 rtl:space-x-reverse gap-4">
            <li className="hover:scale-110 transition">
              <a
                href="#telegram"
                className="text-[#ffe4e4] transition duration-300 hover:text-[#fff] hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.3)] flex text-center"
              >
                کانال تلگرام
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a
                href="#app"
                className="text-[#ffe4e4] transition duration-300 hover:text-[#fff] hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.3)] flex text-center"
              >
                دانلود اپلیکیشن
              </a>
            </li>
            <li className="hover:scale-110 transition">
              <a
                href="#robot"
                className="text-[#ffe4e4] transition duration-300 hover:text-[#fff] hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.3)] flex text-center"
              >
                ربات فروش تلگرام
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative">
        <img
          src={bgImage}
          alt="My image"
          className="w-full h-full object-cover"
        />
        {isMobile ? (
          <>
            <a
              href="#"
              className="flex items-center justify-center hover:bg-slate-300 transition text-center absolute top-[43%] text-xl max-sm:text-lg max-[458px]:text-base max-[458px]:w-[35%] max-[458px]:right-[-8%] font-black transform -translate-x-1/2 -translate-y-1/2 bg-white hover:text-gray-800 text-black rounded-3xl h-[50px] w-[28%] py-2 px-4"
            >
              اپ اختصاصی
            </a>
            <a
              href="#"
              className="flex items-center justify-center hover:bg-slate-300 transition text-center absolute top-[43%] text-xl max-sm:text-lg max-[458px]:text-base max-[458px]:w-[35%] max-[458px]:right-[35%] font-black right-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-white hover:text-gray-800 text-black rounded-3xl h-[50px] w-[28%] py-2 px-4"
            >
              V2Ray
            </a>
            <button className="absolute top-[75%] text-xl font-bold -right-[25%] transform -translate-x-1/2 -translate-y-1/2 text-white rounded-3xl h-[50px] w-[50%] py-2 px-4">
              دریافت تست رایگان قبل از خرید
            </button>
          </>
        ) : (
          <>
            <a
              href="#"
              className="flex items-center justify-center hover:bg-slate-300 transition text-center absolute top-[55%] text-xl font-black right-[5%] transform -translate-x-1/2 -translate-y-1/2 bg-white hover:text-gray-800 text-black rounded-3xl h-[50px] w-[18%] py-2 px-4"
            >
              اپ اختصاصی
            </a>
            <a
              href="#"
              className="flex items-center justify-center hover:bg-slate-300 transition text-center absolute top-[55%] text-xl font-black right-[25%] transform -translate-x-1/2 -translate-y-1/2 bg-white hover:text-gray-800 text-black rounded-3xl h-[50px] w-[18%] py-2 px-4"
            >
              V2Ray
            </a>
            <button className="absolute top-[85%] text-3xl font-black -right-[3%] transform -translate-x-1/2 -translate-y-1/2 text-white rounded-3xl h-[50px] w-[36%] py-2 px-4">
              دریافت تست رایگان قبل از خرید
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
