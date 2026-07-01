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
  {
    id: "excel-1",
    title: "Learn Excel Basics",
  },
  {
    id: "excel-2",
    title:
      "Practice formulas and pivot tables",
  },
]
      
    });
  }

  if (
    missingSkills.includes("sql")
  ) {
    roadmap.push({
      week: "Week 2",
      tasks: [
        {
            id: "sql-1",
            title: "Practice 20 SQL queries",
        },
        {
           id: "sql-2",
           title: "Learn joins and aggregations",
        }
      ],
    });
  }

  if (
    missingSkills.includes("python")
  ) {
    roadmap.push({
      week: "Week 3",
      tasks: [
      {
        id: "python-1",
        title: "Learn Python fundamentals",
      },
      {
        id: "python-2",
        title: "Build a mini data project",
      }
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
        {
            id: "power bi-1",
            title: "Learn Power BI",
        },
        {
            id: "powerbi-2",
            title: "Build an interactive dashboard",
        }
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
        {
            id: "statistics-1",
            title: "Study statistics basics",
        },
        {
            id: "statistics-2",
            title: "Learn probability and distributions",
        }
      ],
    });
  }

  return roadmap;
}