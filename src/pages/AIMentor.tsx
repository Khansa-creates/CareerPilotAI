import { useState } from "react";

function AIMentor() {
  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  function askMentor() {
    const q =
      question.toLowerCase();

    if (
      q.includes(
        "data analyst"
      )
    ) {
      setAnswer(
        `1. Learn Excel
2. Learn SQL
3. Learn Python
4. Learn Power BI
5. Build 3 projects
6. Practice aptitude and communication skills`
      );
    } else if (
      q.includes(
        "frontend"
      )
    ) {
      setAnswer(
        `1. Master HTML/CSS
2. Learn JavaScript deeply
3. Learn React
4. Build projects
5. Create a portfolio website`
      );
    } else if (
      q.includes(
        "software developer"
      )
    ) {
      setAnswer(
        `1. Practice DSA
2. Build full-stack projects
3. Learn Git and GitHub
4. Practice aptitude
5. Prepare for interviews`
      );
    } else {
      setAnswer(
        `I'm still learning. Try asking about careers like Data Analyst, Frontend Developer, or Software Developer.`
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">
          AI Mentor 🤖
        </h1>

        <p className="mt-4 text-gray-400">
          Ask career questions and get guidance.
        </p>

        <textarea
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
          className="mt-10 h-40 w-full rounded-xl bg-slate-900 p-4"
          placeholder="How do I become a Data Analyst?"
        />

        <button
          onClick={askMentor}
          className="mt-6 rounded-xl bg-blue-600 px-8 py-4"
        >
          Ask AI Mentor
        </button>

        {answer && (
          <div className="mt-8 rounded-xl bg-slate-900 p-6 whitespace-pre-line">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIMentor;