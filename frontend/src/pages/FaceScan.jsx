import { useRef, useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router";
import FaceScanLoader from "../components/FaceScanLoader";

export default function FaceScan() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const navigate = useNavigate();

  const [cameraOn, setCameraOn] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [stream, setStream] = useState(null);
  const [scanning, setScanning] = useState(false);

  // Open camera (ONLY request permission here)
  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      setCameraOn(true);
    } catch (err) {
      console.error(err);
      alert(err.name + ": " + err.message);
    }
  };

  // Attach stream AFTER video is rendered
  useEffect(() => {
    if (cameraOn && videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  }, [cameraOn, stream]);

  // Capture photo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0);
    setPhoto(canvas.toDataURL("image/jpeg"));

    stopCamera();
  };

  // Stop camera
  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
    setCameraOn(false);
  };

  // Cleanup on page exit
  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center">
        <div className="p-4 max-w-md space-y-6 text-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Facial Health Scan
        </h1>

        {/* Medical description card */}
        <div className="bg-white border rounded-xl p-4 text-left space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            This facial scan captures a single image of your face to assess
            visible physiological markers that may support preliminary health
            insights.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            The scan is non-invasive and does not store or share your image
            without consent.
          </p>

          <div className="pt-2 space-y-1 text-sm text-gray-600">
            <p className="font-medium text-gray-800">Before you proceed:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ensure you are in a well-lit environment</li>
              <li>Keep your face clearly visible and centered</li>
              <li>Remove glasses, masks, or face coverings</li>
            </ul>
          </div>
        </div>

        {/* Open camera */}
        {!cameraOn && !photo && (
          <button
            onClick={openCamera}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition font-medium"
          >
            Open Camera
          </button>
        )}

        {/* Live camera */}
        {cameraOn && (
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden border">
              <video ref={videoRef} autoPlay playsInline className="w-full" />
            </div>

            <p className="text-xs text-gray-500">
              Align your face within the frame and remain still.
            </p>

            <button
              onClick={capturePhoto}
              className="w-full px-4 py-3 bg-green-600 text-white rounded-lg
                   hover:bg-green-700 transition font-medium"
            >
              Capture Photo
            </button>
          </div>
        )}

        {/* Captured photo */}
        {photo && (
          <div className="space-y-4">
            {!scanning && (
              <div className="space-y-4">
                <img
                  src={photo}
                  alt="Captured face"
                  className="w-full rounded-xl border"
                />

                <p className="text-xs text-gray-500">
                  Review the captured image before continuing.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setPhoto(null)}
                    className="flex-1 py-2 border rounded-lg text-sm font-medium"
                  >
                    Retake
                  </button>

                  <button
                    onClick={() => setScanning(true)}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg
                         text-sm font-medium hover:bg-blue-700"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {scanning && (
              <FaceScanLoader
                photo={photo}
                onComplete={() =>
                  navigate("/scan/face/details", { state: { photo } })
                }
              />
            )}
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
      </div>
    </MainLayout>
  );
}
