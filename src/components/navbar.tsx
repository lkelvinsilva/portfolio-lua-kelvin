import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#3b2a1c]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-24 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl md:text-3xl font-black text-[#d6a15f]">
          LK.
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10">

          <a
            href="#about"
            className="text-[#f5e6c8] hover:text-[#d6a15f] transition"
          >
            Sobre
          </a>

          <a
            href="#projects"
            className="text-[#f5e6c8] hover:text-[#d6a15f] transition"
          >
            Projetos
          </a>

          <a
            href="#experience"
            className="text-[#f5e6c8] hover:text-[#d6a15f] transition"
          >
            Experiência
          </a>

          <a
            href="#contact"
            className="text-[#f5e6c8] hover:text-[#d6a15f] transition"
          >
            Contato
          </a>

        </nav>

        {/* BOTÃO DESKTOP */}
        <a
          href="https://wa.me/5585994000246"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:flex
            bg-[#d6a15f]
            text-[#050505]
            font-black
            tracking-[2px]
            uppercase
            px-8
            py-3
            rounded-lg
            hover:bg-[#f5e6c8]
            transition-all
            duration-300
          "
        >
          Fala Comigo
        </a>

        {/* HAMBURGUER MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-7 h-[2px] bg-[#d6a15f]" />
          <span className="w-7 h-[2px] bg-[#d6a15f]" />
          <span className="w-7 h-[2px] bg-[#d6a15f]" />
        </button>

      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              bg-[#050505]
              border-t
              border-[#3b2a1c]
            "
          >

            <nav className="flex flex-col p-6 gap-6">

              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="text-[#f5e6c8]"
              >
                Sobre
              </a>

              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="text-[#f5e6c8]"
              >
                Projetos
              </a>

              <a
                href="#experience"
                onClick={() => setOpen(false)}
                className="text-[#f5e6c8]"
              >
                Experiência
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-[#f5e6c8]"
              >
                Contato
              </a>

              <a
                href="https://wa.me/5585994000246"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#d6a15f]
                  text-black
                  px-5
                  py-3
                  rounded-lg
                  text-center
                  font-semibold
                "
              >
                Fala Comigo
              </a>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>
    </header>
  );
}