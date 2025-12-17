import { useLocation, useNavigate } from "react-router-dom";
import UserInfoCard from "../components/UserInfoCard";
import MetricCard from "../components/MetricCard";
import MainLayout from "../layouts/MainLayout";
import heartRateIcon from "../assets/heart-rate.png";
import bloodPressureIcon from "../assets/blood-pressure.png";
import ecgIcon from "../assets/ecg.png";
import fitnessAppIcon from "../assets/fitness-app.png";
import lungsIcon from "../assets/lungs.png";
import oximeterIcon from "../assets/oximeter.png";
import checkMarkIcon from "../assets/check-mark.png";
import drySkinIcon from "../assets/dry-skin.png";

export default function Results() {
  const { state } = useLocation();
  //   const navigate = useNavigate();

  //   if (!state) {
  //     navigate("/");
  //     return null;
  //   }

  const { name } = state;

  const formatDateTime = () => {
    const now = new Date();

    const date = now.toLocaleDateString("en-GB"); // DD/MM/YYYY
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${date} | ${time}`;
  };

  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-full">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          <UserInfoCard name={name} date={formatDateTime()} />
          <div className="flex items-center justify-center gap-1">
            <p className="font-semibold text-center text-green-600">
              Everything seems good
            </p>
            <img src={checkMarkIcon} className="h-8 w-8" />
          </div>
          {/* Cardiovascular */}
          <section>
            <h2 className="font-semibold mb-3">Cardiovascular Parameters</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <MetricCard
                label="Heart Rate"
                value="61"
                unit="bpm"
                icon={heartRateIcon}
              />
              <MetricCard
                label="Blood Pressure"
                value="82/128"
                unit="mmHg"
                icon={bloodPressureIcon}
              />
              <MetricCard
                label="Dryness"
                value="48"
                unit="%"
                icon={drySkinIcon}
              />
              <MetricCard
                label="RMSSD"
                value="93"
                unit="ms"
                icon={fitnessAppIcon}
              />
            </div>
          </section>

          {/* Wellness CTA Banner */}
          <section className="mt-8">
            <div
              className="relative w-full bg-linear-to-r from-blue-600 to-blue-500
               rounded-2xl p-6 sm:p-8
               flex flex-col sm:flex-row
               items-center justify-between gap-4
               text-white"
            >
              {/* Offer Badge */}
              <div
                className="absolute -top-3 left-4
        bg-green-500 text-white
        text-xs font-semibold
        px-3 py-1 rounded-full
        shadow"
              >
                Special Offer
              </div>
              {/* Text */}
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Ayurvedic Wellness Therapy
                </h3>
                <p className="text-sm text-blue-100 max-w-md">
                  Rejuvenate your body with a world-famous 1-week Ayurvedic
                  therapy experience in Kerala.
                </p>
              </div>

              {/* CTA Button */}
              <button
                className="px-6 py-3 bg-white text-blue-600
                 rounded-xl font-medium
                 hover:bg-blue-50 transition"
              >
                Book Now
              </button>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
