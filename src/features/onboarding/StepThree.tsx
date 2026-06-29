import { useNavigate } from "react-router-dom";

type Props = {
  back: () => void;
  formData: any;
  setFormData: any;
};

function StepThree({
  back,
  formData,
  setFormData,
}: Props) {
  const navigate = useNavigate();

  console.log("StepThree formData:", formData);

  const handleFinish = () => {
    localStorage.setItem(
      "careerpilot-user",
      JSON.stringify(formData)
    );

    navigate("/dashboard");
  };

  return (
    <>
      <h1 className="text-4xl font-bold">
        Career Goals 🎯
      </h1>
       <div className="mt-10 space-y-5">
         <input
           placeholder="Dream Companies"
           value={formData.dreamCompanies}
           onChange={(e) =>
            setFormData({
            ...formData,
            dreamCompanies: e.target.value,
            })
        }
        className="w-full rounded-xl bg-black/40 p-4"
       />

       <input
         placeholder="Target Role"
         value={formData.targetRole}
         onChange={(e) =>
           setFormData({
           ...formData,
           targetRole: e.target.value,
           })
        }
        className="w-full rounded-xl bg-black/40 p-4"
       />

       <input
          placeholder="Study Hours Per Day"
          value={formData.studyHours}
          onChange={(e) =>
            setFormData({
            ...formData,
            studyHours: e.target.value,
            })
        }
        className="w-full rounded-xl bg-black/40 p-4"
       />
     </div>
      <div className="mt-10 flex gap-4">
        <button
          onClick={back}
          className="rounded-xl border border-white/20 px-8 py-4"
        >
          Back
        </button>

        <button
          onClick={handleFinish}
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
        >
          Finish 🚀
        </button>
      </div>
    </>
  );
}

export default StepThree;