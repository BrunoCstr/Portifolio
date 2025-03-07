import { motion } from "framer-motion";

import images from "../assets/images/images";
import { ContactMe } from "./functions/ContactMeButton";

export function ServicesCard(props) {
  return (
    <div className="w-[100%] h-70">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-red-custom text-2xl font-bold">{props.title}</h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <img
              src={images.openCardImg}
              className="cursor-pointer h-9"
              onClick={ContactMe}
            ></img>
          </motion.button>
        </div>
        <div className="border-t-2 border-red-500"></div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
