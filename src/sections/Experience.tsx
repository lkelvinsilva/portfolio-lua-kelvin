import { experiences, education } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-5 md:px-8 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">

        <span className="text-[#d6a15f] uppercase tracking-[3px] text-sm">
          Trajetória
        </span>

        <h2 className="text-[42px] sm:text-[60px] md:text-[90px] font-black uppercase text-[#f5e6c8] mt-4 leading-none">
          Experiência & Formação
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-12 md:mt-20">

          {/* EXPERIÊNCIA */}
          <div>

            <h3 className="text-[#d6a15f] uppercase tracking-[2px] text-sm md:text-base mb-8">
              Experiência Profissional
            </h3>

            <div className="space-y-6 md:space-y-8">

              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-[#111111] border border-[#3b2a1c] rounded-2xl p-5 md:p-8"
                >
                  <span className="text-[#d6a15f] text-xs md:text-sm uppercase tracking-[2px]">
                    {exp.period}
                  </span>

                  <h4 className="text-xl md:text-2xl font-bold text-[#f5e6c8] mt-3">
                    {exp.title}
                  </h4>

                  <p className="text-[#d6a15f] mt-2 text-sm md:text-base">
                    {exp.company}
                  </p>

                  <p className="text-[#f5e6c8]/70 mt-4 md:mt-5 leading-7 md:leading-8 text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* FORMAÇÃO */}
          <div>

            <h3 className="text-[#d6a15f] uppercase tracking-[2px] text-sm md:text-base mb-8">
              Formação & Cursos
            </h3>

            <div className="space-y-5 md:space-y-6">

              {education.map((item) => (
                <div
                  key={item.course}
                  className="bg-[#111111] border border-[#3b2a1c] rounded-2xl p-5 md:p-8"
                >
                  <h4 className="text-lg md:text-xl font-bold text-[#f5e6c8]">
                    {item.course}
                  </h4>

                  <p className="text-[#d6a15f] mt-2 text-sm md:text-base">
                    {item.institution}
                  </p>

                  <p className="text-[#f5e6c8]/60 mt-2 text-sm">
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