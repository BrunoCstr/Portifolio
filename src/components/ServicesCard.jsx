export function ServicesCard(props) {
  return (
    <div className="w-[100%] h-70">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-4">
          <img className="h-15" src={props.img}></img>
          <h1 className="text-white text-2xl font-bold">{props.title}</h1>
        </div>
        <br/>
        <div>
          <p className="text-gray-300">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
