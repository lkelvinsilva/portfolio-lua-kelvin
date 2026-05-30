import { experiences, education } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">

        <span className="text-[#d6a15f] uppercase tracking-[4px] text-sm">
          Trajetória
        </span>

        <h2 className="text-6xl md:text-8xl font-black uppercase text-[#f5e6c8] mt-4">
          Experiência & Formação
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* EXPERIÊNCIA */}

          <div>
            <h3 className="text-[#d6a15f] uppercase tracking-[4px] mb-8">
              Experiência Profissional
            </h3>

            <div className="space-y-8">

              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-[#111111] border border-[#3b2a1c] rounded-2xl p-8"
                >
                  <span className="text-[#d6a15f] text-sm uppercase tracking-[3px]">
                    {exp.period}
                  </span>

                  <h4 className="text-2xl font-bold text-[#f5e6c8] mt-3">
                    {exp.title}
                  </h4>

                  <p className="text-[#d6a15f] mt-2">
                    {exp.company}
                  </p>

                  <p className="text-[#f5e6c8]/70 mt-5 leading-8">
                    {exp.description}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* FORMAÇÃO */}

          <div>
            <h3 className="text-[#d6a15f] uppercase tracking-[4px] mb-8">
              Formação & Cursos
            </h3>

            <div className="space-y-6">

              {education.map((item) => (
                <div
                  key={item.course}
                  className="bg-[#111111] border border-[#3b2a1c] rounded-2xl p-8"
                >
                  <h4 className="text-xl font-bold text-[#f5e6c8]">
                    {item.course}
                  </h4>

                  <p className="text-[#d6a15f] mt-2">
                    {item.institution}
                  </p>

                  <p className="text-[#f5e6c8]/60 mt-2">
                    {item.period}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}