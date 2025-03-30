"use client";

import { useState } from "react";

interface Props {
  onBack: () => void;
  onContinue: (data: any) => void;
  defaultEmail?: string;
}

export default function LoginStep2({ onBack, onContinue, defaultEmail = "" }: Props) {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    email: defaultEmail,
    telefone: "+55",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full p-6 space-y-4 text-white">
      <h2 className="text-center text-lime-400 font-bold text-sm">
        Digite seus dados para prosseguir
      </h2>

      <input
        name="nome"
        placeholder="Seu nome completo"
        value={formData.nome}
        onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white"
      />
      <input
        name="cpf"
        placeholder="Seu CPF"
        value={formData.cpf}
        onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white"
      />
      <input
        name="nascimento"
        placeholder="Data de nascimento"
        type="date"
        value={formData.nascimento}
        onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white"
      />
      <input
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white"
      />

      <p className="text-xs text-lime-400">
        O nome, CPF e data de nascimento devem ser os mesmos do pagador!
      </p>

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="text-sm underline">
          Voltar
        </button>
        <button
          onClick={() => onContinue(formData)}
          className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-full font-bold"
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}
