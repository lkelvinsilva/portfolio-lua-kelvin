export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-8 py-32 border-t border-[#3b2a1c]/30"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">

        {/* LEFT */}
        <div>

          {/* TOP */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-[1px] bg-[#d6a15f]" />

            <span className="uppercase tracking-[4px] text-[#d6a15f] text-sm">
              Sobre Mim
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-[40px] md:text-[90px] leading-[0.9] font-black uppercase">

            <small className="block text-[#f5e6c8]">
              Construindo
            </small>

            <span className="block text-[#5a3b23]">
              Soluções
            </span>

          </h2>

          {/* TEXT */}
          <div className="mt-12 space-y-8 text-lg leading-relaxed text-[#f5e6c8]/70 max-w-2xl">

            <p>
              Sou desenvolvedor Full Stack focado em criar aplicações modernas,
              performáticas e escaláveis utilizando React, Node.js,
              TypeScript e PostgreSQL.
            </p>

            <p>
              Tenho experiência desenvolvendo projetos completos com autenticação,
              APIs REST, banco de dados, deploy e arquitetura moderna utilizando
              tecnologias do ecossistema JavaScript e ferramentas atuais do mercado.
            </p>

            <p>
              Atualmente busco evoluir cada vez mais na área de desenvolvimento,
              construindo sistemas reais, refinando código limpo e criando interfaces
              com excelente experiência do usuário.
            </p>

          </div>

          {/* BUTTON */}
          <button className="mt-14 bg-[#d6a15f] text-black px-10 py-5 uppercase tracking-[3px] font-semibold hover:scale-105 transition duration-300">

            Entre em contato →

          </button>

        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6 h-fit">

          {/* CARD */}
          <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl hover:border-[#d6a15f]/40 transition duration-300">

            <h3 className="text-[#d6a15f] uppercase tracking-[3px] text-sm font-semibold mb-6">
              Front-end
            </h3>

            <p className="text-[#f5e6c8]/70 leading-8">
              React.js,
              Next.js,
              TypeScript,
              TailwindCSS,
              Responsividade
            </p>

          </div>

          {/* CARD */}
          <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl hover:border-[#d6a15f]/40 transition duration-300">

            <h3 className="text-[#d6a15f] uppercase tracking-[3px] text-sm font-semibold mb-6">
              Back-end
            </h3>

            <p className="text-[#f5e6c8]/70 leading-8">
              Node.js,
              Express,
              APIs REST,
              JWT,
              Prisma ORM
            </p>

          </div>

          {/* CARD */}
          <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl hover:border-[#d6a15f]/40 transition duration-300">

            <h3 className="text-[#d6a15f] uppercase tracking-[3px] text-sm font-semibold mb-6">
              Banco de Dados
            </h3>

            <p className="text-[#f5e6c8]/70 leading-8">
              PostgreSQL,
              MySQL,
              SQLite,
              Modelagem de Dados
            </p>

          </div>

          {/* CARD */}
          <div className="border border-[#3b2a1c] bg-black/30 backdrop-blur-xl p-8 rounded-2xl hover:border-[#d6a15f]/40 transition duration-300">

            <h3 className="text-[#d6a15f] uppercase tracking-[3px] text-sm font-semibold mb-6">
              Ferramentas
            </h3>

            <p className="text-[#f5e6c8]/70 leading-8">
              Git,
              GitHub,
              Vercel,
              Figma,
              Deploy
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}