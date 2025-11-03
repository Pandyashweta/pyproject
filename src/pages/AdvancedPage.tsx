import { ProjectDisplayPage } from "@/components/ProjectDisplayPage";
import { processedAdvancedProjects } from "@/data/projects";

const advancedTabs = Object.keys(processedAdvancedProjects);

export function AdvancedPage() {
  return (
    <ProjectDisplayPage
      pageTitle="Advanced Projects"
      pageDescription="Develop production-grade, scalable, and intelligent systems integrating multiple technologies."
      tabs={advancedTabs}
      projects={processedAdvancedProjects}
    />
  );
}

export default AdvancedPage;