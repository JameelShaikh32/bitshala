import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from "aos";

//Components
import Header from "./components/Header";
import ComingSoon from "./pages/ComingSoon";

//Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  useEffect(() => {
    Aos.init({ duration: 700, easing: 'ease-in-out' });
  }, []);

  return (
    <Router hashType="slash">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/coming-soon"} element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;