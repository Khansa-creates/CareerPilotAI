import { getSkillGap } from "../utils/getSkillGap";
import { getDailyMissions } from "../utils/getDailyMissions";
import { calculateReadiness } from "../utils/calculateReadiness";
import { skillInfo } from "../data/skillInfo";

function Dashboard() {
  const userData = localStorage.getItem("careerpilot-user");

  const user = userData
    ? JSON.parse(userData)
    : null;

  const readinessScore =
    calculateReadiness(user || {});

 const missions = getDailyMissions(
  user?.targetRole || ""
 );

 const skillGap =
  getSkillGap(
    user?.targetRole || "",
    user?.skills || ""
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold">
          Welcome back, {user?.fullName} 👋
        </h1>

        <p className="mt-4 text-gray-400">
          Here's your CareerPilot dashboard.
        </p>

        {/* Readiness Score */}
        <div className="mt-8 rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8">
          <p className="text-gray-400">
            Career Readiness Score
          </p>

          <h2 className="mt-3 text-6xl font-bold text-blue-400">
            {readinessScore}%
          </h2>

          <p className="mt-3 text-gray-400">
            Keep improving your profile to reach
            100%.
          </p>
        </div>

        {/* Suggestions */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold">
            Suggestions 🚀
          </h2>
          <ul className="mt-6 space-y-3 text-gray-300">
            {!user?.skills && (
               <li>• Add your technical skills.</li>
            )}

            {!user?.projects && (
               <li>• Build at least 2 projects.</li>
            )}

            {Number(user?.cgpa) < 8 && (
              <li>• Try improving your CGPA.</li>
            )}

            {Number(user?.studyHours) < 4 && (
               <li>• Increase study time.</li>
            )}

            {!user?.targetRole && (
               <li>• Set a target role.</li>
            )}

            {user?.skills &&
              user?.projects &&
              Number(user?.cgpa) >= 8 &&
              Number(user?.studyHours) >= 4 &&
             user?.targetRole && (
              <li className="text-green-400">
                🎉 Excellent profile! You're on the right track.
              </li>
            )}
       </ul>
               
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold">
            Today's Missions 🎯
          </h2>

          <div className="mt-6 space-y-4">
             {missions.map((mission) => (
               <div
                  key={mission}
                  className="flex items-center gap-3 rounded-xl bg-black/30 p-4"
                >
                  <input
                     type="checkbox"
                     className="h-5 w-5"
                  />

                  <p>{mission}</p>
             </div>
           ))}
       </div>
     </div>

     <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8">
       <h2 className="text-2xl font-bold">
          Skill Gap Analysis 🧠
      </h2>

       <p className="mt-2 text-gray-400">
          Skills recommended for your target role.
       </p>

      <div className="mt-6 space-y-3">
        {skillGap.length === 0 ? (
           <p className="text-green-400">
             🎉 You currently meet all the tracked
             skill requirements.
      </p>
    ) : (
      skillGap.map((skill) => (
        <div
          key={skill}
          className="rounded-xl bg-black/30 p-4"
        >
          <div
             key={skill}
             className="rounded-xl bg-black/30 p-5"
          >
             <h3 className="font-semibold text-lg">
               🚀 {skill}
             </h3>

              <p className="mt-2 text-gray-400">
                Level:
               {" "}
               {skillInfo[skill]?.level}
             </p>

              <p className="text-gray-400">
                 Estimated Time:
                 {" "}
                 {skillInfo[skill]?.duration}
             </p>

              <p className="text-blue-400">
                Resource:
                {" "}
               {skillInfo[skill]?.resource}
               </p>
          </div>
       </div>
      ))
    )}
  </div>
</div>

        {/* User Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h2 className="mb-6 text-3xl font-bold text-blue-400">
              🎓 Education
            </h2>

            <p className="mb-3">
              <strong>College:</strong>{" "}
              {user?.college || "Not provided"}
            </p>

            <p className="mb-3">
              <strong>Degree:</strong>{" "}
              {user?.degree || "Not provided"}
            </p>

            <p>
              <strong>Graduation:</strong>{" "}
              {user?.graduationYear ||
                "Not provided"}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <h2 className="mb-6 text-3xl font-bold text-blue-400">
              🚀 Career Goals
            </h2>

            <p className="mb-3">
              <strong>Target Role:</strong>{" "}
              {user?.targetRole ||
                "Not provided"}
            </p>

            <p className="mb-3">
              <strong>Dream Companies:</strong>{" "}
              {user?.dreamCompanies ||
                "Not provided"}
            </p>

            <p>
              <strong>Study Hours:</strong>{" "}
              {user?.studyHours ||
                "Not provided"}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:col-span-2">
            <h2 className="mb-6 text-3xl font-bold text-blue-400">
              💻 Skills & Projects
            </h2>

            <p className="mb-3">
              <strong>Skills:</strong>{" "}
              {user?.skills ||
                "Not provided"}
            </p>

            <p className="mb-3">
              <strong>Projects:</strong>{" "}
              {user?.projects ||
                "Not provided"}
            </p>

            <p>
              <strong>CGPA:</strong>{" "}
              {user?.cgpa ||
                "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
