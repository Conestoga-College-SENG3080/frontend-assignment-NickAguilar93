/*
 * FILE : App.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file contains the main outlet for the parent component of the entire application
 */
import { Outlet } from "react-router";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
