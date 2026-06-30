export function calculateATS(
  foundSkills: string[],
  requiredSkills: string[]
) {
  if (requiredSkills.length === 0)
    return 0;

  const matched =
    requiredSkills.filter(
      (skill) =>
        foundSkills.includes(skill)
    );

  return Math.round(
    (matched.length /
      requiredSkills.length) *
      100
  );
}