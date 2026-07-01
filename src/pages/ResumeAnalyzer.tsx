import { useState } from "react";
import { extractPdfText } from "../utils/extractPdfText";
import { extractSkills } from "../utils/extractSkills";
import { roleData } from "../data/roleData";
import { calculateATS } from "../utils/calculateATS";
import { getMissingSkills } from "../utils/getMissingSkills";
import { getCareerAdvice } from "../utils/getCareerAdvice";
import { getResumeSuggestions } from "../utils/getResumeSuggestions";
import { downloadReport } from "../utils/downloadReport";
import { generateRoadmap } from "../utils/generateRoadmap";
import { checkResumeSections } from "../utils/checkResumeSections";
import { getCompanyMatches } from "../utils/getCompanyMatches";

function ResumeAnalyzer() {
  const [fileName, setFileName] =
    useState("");

  const [uploading, setUploading] =
    useState(false);

  const [resumeText, setResumeText] =
    useState("");

    const [
  completedTasks,
  setCompletedTasks,
] = useState<string[]>(() => {
  const saved =
    localStorage.getItem(
      "careerpilot-progress"
    );

  return saved
    ? JSON.parse(saved)
    : [];
});

  const extractedSkills =
    extractSkills(resumeText);

  const userData =
    localStorage.getItem(
      "careerpilot-user"
    );

  const user = userData
    ? JSON.parse(userData)
    : null;

  const targetRole =
    user?.targetRole?.toLowerCase() ||
    "";

  const requiredSkills =
    roleData[
      targetRole as keyof typeof roleData
    ]?.skills || [];

  const suggestedProjects =
    roleData[
      targetRole as keyof typeof roleData 
    ]?.projects || [];

  const missingSkills =
    getMissingSkills(
      extractedSkills,
      requiredSkills
    );

  const atsScore =
    calculateATS(
      extractedSkills,
      requiredSkills
    );

    const recommendations =
   getCareerAdvice(
    targetRole,
    missingSkills,
    atsScore
   );

   const suggestions =
   getResumeSuggestions(
    resumeText
   );

   function toggleTask(
  taskId: string
) {
  let updated;

  if (
    completedTasks.includes(
      taskId
    )
  ) {
    updated =
      completedTasks.filter(
        (id) => id !== taskId
      );
  } else {
    updated = [
      ...completedTasks,
      taskId,
    ];
  }

  setCompletedTasks(updated);

  localStorage.setItem(
    "careerpilot-progress",
    JSON.stringify(updated)
  );
}

   const roadmap =
   generateRoadmap(
    missingSkills
   );

   const totalTasks =
  roadmap.flatMap(
    (week) => week.tasks
  ).length;

const completedCount =
  roadmap
    .flatMap(
      (week) => week.tasks
    )
    .filter((task) =>
      completedTasks.includes(
        task.id
      )
    ).length;

const progress =
  totalTasks === 0
    ? 0
    : Math.round(
        (completedCount /
          totalTasks) *
          100
      );

   const sections =
   checkResumeSections(
    resumeText
  );

   const companyMatches =
   getCompanyMatches(
    extractedSkills,
    atsScore,
    sections
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">
          Resume Analyzer 📄
        </h1>

        <p className="mt-4 text-gray-400">
          Upload your resume and get
          personalized feedback.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-10">
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 p-12 transition hover:border-blue-500">
            <p className="text-xl font-semibold">
              Upload Resume PDF
            </p>

            <p className="mt-2 text-gray-400">
              Click to select a file
            </p>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={async (e) => {
                const file =
                  e.target.files?.[0];

                if (!file) return;

                setFileName(file.name);
                setUploading(true);

                try {
                  const text =
                    await extractPdfText(
                      file
                    );

                  setResumeText(text);
                } catch (error) {
                  console.error(error);
                }

                setUploading(false);
              }}
            />
          </label>

          {fileName && (
            <div className="mt-6 rounded-xl bg-black/40 p-4">
              ✅ Uploaded: {fileName}

              {uploading && (
                <p className="mt-4 text-blue-400">
                  Extracting text...
                </p>
              )}
            </div>
          )}

          {resumeText && (
            <div className="mt-8 rounded-xl bg-black/40 p-6">
              <h2 className="mb-4 text-2xl font-bold">
                Extracted Text 📄
              </h2>

              <pre className="whitespace-pre-wrap text-gray-300">
                {resumeText}
              </pre>
            </div>
          )}

          {resumeText && extractedSkills.length > 0 && (
            <div className="mt-8 rounded-xl bg-black/40 p-6">
              <h2 className="mb-4 text-2xl font-bold">
                Skills Found 🚀
              </h2>

              <div className="flex flex-wrap gap-3">
                {extractedSkills.map(
                  (skill) => (
                    <div
                      key={skill}
                      className="rounded-full bg-blue-600 px-4 py-2"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {resumeText && (
            <div className="mt-8 rounded-xl bg-black/40 p-6">
              <h2 className="text-2xl font-bold">
                Resume Sections 📑
              </h2>

                  <div className="mt-4 space-y-3">
                    <div>
                       {sections.education
                         ? "✅"
                         : "❌"}{" "}
                        Education
                    </div>

                     <div>
                      {sections.skills
                         ? "✅"
                         : "❌"}{" "}
                       Skills
                     </div>

                     <div>
                       {sections.projects
                         ? "✅"
                         : "❌"}{" "}
                       Projects
                     </div>

                      <div>
                        {sections.experience
                          ? "✅"
                          : "❌"}{" "}
                        Experience
                      </div>

                       <div>
                          {sections.certifications
                             ? "✅"
                             : "❌"}{" "}
                           Certifications
                       </div>

                        <div>
                          {sections.summary
                           ? "✅"
                           : "❌"}{" "}
                         Professional Summary
                       </div>
                   </div>
                </div>
              )}

           {resumeText && requiredSkills.length > 0 && (
            <div className="mt-8 rounded-xl bg-black/40 p-6">
              <h2 className="text-2xl font-bold">
                ATS Score 🎯
              </h2>

              <p className="mt-4 text-5xl font-bold text-blue-400">
                {atsScore}%
              </p>
            </div>
          )}

          {resumeText && missingSkills.length > 0 && (
            <div className="mt-8 rounded-xl bg-black/40 p-6">
              <h2 className="text-2xl font-bold">
                Missing Skills 📚
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {missingSkills.map(
                  (skill) => (
                    <div
                      key={skill}
                      className="rounded-full bg-red-600 px-4 py-2"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {resumeText && recommendations.length > 0 && (
             <div className="mt-8 rounded-xl bg-black/40 p-6">
               <h2 className="text-2xl font-bold">
                  AI Career Coach 🤖
              </h2>

              <div className="mt-4 space-y-3">
                {recommendations.map(
                  (item, index) => (
                <div
                    key={index}
                  className="rounded-lg bg-slate-900 p-4"
                >
                   🚀 {item}
                </div>
                )
            )}
        </div>
     </div>
     )}

     {resumeText &&
      suggestions.length > 0 && (
         <div className="mt-8 rounded-xl bg-black/40 p-6">
            <h2 className="text-2xl font-bold">
              Resume Suggestions 💡
            </h2>

             <div className="mt-4 space-y-3">
               {suggestions.map(
                 (item, index) => (
                 <div
                   key={index}
                   className="rounded-lg bg-slate-900 p-4"
                  >
                    ❌ {item}
                  </div>
                )
              )}
           </div>
         </div>
        )}

        {resumeText &&
          roadmap.length > 0 && (
           <div className="mt-8 rounded-xl bg-black/40 p-6">
             <h2 className="text-2xl font-bold">
                Learning Roadmap 🗺️
             </h2>

             <div className="mb-6 mt-4">
  <div className="flex justify-between">
    <span>
      Progress
    </span>

    <span>
      {progress}%
    </span>
  </div>

  <div className="mt-2 h-3 rounded-full bg-slate-700">
    <div
      className="h-3 rounded-full bg-green-500"
      style={{
        width: `${progress}%`,
      }}
    />
  </div>
</div>

             <div className="mt-6 space-y-6">
               {roadmap.map(
                (item, index) => (
                  <div
                     key={index}
                     className="rounded-xl bg-slate-900 p-5"
                    >
                      <h3 className="text-xl font-semibold text-blue-400">
                       {item.week}
                      </h3>

                       <ul className="mt-3 space-y-2">
                       {item.tasks.map(
  (task) => (
    <div
      key={task.id}
      className="flex items-center gap-3"
    >
      <input
        type="checkbox"
        checked={completedTasks.includes(
          task.id
        )}
        onChange={() =>
          toggleTask(
            task.id
          )
        }
      />

      <span>
        {task.title}
      </span>
    </div>
  )
)}
                      </ul>
                   </div>
                  )
               )}
          </div>
       </div>
      )}

      {resumeText &&
        suggestedProjects.length > 0 && (
         <div className="mt-8 rounded-xl bg-black/40 p-6">
          <h2 className="text-2xl font-bold">
            Recommended Projects 💼
         </h2>

          <div className="mt-4 space-y-3">
            {suggestedProjects.map(
             (project) => (
               <div
                 key={project}
                 className="rounded-lg bg-slate-900 p-4"
                >
                  📌 {project}
               </div>
              )
            )}
         </div>
        </div>
      )}

      {resumeText && (
        <div className="mt-8 rounded-xl bg-black/40 p-6">
           <h2 className="text-2xl font-bold">
              Company Matches 🏢
           </h2>

             <div className="mt-6 space-y-4">
               {companyMatches.map(
                 (company) => (
                   <div
                      key={company.name}
                      className="rounded-xl bg-slate-900 p-4"
                    >
                    <div className="flex items-center justify-between">
                       <h3 className="font-semibold">
                         {company.name}
                       </h3>

                       <span className="text-blue-400">
                         {company.score}%
                       </span>
                     </div>

                      <div className="mt-3 h-3 rounded-full bg-slate-700">
                         <div
                            className="h-3 rounded-full bg-blue-500"
                           style={{
                             width: `${company.score}%`,
                           }}
                         />
                      </div>
                      {company.missingSkills.length >
                        0 && (
                       <div className="mt-4">
                        <p className="text-sm text-gray-400">
                          Missing:
                       </p>

                       <div className="mt-2 flex flex-wrap gap-2">
                         {company.missingSkills.map(
                            (skill: string) => (
                              <span
                                key={skill}
                                className="rounded-full bg-red-600 px-3 py-1 text-sm"
                              >
                                {skill}
                              </span>
                            )
                          )}
                       </div>
                     </div>
                    )}
                   </div>
                  )
                )}
             </div>
           </div>
          )}

        {resumeText && (
           <div className="mt-8">
             <button
               onClick={() =>
                downloadReport(
                  atsScore,
                  extractedSkills,
                  missingSkills,
                  recommendations,
                  suggestions
                )
              }
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
            >
              Download Report 📄
            </button>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;