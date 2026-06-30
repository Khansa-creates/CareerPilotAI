const knownSkills = [
  "html",
  "css",
  "js",
  "javascript",
  "react",
  "typescript",
  "java",
  "python",
  "sql",
  "mongodb",
  "node",
  "express",
  "git",
  "excel",
  "power bi",
  "c",
  "c++",
];

export function extractSkills(
  text: string
) {
  const lower = text.toLowerCase();

  return knownSkills.filter(
    (skill) => {
      const escapedSkill =
        skill.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );

      const regex = new RegExp(
        `\\b${escapedSkill}\\b`,
        "i"
      );

      return regex.test(lower);
    }
  );
}