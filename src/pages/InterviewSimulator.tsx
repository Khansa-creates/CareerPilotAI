import { useState } from "react";
import { interviewQuestions }
from "./interviewQuestions";
import { scoreAnswer }
from "../utils/scoreAnswer";

function InterviewSimulator() {
  const [role, setRole] =
    useState("frontend");

  const [currentQuestion,
    setCurrentQuestion] =
    useState(0);

  const [answer, setAnswer] =
    useState("");

  const questions =
    interviewQuestions[
      role as keyof typeof interviewQuestions
    ];

    const score =
  scoreAnswer(answer);
  console.log(score);

  function nextQuestion() {
    setAnswer("");

    setCurrentQuestion(
      (prev) =>
        prev + 1 <
        questions.length
          ? prev + 1
          : 0
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black p-8 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-5xl font-bold">
          Interview Simulator 🎤
        </h1>

        <select
          value={role}
          onChange={(e) => {
            setRole(
              e.target.value
            );
            setCurrentQuestion(0);
            setAnswer("");
          }}
          className="mt-8 rounded-xl bg-slate-900 p-4"
        >
          <option value="frontend">
            Frontend Developer
          </option>

          <option value="dataAnalyst">
            Data Analyst
          </option>

          <option value="softwareDeveloper">
            Software Developer
          </option>
        </select>

        <div className="mt-10 rounded-xl bg-black/40 p-8">

          <h2 className="text-2xl font-bold">
            Question {currentQuestion + 1}
          </h2>

          <p className="mt-4 text-xl">
            {
              questions[
                currentQuestion
              ]
            }
          </p>

          <textarea
            value={answer}
            onChange={(e) =>
              setAnswer(
                e.target.value
              )
            }
            className="mt-8 h-40 w-full rounded-xl bg-slate-900 p-4"
            placeholder="Type your answer..."
          />

          {answer && (
            <p className="mt-4 text-green-400">
              Score: {score}/10
            </p>
           )}

          <button
            onClick={nextQuestion}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-4"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewSimulator;