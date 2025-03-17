import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import gsap from "gsap";

import images from "../data/images";
import { DownloadCV } from "../components/functions/DonwloadCV";
import { ContactMeButton } from "../components/functions/ContactMeButton";

export function Home() {
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
      <div className="relative flex items-center text-white-custom w-screen h-[10vh] bg-blue-custom">
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
          <Link to="ContactMe" smooth={true} duration={500}>
            <span className="cursor-pointer relative group">CONTATO</span>
          </Link>

          {/* Baixar CV */}
          <Link>
            <span className="cursor-pointer relative group" onClick={DownloadCV}>BAIXAR CV</span>
          </Link>
          
          {/* Ícone/Bandeira principal
          <img
            src={images.BR}
            alt="Selecionar idioma"
            className="languageIcon w-10 h-10 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* Dropdown de idiomas */}
          {/* <div
            className={`dropdown absolute right-0 top-full bg-transparent overflow-hidden transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-3 invisible"
            }`}
          >
            <div
              className="languages flex items-center gap-2 px-4 py-2 w-28 cursor-pointer rounded-md"
              onClick={() => console.log("Mudando para PT-BR")}
            >
              <img src={images.BR} alt="PT-BR" className="w-6 h-6" />
              <span className="text-white">PT-BR</span>
            </div>
            <div
              className="languages flex items-center gap-2 px-4 py-2 w-28 cursor-pointer rounded-md"
              onClick={() => console.log("Mudando para EN-USA")}
            >
              <img src={images.US} alt="EN-USA" className="w-6 h-6" />
              <span className="text-white">EN-USA</span>
            </div>
            <div
              className="languages flex items-center gap-2 px-4 py-2 w-28 cursor-pointer rounded-md"
              onClick={() => console.log("Mudando para ES")}
            >
              <img src={images.ES} alt="ES" className="w-6 h-6" />
              <span className="text-white">ES</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Home Content */}

      {/* Texto */}
      <div className="containerText flex flex-col justify-center items-center text-6xl h-[90vh] w-screen">
        <div className="flex flex-col items-center gap-3">
          <span>Eleve seu negócio</span>
          <span>digital a outro nível</span>
          <span>
            com um <span className="text-red-custom">Full Stack</span> de
          </span>
          <span>qualidade!</span>
          <br />
          <motion.button
            type="button"
            className="btnHome cursor-pointer h-12 w-38 rounded-md"
            onClick={ContactMeButton}
          >
            CONTATE-ME
          </motion.button>
        </div>
        {/* Setinha */}
        <div className="w-screen flex justify-center items-center">
          <img ref={arrowRef} src={images.Arrow} className="seta h-15" />
        </div>
      </div>
    </>
  );
}
