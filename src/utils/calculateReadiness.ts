export function calculateReadiness(user: any) {
  let score = 0;

  if (user.fullName) score += 5;
  if (user.college) score += 5;
  if (user.degree) score += 5;
  if (user.graduationYear) score += 5;

  if (user.skills) score += 20;
  if (user.projects) score += 20;

  const cgpa = Number(user.cgpa);

  if (cgpa >= 8) {
    score += 15;
  } else if (cgpa >= 7) {
    score += 10;
  }

  const studyHours = Number(user.studyHours);

  if (studyHours >= 4) {
    score += 15;
  } else if (studyHours >= 2) {
    score += 10;
  }

  if (user.targetRole) score += 5;
  if (user.dreamCompanies) score += 5;

  return Math.min(score, 100);
}