export function ServicesCard(props) {
  return (
    <div className="w-[100%] h-auto">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-4">
          <img className="h-15 servicesImg" src={props.img}></img>
          <h1 className="text-white text-2xl font-bold tittleServices">{props.title}</h1>
        </div>
        <br/>
        <div>
          <p className="text-gray-300 textServices">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
