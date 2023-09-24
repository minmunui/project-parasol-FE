const InfoPanel = ({ title, description, image }) => {
return (
    <div className={"info-panel flex flex-col items-center"}>
      <h1 className={"text-3xl font-extrabold"}>{title}</h1>
      <p className={"text-lg text-center text-gray-500"}>{description}</p>
      <img src={image} className={"w-full"} />
    </div>
  );
}

export default InfoPanel;