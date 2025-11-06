import { useState, useEffect } from "react";
import { Project } from "@/types";

import  ProjectCard  from "./components/ProjectCard";
interface ProjectsPageProps {
  projectsData: { [category: string]: Project[] };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export function ProjectsPage({ projectsData, difficulty }: ProjectsPageProps) {
  const categories = Object.keys(projectsData);
  // FIX: Set the initial active category to the first one in the list.
  const [activeCategory, setActiveCategory] = useState(categories[0] || '');

  useEffect(() => {
    const firstCategory = Object.keys(projectsData)[0];
    setActiveCategory(firstCategory || '');
  }, [projectsData]);

  const projects = projectsData[activeCategory];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{difficulty} Projects</h1>
      <div className="flex space-x-2 mb-8 border-b">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium ${
              activeCategory === category
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  );
}