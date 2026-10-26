export type Topic = { slug: string; title: string; level: "Beginner" | "Intermediate" | "Advanced"; group: string };
export const topics: Topic[] = [
 { slug: "nouns", title: "Nouns and their types", level: "Beginner", group: "Parts of speech" },
 { slug: "subject-verb-agreement", title: "Subject–verb agreement", level: "Beginner", group: "Verb grammar" },
 { slug: "simple-present", title: "Simple present tense", level: "Beginner", group: "Verb grammar" },
 { slug: "words-phrases-clauses", title: "Words, phrases, clauses and sentences", level: "Beginner", group: "Foundations" },
 { slug: "pronouns", title: "Pronouns", level: "Beginner", group: "Parts of speech" },
 { slug: "verbs", title: "Main, auxiliary and modal verbs", level: "Beginner", group: "Parts of speech" },
 { slug: "adjectives", title: "Adjectives and comparison", level: "Beginner", group: "Parts of speech" },
 { slug: "articles", title: "Articles and determiners", level: "Beginner", group: "Parts of speech" },
 { slug: "twelve-tenses", title: "The twelve tense forms", level: "Intermediate", group: "Verb grammar" },
 { slug: "passive-voice", title: "Active and passive voice", level: "Intermediate", group: "Verb grammar" },
 { slug: "reported-speech", title: "Direct and reported speech", level: "Intermediate", group: "Sentence structure" },
 { slug: "relative-clauses", title: "Relative clauses", level: "Intermediate", group: "Sentence structure" },
 { slug: "conditionals", title: "Conditionals, including mixed", level: "Advanced", group: "Sentence structure" },
 { slug: "inversion", title: "Inversion and emphasis", level: "Advanced", group: "Sentence structure" },
 { slug: "dangling-modifiers", title: "Misplaced and dangling modifiers", level: "Advanced", group: "Accuracy" },
];
