export function checkResumeSections(
  text: string
) {
  const lower =
    text.toLowerCase();

  return {
    education:
      lower.includes("education"),

    skills:
      lower.includes("skills"),

    projects:
      lower.includes("project"),

    experience:
      lower.includes("experience"),

    certifications:
      lower.includes("certification") ||
      lower.includes("certificate"),

    summary:
      lower.includes("summary") ||
      lower.includes("objective"),
  };
}