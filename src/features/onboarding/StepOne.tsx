type Props = {
  next: () => void;
  formData: any;
  setFormData: any;
};

function StepOne({ next,
  formData,
  setFormData, }: Props) {
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        Tell us about yourself 👋
      </h1>

      <div className="space-y-5">
        <input
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
             setFormData({
                ...formData,
                fullName: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black/40 p-4"
        />

        <input
          placeholder="College Name"
          value={formData.college}
          onChange={(e) =>
            setFormData({
            ...formData,
            college: e.target.value,
           })
        }
          className="w-full rounded-xl bg-black/40 p-4"
        />

        <input
          placeholder="Degree"
          value={formData.degree}
          onChange={(e) =>
            setFormData({
            ...formData,
            degree: e.target.value,
            })
        }
          className="w-full rounded-xl bg-black/40 p-4"
        />

        <input
          placeholder="Graduation Year"
          value={formData.graduationYear}
          onChange={(e) =>
            setFormData({
            ...formData,
            graduationYear: e.target.value,
           })
        }
          className="w-full rounded-xl bg-black/40 p-4"
        />
      </div>

      <button
        onClick={next}
        className="mt-10 rounded-xl bg-blue-600 px-8 py-4"
      >
        Continue
      </button>
    </>
  );
}

export default StepOne;