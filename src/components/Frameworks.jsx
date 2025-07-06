import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "git",
    "javascript",
    "python",
    "react",
    "tailwindcss",
    "angular",
    "node-js",
    "express",
    "mysql",
    "mongodb",
    "aws",
    "postgresq",
    "google-cloud",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.svg`} title={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill) => (
          <Icon key={skill} src={`assets/logos/${skill}.svg`} title={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, title }) => {
  return (
    <img
      src={src}
      className="duration-200 rounded-sm hover:scale-110"
      title={title}
    />
  );
};
