import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import images from "../assets/images/images";

export function ProjectCard(props) {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-70">
      <img src={props.image} className="h-auto max-h-[75vh] w-full object-contain"></img>
      <br />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-red-custom text-2xl font-bold">{props.title}</h1>
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
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
