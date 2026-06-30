export function getMissingSkills(
  foundSkills: string[],
  requiredSkills: string[]
) {
  return requiredSkills.filter(
    (skill) =>
      !foundSkills.includes(skill)
  );
}