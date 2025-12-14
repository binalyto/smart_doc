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
                label="Mean RRi"
                value="997"
                unit="ms"
                icon={ecgIcon}
              />
              <MetricCard
                label="RMSSD"
                value="93"
                unit="ms"
                icon={fitnessAppIcon}
              />
              <MetricCard
                label="HRV SDNN"
                value="117"
                unit="ms"
                icon={fitnessAppIcon}
              />
            </div>
          </section>

          {/* Respiratory */}
          <section>
            <h2 className="font-semibold mb-3">Respiratory Parameters</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <MetricCard
                label="Respiratory Rate"
                value="16"
                unit="bpm"
                icon={lungsIcon}
              />
              <MetricCard
                label="SpO₂"
                value="98"
                unit="%"
                icon={oximeterIcon}
              />
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
