import images from "../data/images";

export function ContactMe() {
  return (
    <>
      <div className="bg-blue-custom w-screen h-100 flex justify-center items-center">
        <div className="flex justify-center flex-col w-[86%]">
          <h1 className="text-red-custom font-bold text-[3rem]">Contate-me</h1>
          <br />
          <div className="flex justify-start flex-col gap-5">
            <div className="flex flex-row items-center gap-5">
              <img className="h-8 w-8" src={images.whatsapp}></img>
              <p className="text-gray-300">+55 33 999442685</p>
            </div>
            <div className="flex flex-row items-center gap-5">
              <img className="h-8 w-8" src={images.email}></img>
              <p className="text-gray-300">contato@brunocastrodev.com.br</p>
            </div>
          </div>
          <br />
          <br />
          <div>
            <div className="bg-gray-700 h-[1px] w-[100%] flex">
              <p className="text-gray-300 text-[0.75rem] developBy w-[50%]">
                Desenvolvido por @ 2025 BRNDev
              </p>
              <div className="flex flex-row w-[50%] justify-end developBy gap-2">
                <img className="h-6 w-6" src={images.instagramWhite}></img>
                <img className="h-6 w-6" src={images.githubWhite}></img>
                <img className="h-6 w-6" src={images.linkedinWhite}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
