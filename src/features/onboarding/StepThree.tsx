import { useNavigate } from "react-router-dom";

type Props = {
  back: () => void;
  formData: any;
};

function StepThree({
  back,
  formData,
}: Props) {
  const navigate = useNavigate();

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