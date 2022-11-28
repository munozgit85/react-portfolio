import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "react",
      description: "photo-port application of a photographers work",
    },
    {
      name: "my-sql",
      description:
        "This application is for a manager of a retail company who needs a back-end for an e-commerce website",
    },
    {
      name: "NoSQL",
      description: "NoSQL database with MongoDB called social-network-api",
    },
    {
      name: "MVC",
      description:
        "NICHE application. Group project instututing Model-View-Controller software design pattern",
    },
    {
      name: "PWA",
      description: " text-editor-pwa institutes a progressive web application.",
    },
    {
      name: "express",
      description:
        "The note-taker is an application that incorporates the node.js web application framework",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
