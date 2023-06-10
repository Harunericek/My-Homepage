import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
<header>
    <nav style={{position: "absolute", zIndex: "1", left: "36%", top: "7%"}}>
    <Link className="nav-btn" to="/">Home</Link>
    <Link className="nav-btn" to="/Projects">Projects</Link>
    <Link className="nav-btn" to="/Contact">Contact</Link>
    </nav>
</header>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
)
