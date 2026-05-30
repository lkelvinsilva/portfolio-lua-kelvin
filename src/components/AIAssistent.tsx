import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Olá! Sou a IA do Luã Kelvin 👋 Posso falar sobre projetos, experiências, tecnologias, formação e objetivos profissionais.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = input;

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "SUA_URL_DO_WEBHOOK_AQUI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: currentMessage,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ||
            data.output ||
            "Não consegui responder no momento.",
        },
      ]);
    } catch (error: unknown) {
  console.error(error);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: "Erro ao conectar com a IA. Tente novamente.",
    },
  ]);
}

    setLoading(false);
  };

  return (
    <>
      {/* BOTÃO FLUTUANTE */}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          right-6
          bottom-8
          z-50
          w-20
          h-20
          rounded-full
          overflow-hidden
          border-2
          border-[#d6a15f]
          shadow-[0_0_30px_rgba(214,161,95,0.6)]
          hover:scale-110
          hover:shadow-[0_0_40px_rgba(214,161,95,0.8)]
          transition-all
          duration-300
        "
      >
        <img
          src="/iconeIA.png"
          alt="IA Luã"
          className="w-full h-full object-cover"
        />

        <span
          className="
            absolute
            bottom-1
            right-1
            w-4
            h-4
            bg-green-500
            border-2
            border-black
            rounded-full
          "
        />
      </button>

      {/* CHAT */}

      {open && (
        <div
          className="
            fixed
            right-6
            bottom-32
            w-[380px]
            h-[600px]
            bg-[#111111]
            border
            border-[#d6a15f]
            rounded-2xl
            shadow-2xl
            z-50
            flex
            flex-col
            overflow-hidden
          "
        >
          {/* HEADER */}

          <div className="p-5 border-b border-[#3b2a1c]">

            <h3 className="text-[#d6a15f] font-bold text-lg">
              IA do Luã Kelvin
            </h3>

            <p className="text-[#f5e6c8]/60 text-sm mt-1">
              Pergunte qualquer coisa sobre minha trajetória.
            </p>

          </div>

          {/* MENSAGENS */}

          <div className="flex-1 overflow-y-auto p-5 space-y-4">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`max-w-[85%] p-4 rounded-xl ${
                  msg.role === "user"
                    ? "ml-auto bg-[#d6a15f] text-black"
                    : "bg-[#050505] text-[#f5e6c8]"
                }`}
              >
                {msg.content}
              </div>

            ))}

            {loading && (

              <div className="bg-[#050505] text-[#d6a15f] p-4 rounded-xl w-fit">
                Digitando...
              </div>

            )}

          </div>

          {/* INPUT */}

          <div className="p-4 border-t border-[#3b2a1c]">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Pergunte algo sobre mim..."
              className="
                w-full
                bg-[#050505]
                border
                border-[#3b2a1c]
                rounded-xl
                px-4
                py-3
                text-[#f5e6c8]
                outline-none
              "
            />

            <button
              onClick={sendMessage}
              className="
                w-full
                mt-3
                bg-[#d6a15f]
                text-black
                py-3
                rounded-xl
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Enviar
            </button>

          </div>

        </div>
      )}
    </>
  );
}