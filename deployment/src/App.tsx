import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HCI from "./pages/HCI";
import Manifesto from "./pages/Manifesto";
import './index.scss';

function App() {
    

    return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hci" element={<HCI />} />
          <Route path="/hci/manifesto" element={<Manifesto />} />
        </Routes>
      </Router>
    );
}

export default App;