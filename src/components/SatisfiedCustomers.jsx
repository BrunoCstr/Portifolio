// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, History } from "swiper/modules";

import { avaliations } from "../data/avaliations";
import { AvaliationCard } from "./AvaliationCard";

export function SatisfiedCustomers() {
  return (
    <>
      <div className="flex justify-center imgBg bg-blue-custom w-screen h-[48.85rem]">
        <div className="w-[86%] h-[100%] flex justify-center items-center flex-col">
          <h1 className="text-red-custom font-bold text-[3rem] clientesSatisfeitos">
            Clientes Satisfeitos
          </h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            pagination={true}
            history={{
              key: "slide",
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper"
          >
            {avaliations.map((i) => (
              <SwiperSlide className="bg-gray-300 h-25%" data-history="1">
                <AvaliationCard 
                stars={i.stars} 
                description={i.description}
                name={i.name}
                photo={i.photo}
                customerSince={i.customerSince}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
