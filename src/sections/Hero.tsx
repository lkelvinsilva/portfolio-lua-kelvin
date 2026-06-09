import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 px-5 sm:px-8">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="flex items-center gap-4 mb-8">

            <div className="w-12 h-[1px] bg-[#d6a15f]" />

            <span className="uppercase tracking-[4px] text-[#d6a15f] text-sm">
              portfolio luã kelvin
            </span>

          </div>

          {/* TITLE */}
          <h1 className="leading-[0.9] uppercase">

            <span className="block text-[72px] sm:text-[90px] md:text-[140px] font-black text-[#f5e6c8]">
              LUÃ
            </span>

            <span className="block text-[72px] sm:text-[90px] md:text-[140px] font-black text-[#5a3b23]">
              KELVIN
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 text-lg text-[#f5e6c8]/70 leading-relaxed max-w-xl">

            Desenvolvedor Full Stack focado em criar aplicações modernas,
            performáticas e com excelente experiência do usuário utilizando
            React, Node.js, TypeScript e PostgreSQL.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mt-12">

            <button className="bg-[#d6a15f] text-black px-9 py-4 uppercase tracking-[3px] font-semibold hover:scale-105 transition duration-300">

              Ver Projetos →

            </button>

            <button className="border border-[#5a3b23] px-9 py-4 uppercase tracking-[3px] hover:bg-[#1a120d] transition duration-300">

              GitHub

            </button>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* PHOTO */}
          <div className="relative mt-9 w-full max-w-md">

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#d6a15f]/20 blur-3xl rounded-[40px]" />

            {/* IMAGE */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[380px] sm:h-[450px] md:h-[500px] rounded-[40px] overflow-hidden border border-[#6f4b2d]">

              <img
                src="/perfil.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 mt-6">

              <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl">

                <h2 className="text-5xl font-bold text-[#d6a15f]">
                  8+
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4 text-[#f5e6c8]/60">
                  Tecnologias
                </p>

              </div>

              <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl">

                <h2 className="text-5xl font-bold text-[#d6a15f]">
                  4+
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4 text-[#f5e6c8]/60">
                  Projetos Desenvolvidos
                </p>

              </div>

              <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl">

                <h2 className="text-5xl font-bold text-[#d6a15f]">
                  3+
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4 text-[#f5e6c8]/60">
                  Sistemas Full Stack
                </p>

              </div>

              <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl">

                <h2 className="text-5xl font-bold text-[#d6a15f]">
                  1+
                </h2>

                <p className="uppercase tracking-[3px] text-xs mt-4 text-[#f5e6c8]/60">
                  Solução com IA
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}