import { useParams, Navigate } from "react-router-dom";
import { ProjectDisplayPage } from "@/components/ProjectDisplayPage";
import {
  processedBeginnerProjects,
  processedIntermediateProjects,
  processedAdvancedProjects,
} from "@/data/projects";

const levelConfig = {
  beginner: {
    title: "Beginner Projects",
    description: "Learn the basics of Python syntax, logic, and structure through small, console-based projects.",
    tabs: Object.keys(processedBeginnerProjects),
    projects: processedBeginnerProjects,
  },
  intermediate: {
    title: "Intermediate Projects",
    description: "Build structured, interactive, and data-driven projects using OOP, APIs, and databases.",
    tabs: Object.keys(processedIntermediateProjects),
    projects: processedIntermediateProjects,
  },
  advanced: {
    title: "Advanced Projects",
    description: "Develop production-grade, scalable, and intelligent systems integrating multiple technologies.",
    tabs: Object.keys(processedAdvancedProjects),
    projects: processedAdvancedProjects,
  },
};

type Level = keyof typeof levelConfig;

export function ProjectLevelPage() {
  const { level } = useParams<{ level: string }>();

  if (!level || !levelConfig[level as Level]) {
    return <Navigate to="/404" replace />;
  }

  const config = levelConfig[level as Level];

  return (
    <ProjectDisplayPage
      pageTitle={config.title}
      pageDescription={config.description}
      tabs={config.tabs}
      projects={config.projects}
    />
  );
}

export default ProjectLevelPage;