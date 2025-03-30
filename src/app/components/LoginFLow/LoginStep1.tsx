"use client";

import { useState } from "react";

interface Props {
  onNext: (email: string) => void;
}

export default function LoginStep1({ onNext }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Por favor, preencha seu email ou CPF");
      return;
    }

    setError("");
    onNext(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center text-white"
    >
      {/* Botão de Login/Cadastro */}
      <div className="text-left w-full px-6 mb-6">
        <button
          type="button"
          disabled
          className="bg-[#f59e0b]/90 text-white font-bold px-4 py-2 rounded-md text-sm shadow-md"
        >
          📂 Login/Cadastro
        </button>
      </div>

      {/* Mensagem de instrução */}
      <p className="text-lime-400 font-semibold text-center mb-4 text-sm">
        Digite seu email ou CPF para prosseguir
      </p>

      {/* Campo de input */}
      <input
        type="text"
        placeholder="Email ou CPF"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[300px] rounded-lg px-4 py-2 text-black placeholder-gray-400 shadow-inner focus:outline-none"
      />

      {/* Erro */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Botão para avançar */}
      <button
        type="submit"
        className="mt-6 bg-lime-400 text-black font-bold px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300"
      >
        ➤
      </button>
    </form>
  );
}
