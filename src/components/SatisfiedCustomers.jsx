import { motion } from "framer-motion";

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
      <div className="flex justify-center imgBg bg-blue-custom w-full h-[48.85rem]">
        <motion.div
          className="w-[86%] h-[100%] flex justify-center items-center flex-col"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-red-custom font-bold text-[3rem] clientesSatisfeitos">
            Clientes Satisfeitos
          </h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            pagination={true}
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
        </motion.div>
      </div>
    </>
  );
}
