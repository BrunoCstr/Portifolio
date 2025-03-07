import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import gsap from "gsap";

import images from "../assets/images/images";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { ContactMeButton } from "../components/functions/ContactMeButton";
import { DownloadCV } from "../components/functions/DonwloadCV";
import { ProjectCard } from "../components/ProjectCard";
import { ServicesCard } from "../components/ServicesCard";

export function Portifolio() {
  const [isOpen, setIsOpen] = useState(false);

  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <>
      {/* Nav Header */}
      <div className="relative flex items-center text-white-custom w-screen h-19 bg-blue-custom">
        <div className="flex items-center justify-end w-[18%]">
          <img src={images.logoBRN} className="h-25" />
        </div>
        {/* navContent */}
        <div className="absolute w-[100%] flex items-center justify-center gap-20">
          {/* Projetos */}
          <Link to="projects" smooth={true} duration={500}>
            <span className="cursor-pointer relative group">PROJETOS</span>
          </Link>

          {/* Sobre mim */}
          <Link to="about-me" smooth={true} duration={500}>
            <span className="cursor-pointer relative group">SOBRE MIM</span>
          </Link>

          {/* Serviços */}
          <Link to="services" smooth={true} duration={500}>
            <span className="cursor-pointer relative group">SERVIÇOS</span>
          </Link>

          {/* Contato */}
          <Link to="contact" smooth={true} duration={500}>
            <span className="cursor-pointer relative group">CONTATO</span>
          </Link>

          {/* Ícone/Bandeira principal */}
          <img
            src={images.BR}
            alt="Selecionar idioma"
            className="languageIcon w-10 h-10 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* Dropdown de idiomas */}
          <div
            className={`dropdown absolute right-0 top-full bg-transparent overflow-hidden transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-3 invisible"
            }`}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => console.log("Mudando para PT-BR")}
            >
              <img src={images.BR} alt="PT-BR" className="w-6 h-6" />
              <span className="text-blue-custom">PT-BR</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => console.log("Mudando para EN-USA")}
            >
              <img src={images.US} alt="EN-USA" className="w-6 h-6" />
              <span className="text-blue-custom">EN-USA</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => console.log("Mudando para ES")}
            >
              <img src={images.ES} alt="ES" className="w-6 h-6" />
              <span className="text-blue-custom">ES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Home Content */}

      {/* Minha foto */}
      <motion.div
        className="absolute bottom-0 right-0 w-[35%]"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 25 }}
      >
        <img
          src={images.BrunoHome}
          className="h-auto max-h-[85vh] w-full object-contain"
        />
      </motion.div>

      {/* Texto */}
      <div className="containerText flex justify-center items-center text-6xl h-[81.8vh] w-[65%]">
        <div className="flex flex-col gap-3">
          <span>Eleve seu negócio digital a</span>
          <span>outro nível</span>
          <span>
            com um{" "}
            <span className="text-red-custom text-[5rem]">Full Stack</span> de
          </span>
          <span>qualidade!</span>
          <br />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btnHome cursor-pointer h-11 w-32 rounded-md"
            onClick={ContactMeButton}
          >
            Contate-Me
          </motion.button>
        </div>
      </div>
      {/* Setinha */}
      <div className="h-[8vh] flex justify-center bg">
          <img ref={arrowRef} src={images.Arrow} className="h-[90%]" />
      </div>
      <br />
      <br />
      <br />
      {/* Seção de tecnologias  */}
      <div className="w-full overflow-hidden relative">
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
      <br />
      <br />
      <br />
      <br />
      {/* Seção sobre mim */}
      <div id="about-me" className="flex grid-cols-2 w-full h-150">
        <motion.div
          className="flex justify-center items-center w-[40%]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={images.SobreMimImg}></img>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center w-[60%]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-red-custom font-bold text-[3rem]">Sobre mim</h1>
          <br />
          <div className="w-[70%]">
            <p className="text-blue-custom font-bold">
              Olá! Sou <span className="text-red-custom">Bruno de Castro</span>,
              um desenvolvedor apaixonado por transformar ideias em soluções
              inovadoras. Com experiência em{" "}
              <span className="text-red-custom">
                desenvolvimento web, mobile
              </span>{" "}
              e<span className="text-red-custom"> análise de dados</span>, busco
              sempre criar produtos que agreguem valor e impulsionem negócios.
              Minha jornada na tecnologia começou cedo, e ao longo dos anos
              desenvolvi projetos que vão desde sistemas web escaláveis até
              aplicativos mobile e dashboards gerenciais para análise de dados.
              <br /> Gosto de desafios e acredito que a tecnologia é uma
              poderosa ferramenta para{" "}
              <span className="text-red-custom">resolver problemas</span> e
              criar oportunidades.
              <br />
              Sou movido por aprendizado contínuo e colaboração. Aqui no meu
              portfólio, você encontrará alguns dos meus principais projetos,
              onde aplico lógica, performance e usabilidade para entregar
              experiências eficientes e impactantes. Vamos construir algo
              incrível juntos? 🚀
            </p>
          </div>
          <br />
          <br />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btnHome cursor-pointer bg- h-11 w-32 rounded-md"
            onClick={DownloadCV}
          >
            Baixar CV
          </motion.button>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* Seção dos projetos */}
      <div id="projects" className="flex justify-center w-full h-260">
        <div className="w-[86%] h-[100%]">
          <h1 className="text-red-custom font-bold text-[3rem]">Projetos</h1>
          <br />
          <br />
          <div className="grid grid-cols-3 gap-10 w-full h-[100%]">
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Seção dos Serviçõs Contratáveis */}
      <div id="services" className="flex justify-center w-full h-190">
        <div className="w-[86%] h-[100%]">
          <h1 className="text-red-custom font-bold text-[3rem]">
            Serviços contratáveis
          </h1>
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
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-50">
        <div className="w-[43%] h-[100%]">
          <h1 className="text-red-custom font-bold text-[1.8rem]">
            Fale comigo
          </h1>
          <br />
          <div className="w-[100%] flex flex-row gap-3 items-center">
            <img src={images.telephoneImg} />
            <span className="text-blue-custom font-bold text-[1rem]">
              +55 33 9 9944-2685
            </span>
          </div>
          <br />
          <div className="w-[100%] flex flex-row gap-3 items-center">
            <img src={images.emailImg} />
            <span className="text-blue-custom font-bold text-[1rem]">
              contato@brunocastrodev.com.br
            </span>
          </div>
        </div>
        <div className="w-[43%] h-[100%] flex flex-col items-center">
          <h1 className="text-red-custom font-bold text-[1.8rem]">Siga me</h1>
          <br />
          <div className="flex flex-row gap-3">
            <img src={images.linkedinImg} className="cursor-pointer" />
            <img src={images.instagramImg} className="cursor-pointer" />
            <img src={images.github_minImg} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full h-6 flex items-center justify-center">
        <span className="text-blue-custom font-bold text-[0.6rem]">
          © Desenvolvido por Bruno de Castro 2025
        </span>
      </div>
    </>
  );
}
