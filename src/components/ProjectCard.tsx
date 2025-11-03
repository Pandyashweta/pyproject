import { Project } from "@/types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      className="bg-card border border-border rounded-2xl p-6 group flex flex-col"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.2 }}
      layout
    >
      <h3 className="text-xl font-bold text-foreground mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
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

      <div className="mt-auto flex gap-3 pt-4 border-t border-border/50">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-transparent hover:bg-muted"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
        <Button
          size="sm"
          className="flex-1"
          asChild
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </Button>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
