import Image from "next/image";

const techLogos = [
  { name: "React", logo: "/tech-logos/react.svg" },
  { name: "Next.js", logo: "/tech-logos/nextjs.svg" },
  { name: "Typescript", logo: "/tech-logos/typescript.svg" },
  { name: "Framer Motion", logo: "/tech-logos/framer-motion.svg" },
  { name: "Node.js", logo: "/tech-logos/nodejs.svg" },
  { name: "Express.js", logo: "/tech-logos/expressjs.svg" },
  { name: "MongoDB", logo: "/tech-logos/mongodb.svg" },
  { name: "PostgreSQL", logo: "/tech-logos/postgresql.svg" },
  { name: "Tailwind CSS", logo: "/tech-logos/tailwindcss.svg" },
  { name: "Git", logo: "/tech-logos/git.svg" },
  { name: "GitHub", logo: "/tech-logos/github.svg" },
  { name: "VS Code", logo: "/tech-logos/vscode.svg" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={60}
                height={60}
                className="mb-2"
              />
              <p className="text-sm font-medium text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
