import { createContext, useEffect, useState } from "react"


function Firstpage() {

 const ThemeContext = createContext();

    const[theme,setTheme]=useState("light");

    const toggleTheme = ()=>{
        setTheme(theme ==="light"?"dark":"light");
    };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        <h1>first page</h1>
        <button onClick={toggleTheme}>toggleTheme</button>
        <Sighup/>
            <Login/>
            <UserProfile/>
        



    </ThemeContext.Provider>
  )
}

export default Firstpage
