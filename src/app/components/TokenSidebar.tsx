"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import LoginFlow from "./LoginFLow/LoginFlow";

export default function TokenSidebar() {
  const [activeTab, setActiveTab] = useState("comprar");
  const [showLogin, setShowLogin] = useState(false);

  const tokens = [
    { name: "Binance Coin", symbol: "BNB", color: "text-yellow-400", img: "/bnb.png" },
    { name: "BULLDOGITO", symbol: "BDOGITO", color: "text-green-500", img: "/bdogito.png" },
    { name: "Luna Classic", symbol: "LUNC", color: "text-green-400", img: "/lunc.png" },
    { name: "Theter USD (BEP20)", symbol: "USDT", color: "text-teal-400", img: "/usdt.png" },
    { name: "Ethereum (BEP20)", symbol: "ETH", color: "text-white", img: "/eth.png" },
    { name: "Bitcoin (BEP20)", symbol: "BTC", color: "text-orange-400", img: "/btc.png" },
    { name: "Matic", symbol: "MATIC", color: "text-purple-400", img: "/matic.png" },
    { name: "TokenFI", symbol: "TOKEN", color: "text-lime-400", img: "/tokenfi.png" },
  ];

  return (
    <div className="relative left-110 rounded-3xl w-full max-w-xl mx-auto p-6 text-white backdrop-blur-md bg-gradient-to-l from-[rgba(108,92,231,0.4)] to-[rgba(164, 103, 255, 0.59)] shadow-xl shadow-white/30">

      {/* Tabs */}
      <div className="flex rounded overflow-hidden mb-4">
        <Button />
      </div>

      {/* Botão Login */}
      <div className="my-4 text-center">
        <button
          onClick={() => setShowLogin(true)}
          className="bg-blue-400/10 font-sans font-semibold text-white py-2 px-5 rounded-lg shadow hover:brightness-105 transition"
        >
          📂 Login/Cadastro
        </button>
      </div>

      {/* Se estiver em modo de login, renderiza o fluxo */}
      {showLogin ? (
        <LoginFlow />
      ) : (
        <>
          {/* Título e busca */}
          <h2 className="text-center text-lime-400 font-bold text-sm mb-2">BUY TOKENS</h2>
          <input
            type="text"
            placeholder="Pesquise pelo nome do token"
            className="w-full p-2 rounded-lg bg-white/10 text-white mb-4 backdrop-blur-sm shadow-inner"
          />

          {/* Tokens populares */}
          <div className="text-center text-sm mb-2 text-white/80">Tokens populares</div>
          <div className="flex gap-4 justify-center mb-4">
            <div className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold shadow">🟡 PIXSWAP</div>
            <div className="bg-gray-700 text-white px-4 py-1 rounded-full font-bold shadow">⚫ BDOGITO</div>
          </div>

          {/* Lista de tokens */}
          <hr className="border-white/20 mb-4" />
          <div className="text-center text-sm mb-2 text-white/70">Criptomoedas</div>
          <div className="space-y-3">
            {tokens.map((token, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <Image src={token.img} alt={token.symbol} width={24} height={24} />
                  <span className={`${token.color} font-bold`}>{token.symbol}</span>
                  <span className="text-white text-sm">{token.name}</span>
                </div>
                <span className="text-white/50 text-lg">{">"}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
