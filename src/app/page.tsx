"use client";

import React, { useState, useEffect } from "react";
import PreLoader from "../components/pre-loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleReplay = () => {
    setLoading(true);
    setReplayKey(prev => prev + 1);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-[rgb(25,25,25)] text-white">
      {loading && (
        <div className="fixed inset-0 z-50">
          <PreLoader key={replayKey} enableBlur={true} animationSpeed={1} />
        </div>
      )}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <button
            onClick={handleReplay}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Replay Preloader
          </button>
        </div>
      </main>
    </div>
  );
}
