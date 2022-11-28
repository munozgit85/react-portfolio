import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Photo-port",
      category: "react",
      link: (
        <a href="Photo-port link">
          {"https://github.com/munozgit85/photo-port.git"}
        </a>
      ),
    },
    {
      name: "e-commerce",
      category: "my-sql",
      link: (
        <a href="e-commerce link">
          {"https://github.com/munozgit85/e-commerce.git"}
        </a>
      ),
    },
    {
      name: " Social network API",
      category: "NoSQL",
      link: (
        <a href=" Social network API link">
          {"https://github.com/munozgit85/social-network-api.git"}
        </a>
      ),
    },
    {
      name: "text-editor-pwa",
      category: "PWA",
      link: (
        <a href="text-editor-pwa link">
          {" https://github.com/munozgit85/texteditor-pwa.git"}
        </a>
      ),
    },
    {
      name: "note-taker",
      category: "express",
      link: (
        <a href="note-taker link">
          {" https://github.com/munozgit85/note-taker.git"}
        </a>
      ),
    },
    {
      name: "Niche",
      category: "MVC",
      link: (
        <a href="Niche link">{"https://github.com/munozgit85/niche.git"}</a>
      ),
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
