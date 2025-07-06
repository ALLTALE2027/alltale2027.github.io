import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden  md:items-start md:justify-center c-space">
      <HeroText />
      <ParallaxBackground />
      {/* 3d model */}
      <figure
        className="absolute inset-0"
        style={{ height: "100vh", width: "100vw" }}
      ></figure>
    </section>
  );
};

export default Hero;
