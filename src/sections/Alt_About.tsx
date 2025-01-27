import React, { useState } from "react";
import { Timeline } from "../components/timeline";
import { alt_about_data } from "../constants";
import { AnimatedBeamDemo } from "../components/BiDirectionalBeam";
import Globe from "react-globe.gl";
import GlobeDemo from "../components/githubglobe";

const Alt_About = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("ediricanli@icloud.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const [hasCopied, setHasCopied] = useState(false);
  const data = [
    {
      title: "About Me",
      content: (
        <div>
          <p className="text-white text-5xl md:text-3xl sm:text-xl font-bold  mb-8">
            B.S. Software Engineering
          </p>
          <p className="grid-subtext mb-5 text-2xl md:text-lg sm:text-md font-light">
            I am an aspiring software engineer with 2 years of experience in web
            development and a passion for frontend development, while
            continually improving my backend and full-stack skills. I am
            completing my Bachelor&apos;s in Software Engineering in just two
            weeks and love helping businesses create or refresh their websites
            to enhance their online presence and drive growth.
          </p>
          <div className="flex-grow items-center justify-center">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "Tech Stack",
      content: (
        <div>
          <p className="text-white text-5xl md:text-3xl sm:text-xl font-bold  mb-8">
            Aspiring DevOps Engineer
          </p>
          <p className="grid-subtext text-2xl md:text-lg font-light mb-5">
            I specialise in Java, JavaScript, TypeScript, Next.js, and React. I
            am constantly learning new technologies and pride myself on being
            highly adaptable, ready to tackle challenges and embrace innovation
            in a rapidly evolving field.
          </p>
          <div className="flex-grow flex items-center justify-center min-h-0 ">
            <AnimatedBeamDemo />
          </div>
        </div>
      )
    },
    {
      title: "Availability",
      content: (
          <div>
              <p className="text-white text-5xl md:text-3xl sm:text-xl font-bold  mb-8">
                  I am open to working remotely
              </p>
              <div className="mb-8">
                  <p className="grid-subtext text-2xl md:text-lg font-light mb-5">
                      I am based in Atlanta, GA, USA, I embrace the flexibility of
                      remote work and thrive in collaborative digital environments.
                      Whether it&apos;s contributing to a startup&apos;s growth or
                      enhancing a team&apos;s efficiency, I bring strong communication,
                      problem-solving, and development skills to the table. Let&apos;s
                      build something amazing together!
                  </p>
              </div>
              <div className=" h-full w-full sm:h-[326px]  flex flex-col items-center object-contain">
                  <GlobeDemo/>
              </div>
              {/*<div className="rounded-3xl w-full sm:h-[326px] h-fit flex flex-col items-center bg-black-600">*/}
              {/*    <Globe*/}
              {/*        height={326}*/}
              {/*        width={326}*/}
              {/*        backgroundColor="rgba(0,0,0,0)"*/}
              {/*        showAtmosphere*/}
              {/*        showGraticules*/}
              {/*        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"*/}
              {/*        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"*/}
              {/*    />*/}
              {/*</div>*/}
          </div>
      )
    },
      {
          title: "Passion",
          content: (
              <div>
                  <p className="text-white text-5xl md:text-3xl sm:text-xl font-bold  mb-8">
                      My Passion for Coding
                  </p>
                  <div className="mb-8">
                      <p className="grid-subtext text-2xl md:text-lg font-light mb-5">
                          I love solving problems and building things through code. Coding
                          is not just my profession, it is my passion. I stay committed to
              continuous learning and am always on the lookout for ways to
              improve my craft and keep up with the latest industry trends.
            </p>
          </div>
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex flex-col items-center ">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
          </div>
        </div>
      )
    },
    {
      title: "Reach Out!",
      content: (
        <div>
          <p className="text-white text-5xl md:text-3xl sm:text-xl font-bold  mb-8">
            Contact Me
          </p>
          <div className="mb-8"></div>
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex flex-col items-center ">
            <img
              src="/assets/grid4.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div className="copy-container" onClick={handleCopy}>
              <img
                src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                alt="copy"
              />
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                ediricanli@icloud.com
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <section className="c-space my-20" id="about">
      <div className="flex items-center justify-center">
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
};
export default Alt_About;
