import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-foreground">
            Mochamad Abdul Rouf's Portfolio
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#posts" className="text-sm text-foreground hover:text-primary transition-colors">
              Posts
            </a>
            <a href="#projects" className="text-sm text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#talks" className="text-sm text-foreground hover:text-primary transition-colors">
              Talks
            </a>
            <a href="#uses" className="text-sm text-foreground hover:text-primary transition-colors">
              Uses
            </a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-secondary"
          >
            {isDark ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
