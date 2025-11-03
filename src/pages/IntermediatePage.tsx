import { ProjectDisplayPage } from "@/components/ProjectDisplayPage";
import { processedIntermediateProjects } from "@/data/projects";

const intermediateTabs = Object.keys(processedIntermediateProjects);

export function IntermediatePage() {
  return (
    <ProjectDisplayPage
      pageTitle="Intermediate Projects"
      pageDescription="Build structured, interactive, and data-driven projects using OOP, APIs, and databases."
      tabs={intermediateTabs}
      projects={processedIntermediateProjects}
    />
  );
}

export default IntermediatePage;