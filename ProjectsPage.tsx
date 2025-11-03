import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projectsData = {
  beginner: [
    {
      title: "Beginner Project 1",
      description: "A simple project to get started with web development.",
      demoUrl: "#",
      repoUrl: "#",
    },
  ],
  intermediate: [
    {
      title: "Intermediate Project 1",
      description: "A more complex project with interesting features.",
      demoUrl: "#",
      repoUrl: "#",
    },
  ],
  advanced: [
    {
      title: "Advanced Project 1",
      description: "A challenging project showcasing advanced skills.",
      demoUrl: "#",
      repoUrl: "#",
    },
  ],
};

const ProjectCard = ({
  title,
  description,
  demoUrl,
  repoUrl,
}: {
  title: string;
  description: string;
  demoUrl: string;
  repoUrl: string;
}) => (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                </Button>
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                </Button>
            </a>
        </CardFooter>
    </Card>
);

export function ProjectsPage({ level }: { level: 'beginner' | 'intermediate' | 'advanced' }) {
    const projects = projectsData[level];
    const levelTitle = level.charAt(0).toUpperCase() + level.slice(1);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">{levelTitle} Projects</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export function BeginnerProjects() {
    return <ProjectsPage level="beginner" />;
}

export function IntermediateProjects() {
    return <ProjectsPage level="intermediate" />;
}

export function AdvancedProjects() {
    return <ProjectsPage level="advanced" />;
}