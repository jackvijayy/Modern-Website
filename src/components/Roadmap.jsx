import Section from "./Section";
import Headingg from "./Headingg";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
import Button from "./Button";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Headingg tag="Ready to get Started" title="what we're working on" />
        <div className=" relative grid gap-6 md:grid-cols-2 md:gap-6 md:pb-[1rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] border border-emerald-700 ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1 ">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt="bovc"
                          className="mr-2.5"
                          height={16}
                          width={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-full"
                        height={420}
                        width={630}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
