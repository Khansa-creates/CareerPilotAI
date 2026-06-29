import Navbar from "./components/layout/Navbar";
import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-20 bg-gradient-to-b from-black via-slate-950 to-black text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 Now Building CareerPilot AI
          </div>

          <h1 className="mb-6 max-w-6xl text-6xl font-bold tracking-tight">
            Your AI mentor from your
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              first semester to your first offer letter.
            </span>
          </h1>

          <p className="mb-10 max-w-3xl text-xl text-gray-400">
            CareerPilot AI helps students stop guessing and start building
            their dream careers with personalized roadmaps, interview prep,
            skill tracking, and AI-powered guidance.
          </p>

          <div className="flex gap-4">
            <Button>Get Started</Button>

            <Button variant="secondary">
              Learn More
            </Button>
          </div>
          <div className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950 p-8 backdrop-blur-xl">
  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-2xl bg-black/40 p-6">
      <p className="text-gray-400">Readiness</p>
      <h2 className="mt-2 text-4xl font-bold text-blue-400">
        78%
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        +6% this week
      </p>
    </div>

    <div className="rounded-2xl bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border hover:border-blue-500/20">
      <p className="text-gray-400">Applications</p>
      <h2 className="mt-2 text-4xl font-bold text-white">
        42
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        8 this week
      </p>
    </div>

    <div className="rounded-2xl bg-black/40 p-6">
      <p className="text-gray-400">Interview Prep</p>
      <h2 className="mt-2 text-4xl font-bold text-white">
        12h
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Streak 27d
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  );
}

export default App;