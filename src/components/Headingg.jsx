import Tagline from "./Tagline";

const Headingg = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}

      {title && <h2 className="h2 text-center mb-[3rem] text-5xl">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Headingg;
