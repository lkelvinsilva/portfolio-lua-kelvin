export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#3b2a1c]">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center">

        {/* Logo */}
        <div className="flex-1">
          <h1 className="text-3xl font-black text-[#d6a15f]">
            LK.
          </h1>
        </div>

        {/* Menu Centralizado */}
        <nav className="flex gap-10 justify-center flex-1">

          <a href="#about" className="text-[#f5e6c8] hover:text-[#d6a15f] transition">
            Sobre
          </a>

          <a href="#projects" className="text-[#f5e6c8] hover:text-[#d6a15f] transition">
            Projetos
          </a>

          <a href="#experience" className="text-[#f5e6c8] hover:text-[#d6a15f] transition">
            Experiência
          </a>

          <a href="#contact" className="text-[#f5e6c8] hover:text-[#d6a15f] transition">
            Contato
          </a>

        </nav>

        {/* Botão Direita */}
        <div className="flex-1 flex justify-end">

        <a
  
  className="
    bg-[#d6a15f]
    text-[#050505]
    font-black
    tracking-[2px]
    uppercase
    px-8 py-3
    rounded-lg
    hover:bg-[#f5e6c8]
    transition-all
    duration-300
    shadow-lg
    
  "
  href="https://wa.me/5585994000246"
  target="_blank"
  rel="noopener noreferrer"
  >


  FALA COMIGO
</a>

        </div>

      </div>
    </header>
  );
}