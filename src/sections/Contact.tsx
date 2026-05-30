export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-6xl md:text-8xl font-black uppercase text-[#f5e6c8] mt-6">
          Vamos construir algo?
        </h2>

        <p className="text-[#f5e6c8]/70 mt-8 max-w-3xl mx-auto text-lg leading-8">
          Desenvolvedor Full Stack focado em criar aplicações modernas,
          escaláveis e intuitivas. Tenho experiência com React,
          TypeScript, Node.js, PostgreSQL e automações utilizando
          Inteligência Artificial. Meu objetivo é transformar problemas
          complexos em soluções simples, eficientes e que gerem resultados
          reais para empresas e pessoas.
        </p>

        <a
          href="mailto:contato@luakelvin.dev"
          className="block mt-16 text-4xl md:text-7xl font-black uppercase text-[#d6a15f] hover:text-[#f5e6c8] transition duration-300"
        >
          CONTATO
        </a>

        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <a
            href="https://www.linkedin.com/in/lu%C3%A3-kelvin-38a86426a"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#3b2a1c] px-8 py-4 rounded-xl text-[#d6a15f] hover:bg-[#d6a15f] hover:text-black transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/lkelvinsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#3b2a1c] px-8 py-4 rounded-xl text-[#d6a15f] hover:bg-[#d6a15f] hover:text-black transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://wa.me/5585994000246"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#3b2a1c] px-8 py-4 rounded-xl text-[#d6a15f] hover:bg-[#d6a15f] hover:text-black transition duration-300"
          >
            WhatsApp
          </a>

          <a
            href="/Curriculo-Lua-Kelvin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#3b2a1c] px-8 py-4 rounded-xl text-[#d6a15f] hover:bg-[#d6a15f] hover:text-black transition duration-300"
          >
            Currículo
          </a>

        </div>

        <div className="mt-24 border-t border-[#3b2a1c] pt-8">

          <p className="text-[#f5e6c8]/50 text-sm">
            © 2026 Luã Kelvin • Desenvolvedor Full Stack • React • Node.js • IA
          </p>

        </div>

      </div>
    </section>
  );
}