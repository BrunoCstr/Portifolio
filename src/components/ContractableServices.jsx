import { motion } from "framer-motion";

import { ServicesCard } from "./ServicesCard";
import { services } from "../data/services";

export function ContractableServices() {
  return (
    <>
      {/* Seção dos Serviçõs Contratáveis */}
      <div
        id="services"
        className="flex justify-center w-full h-220 bg-blue-custom"
      >
        <div className="w-[86%] h-[100%]">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-red-custom font-bold text-[3rem]">
              Serviços contratáveis
            </h1>
            <br/>
            <p className="text-gray-300 text-[1.2rem]">
              Veja os serviços que posso oferecer para ajudar no seu projeto,
              com soluções
            </p>
            <p className="text-gray-300 text-[1.2rem]">práticas e focadas no que você precisa.</p>
          </div>
          <br />
          <br />
          <br />
          <div className="grid grid-cols-3 gap-10 w-full h-[40%]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} // Começa invisível e abaixo
                whileInView={{ opacity: 1, y: 0 }} // Quando visível, fica 100% opaco e na posição original
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                  delay: index * 0.2, // Atraso progressivo baseado no índice
                }}
                viewport={{ once: true, amount: 0.3 }} // Quando 30% do item estiver visível
              >
                <ServicesCard
                  img={service.img}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
