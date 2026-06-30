export function getCareerAdvice(
  role: string,
  missingSkills: string[],
  atsScore: number
) {
  const advice = [];

  if (atsScore < 40) {
    advice.push(
      "Your profile needs significant improvement for this role."
    );
  } else if (atsScore < 70) {
    advice.push(
      "You are on the right track but still missing important skills."
    );
  } else {
    advice.push(
      "Your profile looks strong. Focus on projects and interview preparation."
    );
  }

  missingSkills.forEach((skill) => {
    advice.push(`Learn ${skill}.`);
  });

  if (
    role === "data analyst"
  ) {
    advice.push(
      "Build an Excel dashboard project."
    );
    advice.push(
      "Create a Power BI portfolio project."
    );
    advice.push(
      "Practice SQL queries every day."
    );
  }

  if (
    role === "software developer"
  ) {
    advice.push(
      "Build two full-stack projects."
    );
    advice.push(
      "Practice Data Structures and Algorithms."
    );
    advice.push(
      "Strengthen your Git and GitHub skills."
    );
  }

  if (
    role === "frontend developer"
  ) {
    advice.push(
      "Build responsive React projects."
    );
    advice.push(
      "Learn TypeScript."
    );
    advice.push(
      "Create a portfolio website."
    );
  }

  return advice;
}