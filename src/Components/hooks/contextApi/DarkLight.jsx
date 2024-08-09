import { createContext, useContext, useState } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

// ThemeProvider component to manage and provide the theme context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Function to toggle between dark and light themes
  const changeTheTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// DarkLight component that uses the theme context
export const DarkLight = () => {
  const { theme, changeTheTheme } = useContext(ThemeContext);

  // Determine the styles based on the current theme
  const themeStyles = {
    
    backgroundColor: theme === "dark" ? "#333" : "#FFF",
    color: theme === "dark" ? "#FFF" : "#000",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
  };

  return (
    <div style={themeStyles}>
      <h1>{theme} Mode</h1>
      <button onClick={changeTheTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};
