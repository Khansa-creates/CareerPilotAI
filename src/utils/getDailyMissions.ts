import { roleMissions }
  from "../data/missions";

export function getDailyMissions(
  role: string
) {
  if (!role) {
    return [
      "Set your target role to get personalized missions.",
    ];
  }

  return (
    roleMissions[
      role.toLowerCase()
    ] || [
      "Keep learning and building projects today.",
    ]
  );
}