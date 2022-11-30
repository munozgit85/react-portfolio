import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/munozgit85">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github"
            className="icon"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/racquel-munoz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/images/icons8-linkedin-48.png")}
            alt="LinkedIn"
            className="icon"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/MunozRacquel_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/images/icons8-twitter-48.png")}
            alt="Twitter"
            className="icon"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
