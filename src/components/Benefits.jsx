import { background } from "../assets";
import { benefits } from "../constants";
import Headingg from "./Headingg";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";

import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="feature" className="px-[3rem] my-[3rem]" customPadding>
      <div className="container relative z-2">
        <Headingg
          className="md:max-w-md lg:max-w-2xl py-[2rem]"
          title="Chat Smarter,Not Harder with Brainwave"
        />
      </div>
      <div className="flex flex-wrap gap-10 mb-1 container px-[3rem]">
        {benefits.map((item) => (
          <div
            className="block relative p-0.5
                bg-no-repeat bg-[length:100%_100%] md:max-w-[18rem]"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
            }}
            key={item.id}
          >
            <div
              className="relative z-2 flex flex-col
                        min-h-[12rem] p-[1.5rem]"
            >
              <h5 className="h5">{item.title}</h5>
              <p className="body-2 mt-6 text-wrap text-n-3">{item.text}</p>
              <div className="flex items-center mt-7">
                <img
                  src={item.iconUrl}
                  alt={item.iconUrl}
                  width={48}
                  height={48}
                />
                <p
                  className="ml-[2rem] font-code text-xs 
                font-bold text-n-1 uppercase tracking-wider"
                >
                  Explore Now
                </p>
                <Arrow />
              </div>
            </div>
            {item.light && <GradientLight />}
            <div
              className=" absolute inset-0.5 bg-n-8"
              style={{ stylepath: "url(#benefits)" }}
            >
              <div className="absolute  inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    width={380}
                    height={362}
                    className="w-full h-full object-cover "
                  />
                )}
              </div>
            </div>
            <ClipPath />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
