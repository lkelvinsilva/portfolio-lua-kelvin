export default function CRMClinicaPage() {
  const features = [
    {
      number: "01",
      title: "Gestão de pacientes",
      text: "Cadastro, consulta, busca e gerenciamento das informações dos pacientes em uma base centralizada.",
    },
    {
      number: "02",
      title: "Agenda inteligente",
      text: "Organização dos atendimentos, horários, procedimentos, status das consultas e prevenção de conflitos de horário.",
    },
    {
      number: "03",
      title: "Prontuário digital",
      text: "Estrutura digital para registros clínicos, formulários personalizados e diferentes tipos de prontuários.",
    },
    {
      number: "04",
      title: "Odontograma",
      text: "Representação da arcada dentária com registro individual dos dentes e condições odontológicas.",
    },
    {
      number: "05",
      title: "Controle financeiro",
      text: "Registro de receitas e despesas, categorias, formas de pagamento e acompanhamento dos resultados financeiros.",
    },
    {
      number: "06",
      title: "Automações",
      text: "Integração com fluxos automatizados para lembretes, comunicação e processos operacionais da clínica.",
    },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "React Hook Form",
    "Zod",
    "n8n",
    "OpenAI",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5e6c8]">

      {/* HERO */}
      <section className="px-6 pb-24 pt-32 md:px-12 md:pb-32">
        <div className="mx-auto max-w-6xl">

          <a
            href="/#projects"
            className="text-sm uppercase tracking-[3px] text-[#d6a15f] transition hover:opacity-70"
          >
            ← Voltar para projetos
          </a>

          <div className="mt-16">
            <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
              SaaS • Sistema Web
            </span>

            <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-2px] md:text-7xl lg:text-8xl">
              CRM para Clínica
              <br />
              Odontológica
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-[#f5e6c8]/60 md:text-xl">
              Sistema desenvolvido sob medida para centralizar a operação de
              uma clínica odontológica, conectando gestão de pacientes,
              agenda, prontuário digital, financeiro e automações em uma única
              plataforma.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#d6a15f]/30 bg-[#d6a15f]/5 px-5 py-2 text-sm text-[#d6a15f]">
                Sistema sob medida
              </span>

              <span className="rounded-full border border-[#d6a15f]/30 bg-[#d6a15f]/5 px-5 py-2 text-sm text-[#d6a15f]">
                Gestão clínica
              </span>

              <span className="rounded-full border border-[#d6a15f]/30 bg-[#d6a15f]/5 px-5 py-2 text-sm text-[#d6a15f]">
                Automação
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section className="border-y border-[#3b2a1c] bg-[#0b0b0b] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">

            <div>
              <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
                Visão geral
              </span>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                Uma operação.
                <br />
                Um sistema.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#f5e6c8]/60">
                O projeto foi pensado para substituir processos espalhados em
                diferentes ferramentas por uma estrutura centralizada,
                permitindo que informações importantes da clínica sejam
                organizadas dentro de um único ambiente.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#f5e6c8]/60">
                A plataforma reúne módulos administrativos, clínicos e
                financeiros, além de integrações com automações externas para
                tornar a operação mais organizada e escalável.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEMA / SOLUÇÃO */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
            O desafio
          </span>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-[#3b2a1c] bg-[#0d0d0d] p-8 md:p-10">
              <span className="text-xs uppercase tracking-[3px] text-[#d6a15f]/70">
                Antes
              </span>

              <h3 className="mt-5 text-3xl font-bold uppercase">
                Processos descentralizados
              </h3>

              <p className="mt-5 leading-7 text-[#f5e6c8]/60">
                Informações de pacientes, consultas, registros clínicos e
                dados financeiros podem ficar distribuídos em diferentes
                ferramentas e processos manuais.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d6a15f]/30 bg-[#d6a15f]/5 p-8 md:p-10">
              <span className="text-xs uppercase tracking-[3px] text-[#d6a15f]">
                Solução
              </span>

              <h3 className="mt-5 text-3xl font-bold uppercase">
                Gestão centralizada
              </h3>

              <p className="mt-5 leading-7 text-[#f5e6c8]/60">
                Um sistema único para organizar os principais processos da
                clínica, facilitar o acesso às informações e conectar a gestão
                com automações digitais.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="border-y border-[#3b2a1c] bg-[#0b0b0b] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
            Funcionalidades
          </span>

          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            Estrutura construída para a rotina da clínica
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-[#3b2a1c] bg-[#0d0d0d] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#d6a15f]/50"
              >
                <div className="flex items-start justify-between gap-6">

                  <span className="text-sm tracking-[3px] text-[#d6a15f]">
                    {item.number}
                  </span>

                  <span className="text-[#d6a15f]/20 transition group-hover:text-[#d6a15f]/50">
                    +
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#f5e6c8]/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ARQUITETURA */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>
              <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
                Arquitetura
              </span>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                Frontend,
                <br />
                dados e
                <br />
                automação.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#f5e6c8]/60">
                A aplicação foi estruturada utilizando uma arquitetura moderna
                para conectar interface, autenticação, banco de dados,
                formulários, regras de negócio e automações externas.
              </p>
            </div>

            <div className="space-y-4">

              <div className="rounded-2xl border border-[#3b2a1c] bg-[#0d0d0d] p-6">
                <span className="text-xs uppercase tracking-[3px] text-[#d6a15f]">
                  Frontend
                </span>

                <p className="mt-3 text-xl font-semibold">
                  Next.js + React + TypeScript
                </p>

                <p className="mt-2 text-sm leading-6 text-[#f5e6c8]/50">
                  Interface responsiva, componentes reutilizáveis e
                  organização modular da aplicação.
                </p>
              </div>

              <div className="rounded-2xl border border-[#3b2a1c] bg-[#0d0d0d] p-6">
                <span className="text-xs uppercase tracking-[3px] text-[#d6a15f]">
                  Backend & Dados
                </span>

                <p className="mt-3 text-xl font-semibold">
                  Supabase + PostgreSQL
                </p>

                <p className="mt-2 text-sm leading-6 text-[#f5e6c8]/50">
                  Banco de dados, autenticação, armazenamento e políticas de
                  acesso para os dados da aplicação.
                </p>
              </div>

              <div className="rounded-2xl border border-[#3b2a1c] bg-[#0d0d0d] p-6">
                <span className="text-xs uppercase tracking-[3px] text-[#d6a15f]">
                  Automação
                </span>

                <p className="mt-3 text-xl font-semibold">
                  n8n + Inteligência Artificial
                </p>

                <p className="mt-2 text-sm leading-6 text-[#f5e6c8]/50">
                  Fluxos automatizados e integrações para comunicação e
                  processos operacionais.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="border-y border-[#3b2a1c] bg-[#0b0b0b] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
            Stack
          </span>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Tecnologias utilizadas
          </h2>

          <div className="mt-12 flex max-w-5xl flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#d6a15f]/30 bg-[#d6a15f]/5 px-5 py-3 text-sm text-[#d6a15f] transition hover:border-[#d6a15f]/70 hover:bg-[#d6a15f]/10"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* DESTAQUE */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-[#3b2a1c] bg-[#0d0d0d] p-8 md:p-14">

            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">

              <div>
                <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
                  Destaque
                </span>

                <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
                  Mais do que um painel administrativo
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-[#f5e6c8]/60">
                  O projeto combina diferentes áreas de uma operação real em
                  uma única aplicação: gestão de relacionamento, agenda,
                  informações clínicas, financeiro e automações.
                </p>

                <p className="mt-6 text-lg leading-8 text-[#f5e6c8]/60">
                  O resultado é uma base de software que pode evoluir de
                  acordo com as necessidades da operação, permitindo adicionar
                  novos módulos, integrações e fluxos ao longo do tempo.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-8 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a15f]/30 bg-[#d6a15f]/5 p-10 text-center md:p-20">

          <span className="text-sm uppercase tracking-[4px] text-[#d6a15f]">
            Próximo projeto
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            Sua operação também pode se tornar um sistema
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#f5e6c8]/60">
            Transforme processos manuais em uma solução digital sob medida,
            com sistemas, integrações e automações desenvolvidos de acordo com
            as necessidades do seu negócio.
          </p>

          <a
            href="/#contact"
            className="mt-10 inline-flex rounded-full bg-[#d6a15f] px-8 py-4 font-bold uppercase tracking-[2px] text-black transition hover:scale-105"
          >
            Entrar em contato →
          </a>

        </div>
      </section>

    </main>
  );
}