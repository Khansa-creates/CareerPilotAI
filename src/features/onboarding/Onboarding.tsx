import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressBar from "./ProgressBar";

function Onboarding() {
  const [step, setStep] = useState(1);

const [formData, setFormData] = useState({
  fullName: "",
  college: "",
  degree: "",
  graduationYear: "",
  skills: "",
  cgpa: "",
  projects: "",
  dreamCompanies: "",
  targetRole: "",
  studyHours: "",
});

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white p-6">
      <div className="mx-auto max-w-3xl pt-16">

        <ProgressBar step={step} />

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl">

          {step === 1 && (
            <StepOne
              next={() => setStep(2)}
              formData={formData}
             setFormData={setFormData}
            />
          )}

          {step === 2 && (
            <StepTwo
              next={() => setStep(3)}
              back={() => setStep(1)}
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 3 && (
            <StepThree
              back={() => setStep(2)}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;