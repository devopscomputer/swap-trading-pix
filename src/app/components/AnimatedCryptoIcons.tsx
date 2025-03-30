"use client";

import { motion } from "framer-motion";

export default function AnimatedCryptoIcons() {
  return (
    <div className="relative right-35  z-50">
      {/* ETH */}
      <motion.img
        src="/eth.png"
        alt="eth"
        className="absolute left-[1rem] top-[10rem] w-32 h-32 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
        animate={{ y: [10, -12, 10], rotate: [0, -13, 5, 0] , scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 6.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* BNB */}
      <motion.img
        src="/bnb.png"
        alt="bnb"
        className="absolute l right-[58rem] top-[42rem] w-25 h-25 drop-shadow-[0_0_18px_rgba(255,255,255,0.6)]"
        animate={{ y: [20, 52, 20], rotate:[0, -13, 13, 0] , scale: [1, 1.07, 1] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* USDT */}
      <motion.img
        src="/usdt.png"
        alt="usdt"
        className="absolute left-[38rem] z-10 top-[18rem] w-26 h-26 drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]"
        animate={{ y: [10, -12, 10], rotate: [0, -2, 12, 0] , scale: [1, 0.95, 1.03] }}
        transition={{ duration: 6.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* MATIC */}
      <motion.img
        src="/matic.png"
        alt="matic"
        className="absolute left-[21rem] top-[8rem] w-26 h-26 drop-shadow-[0_0_18px_rgba(255,255,255,0.6)]"
        animate={{ y: [10, -12, 10], rotate: [0, 6, -3, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* BTC */}
      <motion.img
        src="/btc.png"
        alt="btc"
        className="absolute left-[21rem] z-310 top-[42rem] w-28 h-28 drop-shadow-[0_0_6px_rgba(255,204,0,0.6)]"
        animate={{ y: [-10,  12, -20], rotate: [0, -10, 13, 0] , scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
     
      {/* XRP */}
      <motion.img
        src="/xrp.png"
        alt="xrp"
        className="absolute left-[2rem] top-[47rem] w-24 h-24 drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]"
        animate={{ y: [8, -8, 8], rotate: [0, -33, 33, 0]  }}
        transition={{ duration: 6.3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* ADA */}
      <motion.img
        src="/ada.png"
        alt="ada"
        className="absolute left-[49rem] top-[31rem] w-14 h-14 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
        animate={{ y: [10, -12, 10], rotate: [0, -33, 33, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />



    </div>
    
  );
}
