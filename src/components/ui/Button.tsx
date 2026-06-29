import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white"
      : "border border-gray-700 hover:border-gray-500 text-white";

  return (
    <button
      className={`rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;