import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
    }`;

  return (
    <header className="fixed bottom-8 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center gap-2 rounded-full bg-card/80 p-2 shadow-lg backdrop-blur-sm border border-border">
        <NavLink to="/" className={navLinkClasses} end>
          Home
        </NavLink>
        <NavLink to="/beginner" className={navLinkClasses}>Beginner</NavLink>
        <NavLink to="/intermediate" className={navLinkClasses}>Intermediate</NavLink>
        <NavLink to="/advanced" className={navLinkClasses}>Advanced</NavLink>
        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}