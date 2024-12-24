import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
    >
      {theme === "dark" ? (
        <Moon className="size-5" />
      ) : (
        <Sun className="size-5" />
      )}
    </button>
  );
};

export default DarkModeToggle;
