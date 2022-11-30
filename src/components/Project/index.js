import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "../Modal";

function Project(props) {
  const currentProject = useState(props)[0].projects;
  const [currentPhoto, setCurrentPhoto] = useState();
  const name = currentProject.name;
  const description = currentProject.description;
  const image = currentProject.image;
  const proficiency = currentProject.proficiencies;
  const deploy = currentProject.deploy;
  const gitLink = currentProject.github;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = ({ image }) => {
    setCurrentPhoto({ ...{ image } });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require(`../../assets/images/${image}`)}
          className="card-image img-thumbnail mx-1"
          onClick={() => toggleModal({ image })}
          key={image.name}
        />

        <div className="center">
          <Card.Body>
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-text">{description}</Card.Text>
            <Card.Subtitle className="card-subtitle">
              Proficiencies Used
            </Card.Subtitle>
            <Card.Text className="card-techs">{proficiency}</Card.Text>
            <Card.Link href={deploy} target="_blank" className="card-link">
              {name} Deploy
            </Card.Link>
            <br></br>
            <Card.Link href={gitLink} target="_blank" className="card-link">
              {name} Github
            </Card.Link>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default Project;
