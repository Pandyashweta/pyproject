import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/beginner", label: "Beginner" },
  { href: "/intermediate", label: "Intermediate" },
  { href: "/advanced", label: "Advanced" },
  { href: "/about", label: "About" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(118, 119, 233, 0.15) 0%, rgba(231, 60, 126, 0) 50%)",
            animation: "beat 5s ease-in-out infinite",
          }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/40 bg-background/80 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <NavLink to="/" className="text-lg font-bold">
            Python Projects
          </NavLink>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}