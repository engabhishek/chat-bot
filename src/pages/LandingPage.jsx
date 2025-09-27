import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait 3 seconds then start fade-out
    const entryTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    // Wait 1 more second (for animation), then navigate
    const navTimer = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center bg-white transition-all duration-1000 ${
        fadeOut ? "opacity-0 translate-y-[-10px]" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/Aling3.png"
          alt="logo"
          className={`w-36 h-36 rounded-full transform transition-all duration-1000 ${
            fadeOut ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        />
        <h1
          className={`text-3xl font-extrabold text-gray-800 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Aling<span className="text-red-600">Box</span>
        </h1>
        <p
          className={`text-sm font-semibold text-gray-500 ml-28 transition-opacity duration-1000 delay-200 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          chatBot..
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
