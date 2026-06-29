function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          🚀 Now Building CareerPilot AI
        </div>

        <h1 className="mb-6 max-w-5xl text-6xl font-bold tracking-tight">
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
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:border-gray-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;