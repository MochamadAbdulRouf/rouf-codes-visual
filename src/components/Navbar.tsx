import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

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
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-foreground hover:text-primary transition-colors">
            <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 object-contain" />
            <span>Mochamad Abdul Rouf's Portfolio</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${
                location.pathname === "/" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors ${
                location.pathname === "/about" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm transition-colors ${
                location.pathname === "/projects" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/posts" 
              className={`text-sm transition-colors ${
                location.pathname === "/posts" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Posts / Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors ${
                location.pathname === "/contact" ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
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
