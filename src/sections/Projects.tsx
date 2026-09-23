import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-[#050505] px-6 py-32 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <div className="max-w-3xl">

          <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
            Projetos
          </span>

          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] text-[#f5e6c8] md:text-7xl lg:text-8xl">
            O que eu construí
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[#f5e6c8]/60 md:text-lg">
            Sistemas, automações e experiências digitais desenvolvidas
            para transformar problemas reais em soluções eficientes.
          </p>

        </div>

        {/* PROJETOS */}
        <div className="mt-20 space-y-12">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#3b2a1c]
                bg-[#0d0d0d]
                transition-colors
                duration-500
                hover:border-[#d6a15f]/40
              "
            >

              {/* IMAGEM */}
              <div
                className={`
                  relative
                  overflow-hidden
                  ${index === 0 ? "h-[420px] md:h-[520px]" : "h-[300px] md:h-[380px]"}
                `}
              >

                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* GRADIENTE */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0d0d0d]
                    via-[#0d0d0d]/20
                    to-transparent
                  "
                />

                {/* NÚMERO */}
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d6a15f]/40
                    bg-black/40
                    text-sm
                    font-semibold
                    text-[#d6a15f]
                    backdrop-blur-md
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

              {/* CONTEÚDO */}
              <div className="p-7 md:p-10">

                {/* CATEGORIA */}
                <span className="text-xs font-semibold uppercase tracking-[3px] text-[#d6a15f]">
                  {project.category}
                </span>

                {/* TÍTULO */}
                <h3
                  className={`
                    mt-4
                    font-black
                    uppercase
                    leading-tight
                    text-[#f5e6c8]
                    ${
                      index === 0
                        ? "text-3xl md:text-5xl"
                        : "text-2xl md:text-4xl"
                    }
                  `}
                >
                  {project.title}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#f5e6c8]/60 md:text-lg">
                  {project.description}
                </p>

                {/* TECNOLOGIAS */}
                <div className="mt-7 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-[#d6a15f]/20
                        bg-[#d6a15f]/5
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-[#d6a15f]
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* BOTÕES */}
                <div className="mt-8 flex flex-wrap gap-4">

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#d6a15f]
                        px-6
                        py-3
                        text-sm
                        font-bold
                        text-black
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-[#e3b575]
                      "
                    >
                      Ver projeto
                      <span>↗</span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#d6a15f]/50
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-[#d6a15f]
                      transition-all
                      duration-300
                      hover:border-[#d6a15f]
                      hover:bg-[#d6a15f]/10
                    "
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </motion.section>
  );
}