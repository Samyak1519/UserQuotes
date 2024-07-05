import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addquote from "./Components/Addquote";
import Errorpage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="m-3 p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add_quote" element={<Addquote />} />

              <Route path="*" element={<Errorpage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
