export type Story = { slug: string; title: string; level: string; minutes: number; tags: string[]; parts: (string | { t: string; note: string })[]; q: { q: string; options: string[]; answer: string; why: string }; task: string };
export const stories: Story[] = [
{ slug: "lost-umbrella", title: "The Lost Umbrella", level: "Beginner", minutes: 2, tags: ["Nouns", "Subject–verb agreement"],
 parts: ["On a rainy Monday, ", { t: "Sana", note: "Proper noun: names one particular person." }, " lost her umbrella at the station. A kind guard ", { t: "gave", note: "Past tense of give (irregular verb)." }, " her some ", { t: "advice", note: "Uncountable noun: no plural form." }, ". The ", { t: "team is", note: "Collective noun takes a singular verb." }, " looking for it now."],
 q: { q: "Where did Sana lose her umbrella?", options: ["At school", "At the station", "On a bus"], answer: "At the station", why: "The story says she lost it at the station." }, task: "Continue the story in three sentences. Use one proper noun." },
{ slug: "rafi-morning", title: "Rafi's Morning", level: "Beginner", minutes: 2, tags: ["Simple present"],
 parts: ["Rafi ", { t: "wakes", note: "He/she/it adds -s in the simple present." }, " at six. He ", { t: "washes", note: "Verbs ending -sh add -es." }, " his face and ", { t: "goes", note: "go becomes goes." }, " out. His sister ", { t: "does not wake", note: "does not + base verb." }, " early."],
 q: { q: "Who does not wake early?", options: ["Rafi", "His sister", "The guard"], answer: "His sister", why: "The last sentence says his sister does not wake early." }, task: "Rewrite the story about your own morning." },
];
