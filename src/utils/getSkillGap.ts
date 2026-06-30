import { roleSkills }
  from "../data/roleSkills";

export function getSkillGap(
  role: string,
  skills: string
) {
  const required =
    roleSkills[
      role.toLowerCase()
    ];

  if (!required) {
    return [];
  }

  const userSkills =
    skills
      .toLowerCase()
      .split(",")
      .map((skill) =>
        skill.trim()
      );

  return required.filter(
    (skill) =>
      !userSkills.includes(skill)
  );
}