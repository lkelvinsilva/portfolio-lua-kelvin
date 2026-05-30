import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">

        <span className="text-[#d6a15f] uppercase tracking-[4px] text-sm">
          Projetos
        </span>

        <h2 className="text-6xl md:text-8xl font-black uppercase text-[#f5e6c8] mt-4">
          O que eu construí
        </h2>

        <p className="mt-8 text-[#f5e6c8]/70 max-w-2xl text-lg">
          Projetos desenvolvidos utilizando tecnologias modernas,
          focando em performance, experiência do usuário e arquitetura escalável.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#111111] border border-[#3b2a1c] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-[#f5e6c8]">
                  {project.title}
                </h3>

                <p className="mt-6 text-[#f5e6c8]/70 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#d6a15f]/10 border border-[#d6a15f]/20 text-[#d6a15f] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.demo}
                    target="_blank"
                    className="bg-[#d6a15f] text-black px-5 py-3 rounded-lg font-semibold"
                  >
                    Ver Projeto
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="border border-[#d6a15f] px-5 py-3 rounded-lg text-[#d6a15f]"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}