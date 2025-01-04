import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../node_modules/swiper/swiper-bundle.min.css'
import { FaPlay } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
  
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
  
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/V9N7W39/test-pic1733212937774.webp"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute pl-10 inset-0 flex items-center text-white">
                <div className="space-y-4">
                  <h2 className="text-base md:text-2xl lg:text-5xl font-bold ">Castle In the Time</h2>
                  <p className="mt-2 max-w-xl  text-xm md:text-base lg:text-lg font-medium">IA timeless castle holds magical secrets as adventurers unravel its mysteries, face ancient dangers, and discover love on a perilous journey to redemption</p>
               <div className="flex items-center gap-4">
                <button className="flex gap-2 items-center px-3 py-2 bg-pink-500 rounded-md"><FaPlay /> Play</button>
                <button className="px-3 py-2 rounded-md hover:bg-pink-500 hover:text-white border-2 border-pink-500">More Info</button>
               </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/tpdL59g/test-pic1733214379289.webp"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute pl-10 inset-0 flex items-center text-white">
                <div className="space-y-4">
                  <h2 className="text-base md:text-2xl lg:text-5xl font-bold ">ENDLESS LOVE</h2>
                  <p className="mt-2 max-w-xl  text-xm md:text-base lg:text-lg font-medium">A timeless tale of passion and devotion, where love transcends challenges, bridges destinies, and weaves hearts together in an unbreakable bond</p>
               <div className="flex items-center gap-4">
                <button className="flex gap-2 items-center px-3 py-2 bg-pink-500 rounded-md"><FaPlay /> Play</button>
                <button className="px-3 py-2 rounded-md hover:bg-pink-500 hover:text-white border-2 border-pink-500">More Info</button>
               </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/18TWdVj/test-pic1732074522721.webp"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute pl-10 inset-0 flex items-center text-white">
                <div className="space-y-4">
                  <h2 className="text-base md:text-2xl lg:text-5xl font-bold ">CAMPUS BEATS</h2>
                  <p className="mt-2 max-w-xl  text-xm md:text-base lg:text-lg font-medium">A lively college tale of dreams, friendship, and love, where music and dance unite students, creating unforgettable moments and inspiration.</p>
               <div className="flex items-center gap-4">
                <button className="flex gap-2 items-center px-3 py-2 bg-pink-500 rounded-md"><FaPlay /> Play</button>
                <button className="px-3 py-2 rounded-md hover:bg-pink-500 hover:text-white border-2 border-pink-500">More Info</button>
               </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


  
        </Swiper>
      </div>
    );
};

export default Banner;