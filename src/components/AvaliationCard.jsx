export function AvaliationCard(props) {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <p>{props.stars}</p>
        <p className="text-[0.75rem] descriptionAvaliation">{props.description}</p>
        <div className="flex flex-row w-[77%] customerRow gap-3">
        <img className="customersPhoto" src={props.photo}></img>
        <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[0.75rem]">{props.name}</p>
        <p className="text-[0.75rem]">{props.customerSince}</p>
        </div>
        </div>
      </div>
    </>
  );
}
