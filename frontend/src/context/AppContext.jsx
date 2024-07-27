import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <AppContext.Provider value={{ authUser, setAuthUser, isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
