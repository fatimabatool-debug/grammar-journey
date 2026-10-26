export type Step = { guide: string; replies: { text: string; ok: boolean; fix?: string; why: string }[] };
export const scenarios: { id: string; title: string; steps: Step[] }[] = [
 { id: "shop", title: "At the shop", steps: [
  { guide: "Welcome! What does your brother like to eat?", replies: [{ text: "He likes pizza.", ok: true, why: "Correct: he + likes (-s for third person)." }, { text: "He like pizza.", ok: false, fix: "He likes pizza.", why: "Third person singular needs -s in the simple present." }] },
  { guide: "Do your parents shop here often?", replies: [{ text: "They shop here on Sundays.", ok: true, why: "Correct: they + base verb." }, { text: "They shops here on Sundays.", ok: false, fix: "They shop here on Sundays.", why: "Plural subject takes the base verb." }] }] },
 { id: "school", title: "At school", steps: [
  { guide: "Is everyone ready for the test?", replies: [{ text: "Yes, everyone is ready.", ok: true, why: "Everyone is singular, so it takes is." }, { text: "Yes, everyone are ready.", ok: false, fix: "Yes, everyone is ready.", why: "Everyone takes a singular verb." }] }] },
];
