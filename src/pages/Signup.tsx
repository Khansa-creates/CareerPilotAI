import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.15)]">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            Create your account 🚀
          </h1>

          <p className="mt-3 text-gray-400">
            Start your journey with CareerPilot AI
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Khansa Firdouse"
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition-all hover:bg-blue-500"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;