"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("musicConsent") !== "true") return undefined;

    const resumeAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    document.addEventListener("pointerdown", resumeAudio, { once: true });
    document.addEventListener("keydown", resumeAudio, { once: true });

    return () => {
      document.removeEventListener("pointerdown", resumeAudio);
      document.removeEventListener("keydown", resumeAudio);
    };
  }, []);

  const toggleSound = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
      localStorage.setItem("musicConsent", "false");
      return;
    }

    try {
      await audioRef.current?.play();
      setIsPlaying(true);
      localStorage.setItem("musicConsent", "true");
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="sound-control">
      <audio
        loop
        preload="none"
        src="/audio/theBatmanTheme.mp3"
        type="audio/mpeg"
        ref={audioRef}
      />
      <button
        className={`sound-button ${isPlaying ? "is-playing" : ""}`}
        type="button"
        aria-label={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
        aria-pressed={isPlaying}
        title={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
        onClick={toggleSound}
      >
        <span className="sound-pulse" aria-hidden="true" />
        {isPlaying ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
      </button>
    </div>
  );
};

export default Sound;
