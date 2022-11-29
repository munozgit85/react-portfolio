import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Photo-port",
      proficiencies: "react, create-react-app, react testing library",
      description: "photo-port is an  application of a photographers work",
      image: "react.jpg",
      github: (
        <a href="https://github.com/munozgit85/photo-port.git">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      ),
      deploy: (
        <a href="Github deploy link">
          {"https://munozgit85.github.io/photo-port/"}
        </a>
      ),
    },
    {
      name: "e-commerce",
      proficiencies: "my-sql, sequelize, dotenv, insomnia, express",
      description:
        "This application is for a manager of a retail company who needs a back-end for an e-commerce website",
      image: "my-sql.jpg",
      github: (
        <a href="https://github.com/munozgit85/e-commerce.git">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      ),
    },
    {
      name: " Social network API",
      proficiencies: "NoSQL, MongoDB, Node, Mongoose, Insomnia",
      description:
        "NoSQL database with MongoDB offers the backend framework for creating a social network of users that can add thoughts, reactions, and friends",
      image: "NoSQL.jpg",
      github: (
        <a href="https://github.com/munozgit85/social-network-api.git">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      ),
    },
    {
      name: "text-editor-pwa",
      proficiencies: "Progressive Web Application, Webpack, Manifest, IndexDB",
      description:
        " text-editor-pwa institutes a progressive web application that allows the user to add notes that can be retrieved even after closing and re-opening the app.",
      image: "PWA.jpg",
      github: (
        <a href="https://github.com/munozgit85/texteditor-pwa.git">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      ),
      deploy: (
        <a href="Heroku link">
          {"https://fathomless-bayou-07571.herokuapp.com/"}
        </a>
      ),
    },
    {
      name: "note-taker",
      proficiencies: "express, file system module",
      description:
        "The note-taker is an application that allows the user to take notes, save, edit, and delete using express",
      image: "express.jpg",
      github: (
        <a href="https://github.com/munozgit85/note-taker.git">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      ),
      deploy: (
        <a href="Heroku link">{"https://agile-mesa-84087.herokuapp.com"}</a>
      ),
    },
    {
      name: "Niche",
      proficiencies: "MVC",
      description:
        "This is a Group project instututing Model-View-Controller software design pattern to record food orders for a restaurant",
      image: "niche.jpg",
      github: (
        <a href="https://github.com/munozgit85/niche.git">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      ),
      deploy: (
        <a href="Heroku link">
          {" https://thawing-garden-93969.herokuapp.com"}
        </a>
      ),
    },
  ];
  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
