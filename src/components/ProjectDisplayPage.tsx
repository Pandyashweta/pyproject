import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

interface ProjectDisplayPageProps {
  pageTitle: string;
  pageDescription: string;
  tabs: string[];
  projects: { [key: string]: Project[] };
}

const specialAcronyms: { [key: string]: string } = {
  "Conditionals & Loops": "C&L",
  "Data Structures": "DS",
  "File Handling": "FH",
  "Strings & Text Handling": "S&TH",
  "Basic Python Libraries": "BPL",
  "Beginner Automation": "BA",
  // Intermediate
  "CLI & Utility Tools": "C&UT",
  "API & Web Data": "A&WD",
  "Web Scraping & Automation": "WS&A",
  "Basic GUI Applications": "BGA",
  "Games & Sims": "G&S",
  "Testing & Debugs": "T&D",
  // Advanced
  "Advanced GUI Applications": "AGA",
  "Database & CRUD Systems": "D&CS",
  "Web Development (Flask/Django)": "WD",
  "Security & Networking": "S&N",
  "Data Science & Machine Learning": "DS&ML",
  "Game Development": "GD",
  "Automation & Scripting": "A&S",
  "Creative & Unique Projects": "C&UP",
  "Mobile & IoT": "M&IoT",
  "Web Scraping Advanced": "WSA",
  "Scientific & Math": "S&M",
  "Finance & Business": "F&B",
  "Domain-Specific Projects": "DSP",
};

const createAcronym = (title: string): string => {
  if (specialAcronyms[title]) {
    return specialAcronyms[title];
  }
  if (title.length < 25) return title;
  return title
    .split(" ")
    .map(word => {
      if (word.toLowerCase() === "&") return "&";
      if (word.length > 0 && word[0].match(/[a-zA-Z0-9]/)) {
        return word[0].toUpperCase();
      }
      return "";
    })
    .join("");
};

export function ProjectDisplayPage({ pageTitle, pageDescription, tabs, projects }: ProjectDisplayPageProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [expandedTab, setExpandedTab] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="w-full">
        <h1 className="text-4xl font-bold mb-5">{pageTitle}</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-4xl">{pageDescription}</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 border-b border-border pb-2.5">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExpandedTab(tab);
              }}
              className={`relative bg-transparent border-none text-base cursor-pointer transition-colors px-1 py-1 ${
                activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              layout
            >
              {expandedTab === tab ? tab : createAcronym(tab)}
            </motion.button>
          ))}
        </nav>
      </header>

      <main className="w-full mt-8 mb-24">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects[activeTab]?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}