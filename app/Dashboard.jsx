import React, { useContext } from 'react'
import {ThemeContext} from "./Firstpage"

function Dashboard() {
    const { theme, toggleTheme }=useContext(ThemeContext);

  return (
    <div style={{
        backgroundColor:theme === "light" ? "white": "black",
        color: theme === "light" ? "black" : "white",
        padding : "20px",
    }}>
        <h2>Dashboard</h2>
        <p>current theme: {theme}</p>
        <button onClick={toggleTheme}>toggleTheme</button>
      
    </div>
  )
}

export default Dashboard
