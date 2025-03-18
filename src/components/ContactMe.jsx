import { motion } from "framer-motion";
import images from "../data/images";

export function ContactMe() {
  return (
    <>
      <div id="ContactMe" className="bg-blue-custom w-full h-85 flex justify-center items-center">
        <div className="flex justify-center flex-col w-[86%]">
          <h1 className="text-red-custom font-bold text-[3rem]">Contate-me</h1>
          <br />
          <div className="flex justify-start flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
              <img className="h-6 w-6" src={images.whatsapp}></img>
              <p className="text-gray-300 textContactMe">+55 33 999442685</p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <img className="h-6 w-6" src={images.email}></img>
              <p className="text-gray-300 textContactMe">contato@brunocastrodev.com.br</p>
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className="bg-gray-700 h-[1px] w-[100%] flex">
              <p className="text-gray-300 textContactMe text-[0.75rem] developBy w-[50%]">
                Desenvolvido por @ 2025 BRNDev
              </p>
              <div className="flex flex-row w-[50%] justify-end developBy gap-5">
                <motion.img
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="h-5 w-5 cursor-pointer" 
                src={images.instagramWhite}
                onClick={() => {window.open("https://www.instagram.com/brunocastro.dev/","_blank")}}
                ></motion.img>
                <motion.img
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="h-5 w-5 cursor-pointer"
                src={images.githubWhite}
                onClick={() => {window.open("https://github.com/BrunoCstr","_blank")}}
                ></motion.img>
                <motion.img
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="h-5 w-5 cursor-pointer" 
                src={images.linkedinWhite}
                onClick={() => {window.open("https://www.linkedin.com/in/bruno-de-castro-rocha/","_blank")}}
                ></motion.img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
