type Props = {
  back: () => void;
};

function StepThree({
  back,
}: Props) {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Career Goals 🎯
      </h1>

      <div className="mt-10">
        <button
          onClick={back}
          className="rounded-xl border border-white/20 px-8 py-4"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default StepThree;