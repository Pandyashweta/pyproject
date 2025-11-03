import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import Typewriter from "typewriter-effect";
import { allProjects } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Fuse, { IFuseOptions } from "fuse.js";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const fuse = useMemo(() => {
    const options: IFuseOptions<Project> = {
      keys: ["title", "description", "concepts"],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2,
    };
    return new Fuse(allProjects, options);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredProjects([]);
        setIsModalOpen(false);
        return;
      }
      const fuseResults = fuse.search(searchQuery);
      setFilteredProjects(fuseResults.map((result) => result.item));
      setIsModalOpen(true);
    }, 300); // Debounce search by 300ms

    return () => clearTimeout(timer);
  }, [searchQuery, fuse]);

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredProjects([]);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen py-16">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            <Typewriter
              options={{
                strings: [
                  "Welcome to My Python Portfolio",
                  "Discover My Python Projects",
                  "Let's Build Something with Python",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            A collection of my Python projects across various difficulty
            levels. Use the search below to find a project.
          </p>
          <div className="w-full max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for Python projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-base bg-card border-border rounded-full focus:ring-ring focus:ring-offset-background"
            />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={(open) => {
        if (!open) {
          handleClearSearch();
        }
      }}>
        <DialogContent className="sm:max-w-6xl h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>
              Found {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "similar projects"}
            </DialogTitle>
          </DialogHeader>
          {filteredProjects.length > 0 ? (
            <div className="overflow-y-auto -mx-6 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">
                No similar projects found matching your search.
              </p>
            </div>
          )}
          <DialogFooter className="sm:justify-start">
            <Button type="button" variant="secondary" onClick={handleClearSearch}>
              <X className="mr-2 h-4 w-4" /> Clear Search
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default HomePage;