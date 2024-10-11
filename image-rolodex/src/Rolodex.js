import React, { useState } from 'react';
import './Rolodex.css';

const images = [
  { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', description: 'The Starry Night.' },
  { id: 2, src: 'https://media.nga.gov/iiif/242acea8-e32b-4119-bd4c-2d8d87675f4b/full/full/0/default.jpg?attachment_filename=the_voyage_of_life__manhood_1971.16.3.jpg', description: "The Voyage of Life: Adulthood." },
  { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Botticelli_-_Man_of_Sorrows.jpg', description: "The Man of Sorrows." },
  { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aelbert_Cuyp_-_The_Maas_at_Dordrecht_-_Google_Art_Project.jpg/450px-Aelbert_Cuyp_-_The_Maas_at_Dordrecht_-_Google_Art_Project.jpg', description: 'The Maas at Dordrecht.'},
  { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Frederic_Edwin_Church_-_Niagara_Falls_-_WGA04867.jpg/450px-Frederic_Edwin_Church_-_Niagara_Falls_-_WGA04867.jpg', description: 'Niagra.' }
];
const Rolodex = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Zoom in on an image
  const handleZoom = (image) => {
    setZoomedImage(image);
  };

  // Close the zoomed image
  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="rolodex-container">
      <div className="arrow left" onClick={prevImage}>
        &#9664;
      </div>
      <div className="rolodex">
        {images.map((image, index) => (
          <div key={image.id} className="image-container">
            <img
              src={image.src}
              alt={image.alt}
              className={`rolodex-image ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleZoom(image)}
            />
            {index === currentIndex && (
              <div className="blurb">
                <p>{image.description}</p> {/* Display description when the image is active */}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={nextImage}>
        &#9654;
      </div>

      {zoomedImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomedImage.src} alt={zoomedImage.alt} className="zoomed-image" />
        </div>
      )}
    </div>
  );
};

export default Rolodex;