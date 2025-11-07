import { Github, Linkedin, Mail } from "lucide-react";

const contributors = [
  { name: "Team PS", profileUrl: "mailto:team.email@example.com" },
  // TODO: Add more contributors here
];

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen py-16 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          About Me
        </h1>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
          Hello! I'm a passionate Python developer with a love for building
          innovative and practical solutions. My journey in programming started
          with a simple "Hello, World!" and has since grown into a full-fledged
          passion for creating software that makes a difference. This portfolio
          is a curated collection of my work, showcasing my skills across
          different domains and difficulty levels. Feel free to explore my
          projects and get in touch!
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="mailto:youremail@example.com"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
          <a
            href="#" // TODO: Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="#" // TODO: Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>

        <div className="w-full border-t border-border/40 pt-12 mt-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Credits & Contributors</h2>
          <p className="text-muted-foreground mb-6">
            A huge thank you to everyone who has contributed their projects to this collection.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.profileUrl}
                className="font-medium text-primary hover:underline hover:text-foreground transition-colors"
              >
                {contributor.name}
              </a>
            ))}
          </div>
        </div>

        <footer className="border-t border-border/40 pt-8 mt-12">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sakshya & Co. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AboutPage;