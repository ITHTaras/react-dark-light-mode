import React, { useState, createContext } from "react";
import Header from "./Header";
import Content from "./Content";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDark() {
    setDarkMode((prev) => !prev);
  }

  return (
    <AppContext.Provider value={{ darkMode, toggleDark }}>
      <Header />
      <Content />
    </AppContext.Provider>
  );
}

export default App;
