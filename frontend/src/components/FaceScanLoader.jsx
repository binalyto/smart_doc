import { useEffect } from "react";

export default function FaceScanLoader({ photo, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden">

      {/* Face image */}
      <img
        src={photo}
        alt="Scanning face"
        className="w-full rounded-lg"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scan-line" />
      </div>

      {/* Pulse ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pulse-ring" />
      </div>

      {/* Text */}
      <div className="absolute bottom-4 w-full text-center text-white font-medium">
        Scanning face...
      </div>

      {/* Inline CSS (NO tailwind.config needed) */}
      <style>{`
        .scan-line {
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            to right,
            transparent,
            #22d3ee,
            transparent
          );
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }

        .pulse-ring {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 2px solid rgba(34, 211, 238, 0.6);
          animation: pulse 1.5s ease-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
