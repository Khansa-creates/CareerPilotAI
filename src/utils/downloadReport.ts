import jsPDF from "jspdf";

export function downloadReport(
  atsScore: number,
  extractedSkills: string[],
  missingSkills: string[],
  recommendations: string[],
  suggestions: string[]
) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text(
    "CareerPilot Resume Report",
    20,
    y
  );

  y += 20;

  doc.setFontSize(14);
  doc.text(
    `ATS Score: ${atsScore}%`,
    20,
    y
  );

  y += 20;

  doc.text(
    "Skills Found:",
    20,
    y
  );

  y += 10;

  extractedSkills.forEach(
    (skill) => {
      doc.text(
        `• ${skill}`,
        30,
        y
      );
      y += 10;
    }
  );

  y += 10;

  doc.text(
    "Missing Skills:",
    20,
    y
  );

  y += 10;

  missingSkills.forEach(
    (skill) => {
      doc.text(
        `• ${skill}`,
        30,
        y
      );
      y += 10;
    }
  );

  y += 10;

  doc.text(
    "AI Recommendations:",
    20,
    y
  );

  y += 10;

  recommendations.forEach(
    (item) => {
      doc.text(
        `• ${item}`,
        30,
        y
      );
      y += 10;
    }
  );

  y += 10;

  doc.text(
    "Resume Suggestions:",
    20,
    y
  );

  y += 10;

  suggestions.forEach(
    (item) => {
      doc.text(
        `• ${item}`,
        30,
        y
      );
      y += 10;
    }
  );

  doc.save(
    "CareerPilot-Report.pdf"
  );
}