import MainLayout from "../layouts/MainLayout";
import ScanCard from "../components/ScanCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex justify-center px-6 py-10">
        {/* Page container */}
        <div className="w-full max-w-5xl space-y-12">
          {/* Intro Section */}
          <section className="text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Arya Vaidya Sala, Kottakkal
            </h1>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
              Arya Vaidya Sala (AVS) is a 120+ year old charitable institution
              dedicated to the practice and propagation of Ayurveda — the
              ancient healthcare system of India. AVS offers authentic Ayurvedic
              treatments, therapies, and classical medicines to patients from
              India and across the world.
            </p>
          </section>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="h-px w-24 bg-gray-300" />
          </div>

          {/* Scan Cards */}
          <section className="space-y-6">
            <h2 className="text-lg sm:text-xl font-medium text-center">
              Select a Scan Test
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ScanCard
                title="Face Scan Test"
                description="Analyze facial indicators for health insights"
                onClick={() => navigate("/scan/face")}
              />

              <ScanCard
                title="Eye Scan Test"
                description="Evaluate eye patterns and indicators"
                disabled
              />

              <ScanCard
                title="Posture Scan Test"
                description="Assess posture alignment and balance"
                disabled
              />
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
