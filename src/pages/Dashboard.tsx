function Dashboard() {
  const userData = localStorage.getItem("careerpilot-user");

  const user = userData
    ? JSON.parse(userData)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black p-10 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">
          Welcome back,
          <span className="text-blue-400">
            {" "}
            {user?.fullName || "Student"} 👋
          </span>
        </h1>

        <p className="mt-3 text-gray-400">
          Here's your CareerPilot dashboard.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <h2 className="text-xl font-semibold text-blue-400">
              🎓 Education
            </h2>

            <p className="mt-4">
              <span className="font-semibold">
                College:
              </span>{" "}
              {user?.college || "Not provided"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Degree:
              </span>{" "}
              {user?.degree || "Not provided"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Graduation:
              </span>{" "}
              {user?.graduationYear || "Not provided"}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <h2 className="text-xl font-semibold text-blue-400">
              🚀 Career Goals
            </h2>

            <p className="mt-4">
              <span className="font-semibold">
                Target Role:
              </span>{" "}
              {user?.targetRole || "Not provided"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Dream Companies:
              </span>{" "}
              {user?.dreamCompanies || "Not provided"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Study Hours:
              </span>{" "}
              {user?.studyHours || "Not provided"}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:col-span-2">
            <h2 className="text-xl font-semibold text-blue-400">
              💻 Skills & Projects
            </h2>

            <p className="mt-4">
              <span className="font-semibold">
                Skills:
              </span>{" "}
              {user?.skills || "Not provided"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Projects:
              </span>{" "}
              {user?.projects || "Not provided"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                CGPA:
              </span>{" "}
              {user?.cgpa || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;