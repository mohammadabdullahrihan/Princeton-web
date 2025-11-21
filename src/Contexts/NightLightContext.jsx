import { createContext, useState } from "react";

export const DarkModeContext = createContext();

const NightLightContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const result = { handleDarkMode, darkMode, setDarkMode };
  return (
    <DarkModeContext.Provider value={result}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default NightLightContext;
