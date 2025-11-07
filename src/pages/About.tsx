import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedLayout } from "@/components/AnimatedLayout";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://github.com/Pandyashweta",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/shwetapandya001/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:teampandyas@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function About() {
  return (
    <AnimatedLayout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          About Me
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          [Here is where you can write a bit about yourself. Talk about your
          passion for Python, your experience, and what you hope to share on
          this site. You can customize this text to whatever you like.]
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="outline" size="icon" asChild className="rounded-full">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </AnimatedLayout>
  );
}