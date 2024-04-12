import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="overlay bg-white min-h-[100vh]">
          <div className="container | max-container flex flex-col gap-[1em]">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
