"use client";

import { useState } from "react";

interface Props {
  onBack: () => void;
  onContinue: (data: any) => void;
}

export default function LoginStep3({ onBack, onContinue }: Props) {
  const [formData, setFormData] = useState({
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full p-6 space-y-4 text-white">
      <h2 className="text-center text-lime-400 font-bold text-sm">
        Digite seu endereço para cadastro
      </h2>

      <input name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white" />
      <input name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white" />
      <input name="numero" placeholder="Número" value={formData.numero} onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white" />
      <input name="complemento" placeholder="Complemento" value={formData.complemento} onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white" />
      <input name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white" />
      <input name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white" />

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
