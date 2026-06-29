type Props = {
  next: () => void;
  back: () => void;
};

function StepTwo({
  next,
  back,
}: Props) {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Skills & Projects
      </h1>

      <div className="mt-10 flex gap-4">
        <button
          onClick={back}
          className="rounded-xl border border-white/20 px-8 py-4"
        >
          Back
        </button>

        <button
          onClick={next}
          className="rounded-xl bg-blue-600 px-8 py-4"
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default StepTwo;