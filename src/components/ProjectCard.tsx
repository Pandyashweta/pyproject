import { Project } from "@/data/projects";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const difficultyColors = {
    beginner: "bg-beginner/20 text-beginner border-beginner/30",
    intermediate: "bg-intermediate/20 text-intermediate border-intermediate/30",
    advanced: "bg-advanced/20 text-advanced border-advanced/30",
  };

  return (
    <article className="glass-card rounded-2xl p-6 group">
      <div className="flex items-start justify-between mb-4">
        <Badge variant="outline" className="text-xs px-2 py-1">
          {project.category}
        </Badge>
        <Badge
          variant="outline"
          className={`text-xs px-2 py-1 capitalize ${difficultyColors[project.difficulty]}`}
        >
          {project.difficulty}
        </Badge>
      </div>

      <div className="text-5xl mb-4">{project.emoji}</div>

      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.concepts.slice(0, 3).map((concept, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
          >
            {concept}
          </Badge>
        ))}
        {project.concepts.length > 3 && (
          <Badge variant="secondary" className="text-xs bg-secondary/50">
            +{project.concepts.length - 3}
          </Badge>
        )}
      </div>

      <div className="space-y-2 mb-6">
        <p className="text-xs text-muted-foreground font-semibold">Features:</p>
        <ul className="space-y-1">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start">
              <span className="text-primary mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-card/50 hover:bg-accent hover:text-accent-foreground transition-all"
          asChild
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
