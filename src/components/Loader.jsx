import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  //   Html from drei allows us to use html inside canvas
  return <Html className="text-xl text-center"> {progress}% Loaded</Html>;
};

export default Loader;
