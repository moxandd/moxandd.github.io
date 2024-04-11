import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="overlay bg-gray-200 min-h-[100vh]">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
