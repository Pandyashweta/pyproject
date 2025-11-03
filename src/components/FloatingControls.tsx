import { Upload, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingControls() {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-card/80 backdrop-blur-sm border border-border" asChild>
            <a href="https://forms.gle/fhS44p51v7XbhFsQ9" target="_blank" rel="noopener noreferrer">
              <Upload className="h-5 w-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Request Project Upload</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-card/80 backdrop-blur-sm border border-border" asChild>
            <a href="/help-guide.pdf" download="python-projects-help-guide.pdf">
              <HelpCircle className="h-5 w-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download Help Guide</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}