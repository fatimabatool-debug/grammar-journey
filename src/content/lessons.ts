export type Exercise = { id: string; type: "mcq" | "fill" | "correct" | "rearrange"; prompt: string; options?: string[]; answers: string[]; hint: string; explanation: string };
export type Lesson = {
 slug: string; objective: string; definition: string; explanation: string; rules: string[];
 examples: { text: string; note: string }[]; compare: { wrong: string; right: string; why: string }[]; mistakes: string[];
 exercises: Exercise[]; tasks: string[]; story: { title: string; text: string }; summary: string; next?: string;
};
export const lessons: Lesson[] = [
{ slug: "nouns", objective: "Recognise nouns and sort them into common, proper, countable, uncountable and collective types.",
 definition: "A noun is a word that names a person, place, thing or idea.",
 explanation: "Nouns can be the subject of a sentence (who or what does something) or the object (who or what receives the action). A common noun names any member of a group (city). A proper noun names one particular thing and starts with a capital letter (Lahore). Countable nouns can be counted (two books). Uncountable nouns cannot (water, advice). A collective noun names a group (team).",
 rules: ["Common noun: a general name, e.g. girl, river.", "Proper noun: a special name with a capital letter, e.g. Ayesha, Ravi.", "Uncountable nouns take no plural -s: advice, not advices.", "Use 'much' with uncountable and 'many' with countable nouns."],
 examples: [{ text: "The children are playing in the garden.", note: "children and garden are common nouns; children is the subject." }, { text: "Ayesha visited Lahore.", note: "Ayesha and Lahore are proper nouns." }, { text: "The team is ready.", note: "team is a collective noun." }],
 compare: [{ wrong: "She gave me many advices.", right: "She gave me a lot of advice.", why: "Advice is uncountable, so it has no plural and cannot follow 'many'." }],
 mistakes: ["Forgetting capital letters on proper nouns.", "Making uncountable nouns plural (informations, furnitures).", "Exception: 'water' becomes countable in 'two waters' when it means 'two glasses of water' in a café."],
 exercises: [
  { id: "n1", type: "mcq", prompt: "Which word is a proper noun? river, Indus, boy, city", options: ["river", "Indus", "boy", "city"], answers: ["Indus"], hint: "It names one particular river and starts with a capital.", explanation: "Indus names one specific river, so it is a proper noun." },
  { id: "n2", type: "mcq", prompt: "Which noun is uncountable?", options: ["book", "chair", "advice", "student"], answers: ["advice"], hint: "Can you say 'two ___s'?", explanation: "We do not say 'two advices'; advice is uncountable." },
  { id: "n3", type: "fill", prompt: "Complete: She gave me a lot of ____ (advice / advices).", answers: ["advice"], hint: "Uncountable nouns have no plural.", explanation: "Advice is uncountable, so the singular form is used." },
  { id: "n4", type: "correct", prompt: "Correct the sentence: I need some informations.", answers: ["I need some information"], hint: "Information is uncountable.", explanation: "Information has no plural form." },
  { id: "n5", type: "rearrange", prompt: "Put in order: garden / the / in / children / the / play", answers: ["The children play in the garden"], hint: "Start with the subject.", explanation: "Subject (The children) + verb (play) + place (in the garden)." }],
 tasks: ["Write three sentences, each with a proper noun.", "List five uncountable nouns from your kitchen."],
 story: { title: "The Lost Umbrella", text: "On a rainy Monday, Sana lost her umbrella at the station in Karachi. A kind guard gave her some advice: ask the lost-property team. The team found it within an hour." },
 summary: "Nouns name people, places, things and ideas. Watch capitals and countability.", next: "subject-verb-agreement" },
{ slug: "subject-verb-agreement", objective: "Make the verb agree with its subject in number.",
 definition: "Subject–verb agreement means a singular subject takes a singular verb and a plural subject takes a plural verb.",
 explanation: "The subject is who or what the sentence is about. The verb phrase says what the subject does or is. In 'The children are playing', the complete verb phrase is 'are playing': 'are' is the auxiliary (helping) verb and 'playing' is the main verb. The auxiliary agrees with the subject.",
 rules: ["He/she/it + verb with -s in simple present: she walks.", "I/you/we/they + base verb: they walk.", "Words between subject and verb do not change agreement: The box of apples is heavy.", "Collective nouns are usually singular in formal writing: The team is ready."],
 examples: [{ text: "The children are playing in the garden.", note: "Plural subject children takes are." }, { text: "The box of apples is on the table.", note: "The subject is box, not apples." }],
 compare: [{ wrong: "The books is on the desk.", right: "The books are on the desk.", why: "Books is plural, so use are." }],
 mistakes: ["Matching the verb to the nearest noun instead of the real subject.", "Exception: 'Everyone' and 'each' are singular: Everyone is here."],
 exercises: [
  { id: "s1", type: "mcq", prompt: "The boys ___ football every day.", options: ["play", "plays"], answers: ["play"], hint: "Boys is plural.", explanation: "Plural subject takes the base verb play." },
  { id: "s2", type: "mcq", prompt: "The box of apples ___ heavy.", options: ["is", "are"], answers: ["is"], hint: "Find the real subject: box.", explanation: "The subject is box (singular), so use is." },
  { id: "s3", type: "fill", prompt: "She ____ (walk) to school.", answers: ["walks"], hint: "She takes -s.", explanation: "Third person singular adds -s." },
  { id: "s4", type: "correct", prompt: "Correct: Everyone are ready.", answers: ["Everyone is ready"], hint: "Everyone is singular.", explanation: "Everyone takes a singular verb." },
  { id: "s5", type: "fill", prompt: "In 'The children are playing', which word is the auxiliary verb?", answers: ["are"], hint: "It is the helping verb before playing.", explanation: "'are' helps the main verb 'playing'." }],
 tasks: ["Write two sentences with 'of' between subject and verb.", "Write one sentence with 'everyone'."],
 story: { title: "The Cricket Team", text: "Every morning the team practises at the ground. Bilal, who is the captain, says that everyone is responsible for the kit. The boys carry the bats, and the coach checks the pads." },
 summary: "Find the true subject, then match the verb to it.", next: "simple-present" },
{ slug: "simple-present", objective: "Use the simple present for habits and facts, in positive, negative and question forms.",
 definition: "The simple present tense describes habits, routines and general facts.",
 explanation: "Use the base verb for I, you, we and they; add -s for he, she and it. For negatives and questions use do/does as an auxiliary verb: 'She does not like tea.' 'Does she like tea?' After does, the main verb returns to base form.",
 rules: ["Positive: She walks.", "Negative: She does not walk.", "Question: Does she walk?", "Verbs ending -s, -sh, -ch, -x, -o add -es: watches, goes."],
 examples: [{ text: "Water boils at 100°C.", note: "A general fact." }, { text: "He does not drink coffee.", note: "does + not + base verb." }],
 compare: [{ wrong: "She doesn't likes tea.", right: "She doesn't like tea.", why: "After does/doesn't the verb stays in base form." }],
 mistakes: ["Adding -s twice (does not likes).", "Forgetting -es after watch or go."],
 exercises: [
  { id: "p1", type: "fill", prompt: "He ____ (watch) TV every night.", answers: ["watches"], hint: "Ends in -ch.", explanation: "Verbs ending in -ch add -es." },
  { id: "p2", type: "correct", prompt: "Correct: She doesn't likes tea.", answers: ["She doesn't like tea", "She does not like tea"], hint: "After doesn't, use base form.", explanation: "Doesn't already carries the -s." },
  { id: "p3", type: "mcq", prompt: "Which is a correct question?", options: ["Does he plays?", "Does he play?", "Do he play?"], answers: ["Does he play?"], hint: "he + does + base verb.", explanation: "Does carries agreement; play stays base." },
  { id: "p4", type: "rearrange", prompt: "Put in order: not / does / she / eat / meat", answers: ["She does not eat meat"], hint: "Subject, does, not, verb.", explanation: "Negative: subject + does not + base verb." }],
 tasks: ["Write five sentences about your daily routine.", "Turn each into a question."],
 story: { title: "Rafi's Morning", text: "Rafi wakes at six. He washes his face, goes to the mosque and watches the sunrise. His sister does not wake early, so she misses it." },
 summary: "Base verb, -s for he/she/it, and does + base verb for negatives and questions.", next: "twelve-tenses" },
];
