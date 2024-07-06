import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-n-4 caption">
          {" "}
          @ {new Date().getFullYear()} All Right Reserved
        </p>
        <p className="text-n-4 caption">@ Developed By Vijay</p>
      </div>
    </Section>
  );
};

export default Footer;
