import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, image } = currentPhoto;

  return (
    <div className="Backdrop">
      <div className="Container">
        <h3 className="Title">{name} </h3>
        <img
          src={require(`../../assets/images/${image}`)}
          alt="current category"
        />
        <button type="button" onClick={onClose}>
          Close this
        </button>
      </div>
    </div>
  );
};

export default Modal;
