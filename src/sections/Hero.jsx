import { Float, OrbitControls } from "@react-three/drei";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden  md:items-start md:justify-center c-space">
      <HeroText />
      <ParallaxBackground />
      {/* 3d model */}
      <figure
        className="absolute inset-0"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.2}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            {/* <OrbitControls /> */}

            {/* to intract with mouse movements */}
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
export default Hero;
