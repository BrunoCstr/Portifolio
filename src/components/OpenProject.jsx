import images from "../assets/images/images";

export function OpenProject() {
    return (
        <div className="w-full h-screen">
            {/* Back Bar */}
            <div className="h-full bg-black w-[4%] flex flex-col fixed">
                <div className="h-[65%] flex items-center justify-center">
                    <span className="text-red-custom text-2xl font-bold rotate-270">Projetos</span>
                </div>
                <div className="h-[35%] flex items-center justify-center">
                    <img src={images.iconBack} className="cursor-pointer h-10"/>
                </div>
            </div>
            {/* Main Content */}
            <div className="w-full h-full flex justify-center">
                {/* Header Content */}
                <div></div>
            </div>
            
        </div>
    )
}