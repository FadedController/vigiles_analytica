const Block = (props: {
  image?: string;
  content?: JSX.Element;
  inverted?: boolean;
  id?: string;
}): JSX.Element => {
  const { content, image, inverted, id } = props;

  if (inverted) {
    return (
      <div id={id} className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-1 justify-end items-center">
          <div className="lg:max-w-xl w-full lg:text-right">
            <div className="px-5 py-16">{content}</div>
          </div>
        </div>
        <div className="flex flex-1">
          <img src={image} />
        </div>
      </div>
    );
  } else {
    return (
      <div id={id} className="flex flex-col lg:flex-row">
        <div className="flex flex-1 justify-end">
          <img src={image} />
        </div>
        <div className="flex flex-1 items-center">
          <div className="lg:max-w-xl w-full">
            <div className="p-5 py-16">{content}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Block;
