import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../data/projects";
import images from "../data/images";

export function OpenProject() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h1>Projeto não encontrado</h1>;

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
        <div className="w-full h-full flex items-center flex-col">
          {/* Header Content */}
          <div className="h-[22%] w-[85%] flex flex-row items-center gap-5">
            <img src={project.appLogo} className="h-23 rounded-2xl" />
            <h1 className="text-blue-custom text-6xl font-bold">
              {project.appName}
            </h1>
          </div>
          {/* Description and Images */}
          <div className="h-[30%] w-[85%] flex flex-col gap-3">
            <span className="text-blue-custom font-bold text-[1.1rem]">
              {project.description}
            </span>
            <span className="cursor-pointer text-blue-700" onClick={(e) => window.open(project.url, '_blank')}>{project.url}</span>
            <div className="flex flex-row gap-3">
              {project.techLogos?.map((logo, index) => (
                <img key={index} className="h-7 w-7" src={logo}></img>
              ))}
            </div>
            <br />
            <div className="flex flex-col gap-3">
              {project.appImages?.map((image, index) => (
                <div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 25,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.1 }}
                >
                  <img key={index} className="rounded-2xl" src={image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
