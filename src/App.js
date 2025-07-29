import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import "./App.css";
import "./Sidebar.css";
import "./Sections.css";
import "./Footer.css";
import "./About.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Rawaha Rasheed</title>
      </Helmet>
      <ThemeToggle />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
