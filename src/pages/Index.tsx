import { useState, useMemo } from "react";
import { allProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Code2, TrendingUp, Zap } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    allProjects.forEach(p => allCategories.add(p.category));
    return ["All", ...allCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "all" || project.difficulty === selectedDifficulty;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const stats = [
    { icon: Code2, label: "Total Projects", value: "86+", gradient: "from-primary to-accent" },
    { icon: TrendingUp, label: "Categories", value: "17", gradient: "from-accent to-primary" },
    { icon: Zap, label: "Skill Levels", value: "3", gradient: "from-primary to-accent" },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Python Projects Hub</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            86+ Curated Projects for Every Skill Level
          </p>
          <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            From beginner-friendly calculators to advanced machine learning models. Build your portfolio and master Python.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-card/50 backdrop-blur text-lg px-8 hover:bg-card"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-black gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, concepts, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base bg-card/50 backdrop-blur border-border/50 rounded-2xl focus:border-primary transition-colors"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="mb-6 flex flex-wrap gap-3 justify-center">
            <p className="w-full text-center text-sm text-muted-foreground mb-2">Filter by Difficulty:</p>
            {["all", "beginner", "intermediate", "advanced"].map((diff) => (
              <Button
                key={diff}
                variant={selectedDifficulty === diff ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(diff)}
                className={`capitalize ${
                  selectedDifficulty === diff
                    ? "bg-gradient-to-r from-primary to-accent"
                    : "bg-card/50 backdrop-blur hover:bg-card"
                }`}
              >
                {diff}
              </Button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <p className="text-center text-sm text-muted-foreground mb-4">Filter by Category:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                  className={`${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-accent"
                      : "bg-card/50 backdrop-blur hover:bg-card"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mb-6">
            <p className="text-center text-muted-foreground">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No projects found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Built with <span className="text-red-500">❤️</span> and <span className="gradient-text font-semibold">Python</span>
          </p>
          <p className="text-sm text-muted-foreground/60">
            © 2025 Python Projects Hub. All projects are open source.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
