import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#0f172a]">
      <div className="loader font-mono font-bold text-4xl text-white relative">
        <style>{`
          .loader {
            width: fit-content;
            position: relative;
            font-weight: bold;
            font-family: sans-serif;
            font-size: 30px;
            padding-bottom: 8px;
            background: linear-gradient(to right, currentColor 0%, currentColor 50%, transparent 50%);
            background-size: 200% 3px;
            background-repeat: no-repeat;
            animation: slide 2s linear infinite;
          }
          .loader::before {
            content: "Loading...";
            display: block;
            text-align: center;
          }
          @keyframes slide {
            0% { background-position: 100% 100%; }
            100% { background-position: 0% 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;
