import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addquote from "./Components/Addquote";
import Errorpage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Viewquote from "./Components/Viewquote";
import ProfilePage from "./Components/ProfilePage";

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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/viewquote" element={<Viewquote />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Errorpage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
