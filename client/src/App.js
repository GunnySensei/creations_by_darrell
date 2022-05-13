import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import About from "./components/About";

function App() {
  const [navTabs] = useState([
    {
      name: "About",
      description: "About the creator",
    },
    {
      name: "Projects",
      description: "Projects I've worked on",
    },
    {
      name: "Contact",
      description: "Contact me",
    },
  ]);

  const [currentNavTab, setCurrentNavTab] = useState(navTabs[0]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          navTabs={navTabs}
          setCurrentNavTab={setCurrentNavTab}
          currentNavTab={currentNavTab}
        />
      </header>
      <main>
        {currentNavTab === "Contact" ? (
          <>
            <ContactForm />
          </>
        ) : currentNavTab === "Projects" ? (
          <>
            <Projects />
          </>
        ) : (
          <>
            <About />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
