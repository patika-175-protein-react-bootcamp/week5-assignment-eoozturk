import Register from './pages/register';
import './App.css';
import { createContext, useState } from 'react';


export const ThemeContext = createContext(null);

function App() {

  const[theme, setTheme] =useState("light");

  const toggleTheme = () =>{
    setTheme((curr)=> (curr === "light" ? "dark" : "light"))
  };

  return (

   <ThemeContext.Provider>
      <div className="App" id={theme}>
        <Register />
      </div>
   </ThemeContext.Provider>
  );
}

export default App;
