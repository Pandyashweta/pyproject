import { ProjectDisplayPage } from "@/components/ProjectDisplayPage";
import { processedBeginnerProjects } from "@/data/projects";

const beginnerTabs = Object.keys(processedBeginnerProjects);

export function BeginnerPage() {
  return (
    <ProjectDisplayPage
      pageTitle="Beginner Projects"
      pageDescription="Learn the basics of Python syntax, logic, and structure through small, console-based projects."
      tabs={beginnerTabs}
      projects={processedBeginnerProjects}
    />
  );
}

export default BeginnerPage;