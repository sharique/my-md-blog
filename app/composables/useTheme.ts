export const useTheme = () => {
  const theme = useState<string>("theme", () => "light");

  const setTheme = (newTheme: string) => {
    theme.value = newTheme;
    if (import.meta.client) {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme.value === "light" ? "dark" : "light");
  };

  // Initialize theme on client
  if (import.meta.client) {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
  }

  return { theme, toggleTheme };
};
