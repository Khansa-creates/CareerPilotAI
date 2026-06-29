type Props = {
  next: () => void;
  back: () => void;
  formData: any;
  setFormData: any;
};

function StepTwo({
  next,
  back,
  formData,
  setFormData,
}: Props) {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Skills & Experience 💻
      </h1>

      <div className="mt-10 space-y-5">
        <input
          placeholder="Skills (HTML, CSS, JavaScript...)"
          value={formData.skills}
          onChange={(e) =>
            setFormData({
              ...formData,
              skills: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black/40 p-4"
        />

        <input
          placeholder="CGPA"
          value={formData.cgpa}
          onChange={(e) =>
            setFormData({
              ...formData,
              cgpa: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black/40 p-4"
        />

        <textarea
          placeholder="Projects"
          value={formData.projects}
          onChange={(e) =>
            setFormData({
              ...formData,
              projects: e.target.value,
            })
          }
          className="h-32 w-full rounded-xl bg-black/40 p-4"
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
          onClick={next}
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold"
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default StepTwo;