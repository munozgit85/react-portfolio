import React from "react";
function Resume() {
  return (
    <section>
      <div className="center">
        <h1 className="page-header">Resume</h1>
      </div>

      <div className="bottom-spacing">
        <a href={require("../../assets/files/")} download>
          <h4>Download my Resume</h4>
        </a>
      </div>

      <div className="resume-pic">
        <p>
          OBJECTIVE: Hardworking, dedicated, and competent junior Full-stack
          developer with a background as a healthcare provider in the acute care
          setting that is searching for a position involving healthcare
          technology. Has Prior experience with various healthcare Electronic
          medical recording systems and utilizing HIPPA compliant applications
          to enhance patient care.
        </p>
        <br></br>
      </div>

      <div className="skill center">
        <ul>
          SKILLS PROFILE:
          <ol> + HTML </ol>
          <ol>+ css</ol>
          <ol>+ Javascript </ol>
          <ol>+ Jquery </ol>
          <ol> + Bootstrap </ol>
          <ol>+ bulma </ol>
          <ol>+ Third Party and Server side API' </ol>
          <ol>+ Node.js </ol>
          <ol>+ Object Oriented Programming </ol>
          <ol>+ Express.js </ol>
          <ol>+ SQL </ol>
          <ol>+ Object relational mapping </ol>
          <ol> + Model View Controller </ol>
          <ol> + Progressive Web Applications</ol>
          <ol> + React</ol>
        </ul>
        <br></br>
      </div>
    </section>
  );
}

export default Resume;
