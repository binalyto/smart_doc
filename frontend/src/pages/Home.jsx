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
              AyurCare Wellness Center
            </h1>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
              AyurCare Wellness Center is a modern integrative healthcare
              facility focused on preventive wellness and holistic health
              assessment. We combine traditional medical principles with digital
              screening tools to help individuals better understand their health
              indicators and make informed wellness decisions. Our services are
              non-invasive, patient-friendly, and designed to support early
              health awareness and long-term well-being.
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
