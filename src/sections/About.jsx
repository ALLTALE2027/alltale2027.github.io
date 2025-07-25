import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  // this for adding the drag constraint so that cards me drag should not go outside
  // of container
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* -------- */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="code screen"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
            md:scale=[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi,I'm Darshan Deshmukh</p>
            <p className="subtext">
              Over the last four years , I have developed my frontend and
              backend skills along with cloud technologies to build dynamic web
              applications.
            </p>
            {/* since text is not clearly visible adding background for paragraph */}
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
        </div>
        {/* ----------- */}
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center w-full h-full"
            ref={grid2Container}
          >
            <p className="flex items-end text-5xl text-gray-600">
              CODE IS CRAFT
            </p>
            <Card
              text="Responsive Design"
              style={{ rotate: "75deg", top: "30%", left: "60%" }}
              containerRef={grid2Container}
            />
            <Card
              text="State Management "
              style={{ rotate: "-20deg", top: "45%", left: "30%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Database Optimization"
              style={{ rotate: "-50deg", botton: "30%", left: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Cloud Deployment"
              style={{ rotate: "10deg", botton: "30%", right: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Token Auth"
              style={{ rotate: "60deg", top: "10%", left: "10%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* -------------- */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Timezone</p>
            <p className="subtext">
              {" "}
              I'm based in India, and open to remote work.
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>

        {/* ------------- */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together ?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* ------------- */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialise in multiple languages ,frameworks and tools that
              allow me to buld robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
