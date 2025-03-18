import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import images from "../data/images";

export function ProjectCard(props) {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-auto">
      <img src={props.image} className="h-auto max-h-[75vh] w-full object-contain"></img>
      <br />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-red-custom text-2xl titleProjects">{props.title}</h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <img
              src={images.openCardImg}
              className="cursor-pointer h-9"
              onClick={() => navigate(`/project/${props.projectID}`)}
            ></img>
          </motion.button>
        </div>
        <div className="border-t-2 border-red-500"></div>
        <div>
          <p className="text-gray-300 textProjects">{props.description}</p>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  );
}
