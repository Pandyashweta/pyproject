import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface SearchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
}

const SearchResultsModal: React.FC<SearchResultsModalProps> = ({ isOpen, onClose, projects }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Search Results</DialogTitle>
        </DialogHeader>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">No projects found matching your search.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsModal;