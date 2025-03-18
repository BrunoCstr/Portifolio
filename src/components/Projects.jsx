import { motion } from "framer-motion";

import { ProjectCard } from "../components/ProjectCard";
import images from "../data/images";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <div
      id="projects"
      className="flex justify-center w-full h-auto bg-blue-custom"
    >
      <div className="w-[86%] h-[100%] projects-div">
        <h1 className="text-red-custom font-bold text-[3rem]">Projetos</h1>
        <br />
        <br />
        <div className="grid grid-cols-3 gap-5 w-full h-auto responsiveGrid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 25,
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectCard
                image={project.homeImage}
                title={project.appName}
                description={project.homeDescription}
                projectID={project.id}
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 25,
              delay: projects.length * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              image={images.commingSoonImg}
              title="Em desenvolvimento..."
              description="Enquanto esse projeto está sendo criado, que tal pegar um café? Afinal, nenhuma linha de código nasce sem uma boa dose de cafeína! 🚀"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
