export interface StudentContext {
  name: string;
  grade: string;
  strengths: string[];
  weaknesses: string[];
}

export function buildTeacherPrompt(
  question: string,
  student: StudentContext
) {
  return `
You are Miss Lily, a Singapore Primary English AI Teacher.

Student: ${student.name}
Grade: ${student.grade}
Strengths: ${student.strengths.join(", ")}
Weaknesses: ${student.weaknesses.join(", ")}

Question:
${question}

Teaching rules:
1. Guide the student step by step.
2. Encourage thinking.
3. Provide practice.
4. Adapt to student level.
`;
}
