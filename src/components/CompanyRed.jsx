import Header from "./Header";
import Footer from "./Footer";
import svg1 from "../assets/1.svg";
import svg2 from "../assets/2.svg";
import svg3 from "../assets/3.svg";
import PricingCard from "./PricingCard";
import Union from "../assets/Union.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const CompanyRed = () => {
  return (
    <div>
      <Header />

      <div className=" bg-gray-100">

        <div className="container mx-auto space-y-2 flexs justify-between m-auto w-4/5">
          {/* سطر 1: SVG سمت راست */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-10 py-7">
            <div className="w-full flex items-center justify-between">
              <div className="w-full md:max-w-[40%]">
                <div className="flex">
                  <h2 className="text-2xl leading-loose font-bold text-red-600 mb-2">
                    سرعت بالا و قیمت مناسب
                  </h2>
                  <img className="hidden md:block mb-2" src={Union} />
                </div>

                <p className=" text-lg leading-loose text-gray-600">
                  سرعت بالا: رد سرور با به‌کارگیری از سرورهای قدرتمند بهترین
                  سرعت را در اختیار شما قرار خواهد داد.
                  <br />
                  قیمت مناسب: تیم رد سرور در این شرایط بد اقتصادی، بهترین قیمت
                  سرور را در اختیار شما قرار می‌دهد.
                </p>
              </div>
              <img className="pt-4 hidden md:block " src={svg1} />
            </div>
          </div>
        </div>


        {/* cards */}
        <div className="w-full bg-gray-100 flex justify-center">
          <div className=" bg-gray-100 py-7 flex flex-col w-4/5 ">
            <div>
              <h2 className="text-2xl font-bold text-center text-black mt-5 mb-10">
                سرویس حجمی v2ray برای اندروید - آیفون - ویندوز
              </h2>
            </div>
            <div className="container mx-auto  gap-10 ">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  1536: { slidesPerView: 4, spaceBetween: 30 }, // 2xl
                  1280: { slidesPerView: 4, spaceBetween: 30 }, // lg
                  1024: { slidesPerView: 3, spaceBetween: 20 }, // md
                  768: { slidesPerView: 2, spaceBetween: 15 }, // sm
                  640: { slidesPerView: 1, spaceBetween: 10 }, // xs
                  0: { slidesPerView: 1, spaceBetween: 10 },
                }}
              >
                <SwiperSlide>
                  <PricingCard
                    title="3 ماه حجم 120 گیگ"
                    type="حرفه‌ای"
                    price="۲۴۰,۰۰۰"
                    price1="۲۴۰,۰۰۰"
                    features={[
                      "سرعت پایدار",
                      "آی‌پی ثابت",
                      "پشتیبانی پس از فروش",
                      "قیمت مناسب",
                    ]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PricingCard
                    title="3 ماه حجم 120 گیگ"
                    type="V2RAY"
                    price="۲۴۰,۰۰۰"
                    price1="۲۴۰,۰۰۰"
                    features={[
                      "سرعت پایدار",
                      "آی‌پی ثابت",
                      "پشتیبانی پس از فروش",
                      "قیمت مناسب",
                    ]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PricingCard
                    title="6 ماه حجم 240 گیگ"
                    type="اقتصادی"
                    price="۴۵۰,۰۰۰"
                    price1="۴۵۰,۰۰۰"
                    features={[
                      "سرعت عالی",
                      "آی‌پی ثابت",
                      "پشتیبانی فوری",
                      "قیمت مناسب",
                    ]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PricingCard
                    title="12 ماه حجم 450 گیگ"
                    type="پیشرفته"
                    price="۹۵۰,۰۰۰"
                    price1="۹۵۰,۰۰۰"
                    features={[
                      "سرعت فوق‌العاده",
                      "آی‌پی دائمی",
                      "پشتیبانی فوری",
                      "قیمت ویژه",
                    ]}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 flex justify-center">
          <div className=" bg-gray-100 py-7 flex flex-col w-4/5 ">
            <div>
              <h2 className="text-2xl font-bold text-center text-black mb-10">
                سرویس اپلیکیشن نامحدود رد سرور برای اندروید{" "}
              </h2>
            </div>
            <div className="container mx-auto gap-10 ">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  1536: { slidesPerView: 4, spaceBetween: 30 },
                  1280: { slidesPerView: 4, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 15 },
                  640: { slidesPerView: 1, spaceBetween: 10 },
                  0: { slidesPerView: 1, spaceBetween: 10 },
                }}
              >
                <SwiperSlide>
                  <PricingCard
                    title="3 ماه حجم 120 گیگ"
                    type="حرفه‌ای"
                    price="۲۴۰,۰۰۰"
                    features={[
                      "سرعت پایدار",
                      "آی‌پی ثابت",
                      "پشتیبانی پس از فروش",
                      "قیمت مناسب",
                    ]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PricingCard
                    title="3 ماه حجم 120 گیگ"
                    type="V2RAY"
                    price="۲۴۰,۰۰۰"
                    features={[
                      "سرعت پایدار",
                      "آی‌پی ثابت",
                      "پشتیبانی پس از فروش",
                      "قیمت مناسب",
                    ]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PricingCard
                    title="6 ماه حجم 240 گیگ"
                    type="اقتصادی"
                    price="۴۵۰,۰۰۰"
                    features={[
                      "سرعت عالی",
                      "آی‌پی ثابت",
                      "پشتیبانی فوری",
                      "قیمت مناسب",
                    ]}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PricingCard
                    title="12 ماه حجم 500 گیگ"
                    type="پیشرفته"
                    price="۹۵۰,۰۰۰"
                    features={[
                      "سرعت فوق‌العاده",
                      "آی‌پی دائمی",
                      "پشتیبانی 24/7",
                      "قیمت ویژه",
                    ]}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>


        {/* سطر 3: SVG سمت چپ */}
        <div className="bg-circle">
          <div className="flex flex-col  md:flex-row items-center md:items-start gap-6  w-4/5 m-auto">
            <div className="w-full flex items-center justify-between py-7">
              <div className="w-full md:max-w-[40%]">
                <h2 className="text-2xl leading-loose font-bold text-red-600 mb-2">
                  ایپی ثابت و پشتیبانی
                </h2>
                <p className="text-lg leading-loose text-gray-600">
                  ایپی ثابت: سرورهای ما دارای آی‌پی ثابت هستند و مناسب برای
                  کارهای حساس و ترید نیز می‌باشند.
                  <br />
                  پشتیبانی: تیم فنی رد سرور همیشه در کنار شما خواهد بود تا در
                  صورت بروز مشکل آن را به سرعت رفع کند.
                </p>
              </div>
              <img className="hidden  md:block" src={svg3} />
            </div>
          </div>
        </div>

      </div>

      <div className="bg-square bg-gray-100">
        <div className="flex flex-col  md:flex-row items-center md:items-start gap-6  w-4/5 m-auto">
          <div className="w-full flex items-center justify-between flex-row-reverse py-7">
            <div className="w-full md:max-w-[40%]">
              <h2 className="text-2xl leading-loose font-bold text-red-600 mb-2">
                اپلیکیشن اختصاصی و مصرف نیم‌بها
              </h2>
              <p className="text-lg leading-loose	 text-gray-600">
                ایپی ثابت: سرورهای ما دارای آی‌پی ثابت هستند و مناسب برای
                کارهای حساس و ترید نیز می‌باشند.
                <br />
                پشتیبانی: تیم فنی رد سرور همیشه در کنار شما خواهد بود تا در
                صورت بروز مشکل آن را به سرعت رفع کند.
              </p>
            </div>
            <img className="hidden  md:block" src={svg2} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyRed;


