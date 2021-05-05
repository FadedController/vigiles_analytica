const Slide = (props: {
  city: string;
  service: string;
  description: string;
  image: string;
}): JSX.Element => {
  const { city, description, image, service } = props;

  return (
    <div className="h-res">
      <div
        className="h-full flex items-end p-3"
        style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover" }}
      >
        <div className="bg-white opacity-80 p-3">
          <h2 className="text-2xl tracking-widest uppercase text-blue-900 font-light pb-3">
            {city}
          </h2>
          <h1 className="font-semibold pb-1">{service}</h1>
          <p className="pb-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
