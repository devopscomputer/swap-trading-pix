"use client";

import { useState } from "react";
import LoginStep1 from "./LoginStep1";
import LoginStep2 from "./LoginStep2";
import LoginStep3 from "./LoginStep3";
import LoginStep4 from "./LoginStep4";
import LoginSuccess from "./LoginSuccess";

export default function LoginFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const next = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  const handleFinish = (walletData: any) => {
    setFormData((prev: any) => ({ ...prev, ...walletData }));
    setStep(5);

    // Aqui você pode enviar formData + walletData ao backend (ex: via fetch/axios)
    console.log("Dados finais:", { ...formData, ...walletData });

    // Redirecionamento pode ser adicionado com useRouter do next/navigation
  };

  return (
    <div className="bg-[#0a0a0a]/90 backdrop-blur-md shadow-xl rounded-2xl w-full max-w-md mx-auto p-6">
      {step === 1 && <LoginStep1 onNext={(email) => next({ email })} />}
      {step === 2 && (
        <LoginStep2
          defaultEmail={formData.email}
          onBack={back}
          onContinue={(data) => next(data)}
        />
      )}
      {step === 3 && (
        <LoginStep3
          onBack={back}
          onContinue={(data) => next(data)}
        />
      )}
      {step === 4 && (
        <LoginStep4
          onBack={back}
          onFinish={handleFinish}
        />
      )}
      {step === 5 && <LoginSuccess />}
    </div>
  );
}
