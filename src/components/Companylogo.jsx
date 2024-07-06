import { companyLogos } from "../constants";

const Companylogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="text-center tagline mb-6 text-n-1/50">
        Helping People create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex ietms-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companylogo;
