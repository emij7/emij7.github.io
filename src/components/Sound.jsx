"use client";
import { Volume1, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// const Modal = ({ onClose, toggle }) => {
//   return createPortal(
//     <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur[6px] py-8 px-6 shadow-glass-inset text-center">
//         <p>
//           This website uses music to enhance the experience.
//           ¿Do you want to enable it?
//         </p>
//         <div>
//           <button
//             onClick={toggle}
//             className="custom-bg text-foreground rounded-md p-2 m-2"
//           >
//             Yes
//           </button>
//           <button
//             onClick={onClose}
//             className="custom-bg text-foreground rounded-md p-2 m-2"
//           >
//             No
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.getElementById("modal-root")
//   );
// };

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleFirstInteraction = () => {
    const musicConsent =
      localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    ["click", "keydown", "touchstart"].forEach((event) => {
      document.removeEventListener(
        event,
        handleFirstInteraction
      );
    });
  };

  useEffect(() => {
    const musicConsent =
      localStorage.getItem("musicConsent");
    if (musicConsent === "true") {
      setIsPlaying(true);
      ["click", "keydown", "touchstart"].forEach(
        (event) => {
          document.addEventListener(
            event,
            handleFirstInteraction
          );
        }
      );
    } else {
      setIsPlaying(false);
    }
  }, []);

  const toggleSound = () => {
    const audio = document.querySelector("audio");
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
    localStorage.setItem(
      "musicConsent",
      String(!isPlaying)
    );
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      <audio
        loop
        src={"/audio/theBatmanTheme.mp3"}
        type="audio/mpeg"
        ref={audioRef}
      >
        Your browser does not support the audio element.
      </audio>
      <button
        className="text-foreground rounded-full group flex items-center justify-center custom-bg fixed top-4 right-4 w-fit self-start z-50"
        aria-label={"home"}
        name={"home"}
        onClick={toggleSound}
      >
        <span
          className=" relative w-12 h-12 p-3 hover:text-accent "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
          }}
        >
          {isPlaying ? (
            <Volume1
              className="w-full h-auto"
              strokeWidth={1.5}
            />
          ) : (
            <VolumeX
              className="w-full h-auto"
              strokeWidth={1.5}
            />
          )}
        </span>
      </button>
    </div>
  );
};

export default Sound;
