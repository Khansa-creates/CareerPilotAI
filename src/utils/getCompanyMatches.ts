import { companyData }
from "../data/companyData";

export function getCompanyMatches(
  extractedSkills: string[],
  atsScore: number,
  sections: {
    education: boolean;
    skills: boolean;
    projects: boolean;
    experience: boolean;
    certifications: boolean;
    summary: boolean;
  }
) {
  return companyData
    .map((company) => {
      const matchedSkills =
        company.skills.filter(
          (skill) =>
            extractedSkills.includes(
              skill
            )
        );

      const skillScore =
        (matchedSkills.length /
          company.skills.length) *
        100;

      const sectionCount = [
        sections.education,
        sections.skills,
        sections.projects,
        sections.experience,
        sections.certifications,
        sections.summary,
      ].filter(Boolean).length;

      const sectionScore =
        (sectionCount / 6) * 100;

      let finalScore =
        skillScore * 0.5 +
        atsScore * 0.2 +
        sectionScore * 0.3;

      if (
        company.difficulty ===
        "medium"
      ) {
        finalScore *= 0.85;
      }

      if (
        company.difficulty ===
        "hard"
      ) {
        finalScore *= 0.65;
      }

      return {
        ...company,
        score:
          Math.round(finalScore),
        missingSkills:
          company.skills.filter(
            (skill) =>
              !extractedSkills.includes(
                skill
              )
          ),
      };
    })
    .sort(
      (a, b) =>
        b.score - a.score
    );
}