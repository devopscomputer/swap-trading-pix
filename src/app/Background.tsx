"use client";




export default function Background() {
  return (
    <div className="relative  min-h-screen w-full bg-[#0a0b0f] overflow-hidden font-[Inter]">


      {/* GRADIENT TEXT CENTERED */}
      <div className="relative right-[19em] flex flex-col items-start justify-center h-screen px-10 max-w-6xl mx-auto">

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
          The Future of <span className="bg-gradient-to-r from-[#6c5ce7] to-[#a367ff] bg-clip-text text-transparent">Web3 Wallets</span>
        </h1>
        <p className="relative left-[5em] mt-6 text-lg text-gray-400 max-w-2xl">
          Secure, beautiful, and easy-to-use cryptocurrency wallet for the next generation
        </p>

      </div>
      <div className="relative right-[19em] flex flex-col items-start justify-center h-screen px-10 max-w-6xl mx-auto">
     
      </div>
      {/* GRADIENT BACKGROUND EFFECT */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#6c5ce7] rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#a367ff] rounded-full opacity-20 blur-3xl animate-pulse" />
    </div>
  );
}
