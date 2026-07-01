export function generateRoadmap(
  missingSkills: string[]
) {
  const roadmap = [];

  if (
    missingSkills.includes("excel")
  ) {
    roadmap.push({
      week: "Week 1",
      tasks: [
        "Learn Excel Basics",
        "Practice formulas and pivot tables",
      ],
    });
  }

  if (
    missingSkills.includes("sql")
  ) {
    roadmap.push({
      week: "Week 2",
      tasks: [
        "Practice 20 SQL queries",
        "Learn joins and aggregations",
      ],
    });
  }

  if (
    missingSkills.includes("python")
  ) {
    roadmap.push({
      week: "Week 3",
      tasks: [
        "Learn Python fundamentals",
        "Build a mini data project",
      ],
    });
  }

  if (
    missingSkills.includes(
      "power bi"
    )
  ) {
    roadmap.push({
      week: "Week 4",
      tasks: [
        "Learn Power BI",
        "Build an interactive dashboard",
      ],
    });
  }

  if (
    missingSkills.includes(
      "statistics"
    )
  ) {
    roadmap.push({
      week: "Week 5",
      tasks: [
        "Study statistics basics",
        "Learn probability and distributions",
      ],
    });
  }

  return roadmap;
}