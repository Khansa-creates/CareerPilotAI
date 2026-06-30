import { useNavigate } from "react-router-dom";

type FeatureCardProps = {
  title: string;
  description: string;
  link?: string;
};

function FeatureCard({
  title,
  description,
  link,
}: FeatureCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (link) navigate(link);
      }}
      className="cursor-pointer rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
    >
      <h3 className="mb-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;