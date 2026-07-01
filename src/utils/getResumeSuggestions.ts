export function getResumeSuggestions(
  text: string
) {
  const lower = text.toLowerCase();

  const suggestions = [];

  if (!lower.includes("project")) {
    suggestions.push(
      "Add a Projects section."
    );
  }

  if (
    !lower.includes("certification") &&
    !lower.includes("certificate")
  ) {
    suggestions.push(
      "Add Certifications."
    );
  }

  if (!lower.includes("skill")) {
    suggestions.push(
      "Add a Skills section."
    );
  }

  if (
    !lower.includes("summary") &&
    !lower.includes("objective")
  ) {
    suggestions.push(
      "Add a Professional Summary."
    );
  }

  if (text.length < 500) {
    suggestions.push(
      "Your resume seems too short. Add more details about your projects and experience."
    );
  }

  return suggestions;
}