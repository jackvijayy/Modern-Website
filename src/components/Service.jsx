import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Headingg from "./Headingg";
import Section from "./Section";
import {
  PhotChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Service = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Headingg
          title="Generative AI Made for creators"
          text="Brainwave unlock the potential of AI-powered applications"
        />
        <div className="relative">
          <div
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10
             rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="serivce1"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>
            <div className="relative max-w-[17rem] z-1 ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-Powered applictions
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-5 py-4 border-t border-n-6"
                  >
                    <img src={check} alt="" width={24} height={24} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating
              className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 
            lg:bottom-8 lg:-translate-x-1/2 lg:right-auto"
            />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl
            overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt={service2}
                  className="w-full h-full object-cover"
                  width={630}
                  height={750}
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end p-4
              from-n-8/0 to-n-8/90 bg-gradient-to-b "
              >
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically Enhance your photos using our AI app's Photo
                  editing features.Try it Now
                </p>
              </div>
              <PhotChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[45rem]">
              <div className="py-14 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world most powerfull AI photos and video art generation
                  engine,wiil you create it?
                </p>
                <ul className=" flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center ${
                        index === 2
                          ? `w-[3rem]
                    h-[3rem] p-0.3 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]`
                          : `flex w-10 h-10 bg-n-6 md:w-15 md:h-15`
                      }`}
                    >
                      <div className="flex justify-center">
                        <img src={item} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className=" relative h-[20rem] bg-n-8
              overflow-hidden rounded-xl md:h-[25rem]"
              >
                <img
                  src={service3}
                  alt={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Service;
