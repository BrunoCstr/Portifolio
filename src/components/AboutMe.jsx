import { motion } from "framer-motion";

import images from "../data/images";
import { ContactMeButton } from "../components/functions/ContactMeButton";

export function AboutMe() {
  return (
    <>
      <div className="w-full h-auto bg-blue-custom">
        <br />
        {/* Seção de tecnologias  */}
        <div className="w-full overflow-hidden relative mt-3">
          <div className="flex gap-5 w-max animate-[scrollLoop_35s_linear_infinite]">
            {[...Array(6)].flatMap(() =>
              [
                images.JS,
                images.React,
                images.Tailwind,
                images.Dart,
                images.Flutter,
                images.TS,
                images.Python,
                images.Php,
                images.Node,
                images.HTML,
                images.CSS,
                images.Sass,
                images.Firebase,
                images.PowerBI,
                images.MySql,
                images.C,
                images.Git,
                images.Next,
                images.Bootstrap,
                images.Figma,
                images.Github,
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="h-10 mx-4"
                  alt="tech-icon"
                />
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center items-center flex-row relative">
          {/* Seção sobre mim */}
          <div id="about-me" className="flex grid-cols-2 w-full h-180">
            <motion.div
              className="flex flex-col justify-center items-center w-[60%] aboutMe"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 25 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="text-red-custom font-bold text-[3rem]">
                Sobre mim
              </h1>
              <br />
              <div className="w-[70%]">
                <p className="text-gray-300 aboutMe text-[1.2rem] font-normal flex justify-center items-center flex-col">
                  <div className="flex flex-col justify-center items-center w-[80vw] aboutMeDiv">
                    <div>
                      Olá! Sou{" "}
                      <span className="text-red-custom">Bruno de Castro</span>,
                      um desenvolvedor apaixonado por transformar ideias
                    </div>
                    <div>
                      em soluções inovadoras. Com experiência em{" "}
                      <span className="text-red-custom">
                        desenvolvimento web, mobile
                      </span>{" "}
                      e
                    </div>
                    <div>
                      <span className="text-red-custom">análise de dados</span>{" "}
                      impulsionem negócios.
                    </div>
                    <div>
                      Minha jornada na tecnologia começou cedo, e ao longo dos
                      anos desenvolvi
                    </div>
                    <div>
                      projetos que vão desde sistemas web escaláveis até
                      aplicativos mobile e
                    </div>
                    <div>
                      dashboards gerenciais para análise de dados. Gosto de
                      desafios e acredito que a
                    </div>
                    <div>
                      tecnologia é uma poderosa ferramenta para{" "}
                      <span className="text-red-custom">
                        resolver problemas
                      </span>{" "}
                      e criar
                    </div>
                    <div>oportunidades.</div>
                    <div>
                      Sou movido por aprendizado contínuo e colaboração. Aqui no
                      meu portfólio, você
                    </div>
                    <div>
                      encontrará alguns dos meus principais projetos, onde
                      aplico lógica, performance e
                    </div>
                    <div>
                      usabilidade para entregar experiências eficientes e
                      impactantes. Vamos construir
                    </div>
                    <div>algo incrível juntos? 🚀</div>
                  </div>
                </p>
              </div>
              <br />
              <br />
              <button
                type="button"
                className="btnHome cursor-pointer h-11 w-32 rounded-md"
                onClick={ContactMeButton}
              >
                CONTATE-ME
              </button>
            </motion.div>
          </div>
          {/* Minha foto */}
          <motion.div
            className="flex justify-center items-center h-200 absolute bottom-0 right-0 w-[35%] divMyImg"
            initial={{ x: "100vw" }} // Move a imagem completamente para fora da tela à direita
            animate={{ x: 0 }} // Traz a imagem para a posição original
            exit={{ x: "100vw" }} // Move a imagem novamente para fora ao sair
            transition={{ type: "spring", stiffness: 50, damping: 25 }}
            viewport={{ once: true, amount: 0.9 }}
          >
            <img
              src={images.BrunoHome}
              className="myImg h-auto max-h-[76vh] w-full object-contain"
            />
          </motion.div>
        </div>
        <br/>
        <br/>
      </div>
    </>
  );
}
