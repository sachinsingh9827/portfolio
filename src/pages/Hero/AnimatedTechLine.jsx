import React from "react";

const AnimatedTechLine = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="w-[200%] h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-slide bg-[length:400%_100%]"></div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedTechLine;
