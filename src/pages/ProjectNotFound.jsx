import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import images from "../data/images";

export function ProjectNotFound() {
  const navigate = useNavigate();
  const handleBackToProjects = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100vw", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-screen"
    >
      <div className="w-full h-screen">
        {/* Back Bar */}
        <div className="h-full bg-blue-custom w-[4%] flex flex-col fixed">
          <div className="h-[80%] flex items-center justify-center">
            <span className="text-red-custom text-2xl font-bold rotate-270">
              Projetos
            </span>
          </div>
          <div className="h-[20%] flex items-start justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={images.iconBack}
                onClick={handleBackToProjects}
                className="cursor-pointer h-9"
              />
            </motion.button>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-blue-custom text-5xl font-bold">
            Projeto não encontrado!
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
