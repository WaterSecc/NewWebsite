"use client";

import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // animation delay
    };

    // Wait for full load
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="relative w-48 h-2 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="absolute left-0 top-0 h-full w-0 bg-waterseclight animate-loader" />
      </div>
    </div>
  );
};

export default LoadingScreen;
