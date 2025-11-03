import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">MyPortfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <NavLink to="/beginner" className={navLinkClasses}>Beginner</NavLink>
            <NavLink to="/intermediate" className={navLinkClasses}>Intermediate</NavLink>
            <NavLink to="/advanced" className={navLinkClasses}>Advanced</NavLink>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* You can add other elements like a theme toggle here */}
        </div>
      </div>
    </header>
  );
}