type Props = {
  step: number;
};

function ProgressBar({ step }: Props) {
  return (
    <>
      <p className="mb-4 text-center text-gray-400">
        Step {step} of 3
      </p>

      <div className="h-3 rounded-full bg-slate-800">
        <div
          className="h-3 rounded-full bg-blue-500 transition-all"
          style={{
            width: `${(step / 3) * 100}%`,
          }}
        />
      </div>
    </>
  );
}

export default ProgressBar;