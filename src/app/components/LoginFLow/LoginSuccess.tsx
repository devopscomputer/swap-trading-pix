"use client";

export default function LoginSuccess() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8 text-center text-white space-y-6">
      <h2 className="text-2xl font-bold text-lime-400">✅ Login realizado com sucesso!</h2>
      <p className="text-white/80">Bem-vindo à plataforma PIXSwap.</p>
      <p className="text-sm text-white/60">
        Agora você pode acessar todos os recursos e realizar suas operações de swap com segurança.
      </p>

      <div className="mt-6 text-sm text-white/50 italic">Você será redirecionado em instantes...</div>
    </div>
  );
}
