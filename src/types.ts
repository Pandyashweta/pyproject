export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  concepts: string[];
  github: string;
  demo: string;
}