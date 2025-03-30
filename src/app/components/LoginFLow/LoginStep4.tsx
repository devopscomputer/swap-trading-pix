"use client";

import { useState } from "react";

interface Props {
  onBack: () => void;
  onFinish: (data: any) => void;
}

export default function LoginStep4({ onBack, onFinish }: Props) {
  const [wallet, setWallet] = useState("");

  const handleSubmit = () => {
    if (!wallet.trim()) return;
    onFinish({ wallet });
  };

  return (
    <div className="w-full p-6 space-y-4 text-white">
      <h2 className="text-center text-lime-400 font-bold text-sm">
        Digite o endereço da sua carteira
      </h2>

      <input
        name="wallet"
        placeholder="0x..."
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        className="w-full p-2 rounded bg-white/10 placeholder-white/60 text-white"
      />

      <p className="text-xs text-lime-400 text-center">Certifique-se que é uma carteira BSC compatível</p>

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="text-sm underline">
          Voltar
        </button>
        <button
          onClick={handleSubmit}
          className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-full font-bold"
        >
          FINALIZAR
        </button>
      </div>
    </div>
  );
}
