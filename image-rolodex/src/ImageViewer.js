import React, { useState, useRef } from 'react';
import './ImageViewer.css'; // Include the styles

const ImageViewer = ({ src, alt }) => {
  const [scale, setScale] = useState(1); // Default zoom scale
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Track the image position
  const [isDragging, setIsDragging] = useState(false); // Track drag state
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 }); // Track initial drag position
  const imgRef = useRef(null); // Reference to the image

  // Handle mouse wheel for zooming in and out
  const handleWheel = (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.1 : 0.1; // Zoom in or out
    setScale((prevScale) => Math.min(Math.max(prevScale + delta, 0.5), 5)); // Limit zoom between 0.5x and 5x
  };

  // Handle mouse down for starting drag
  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setStartDrag({ x: event.clientX - position.x, y: event.clientY - position.y });
  };

  // Handle mouse move for panning the image
  const handleMouseMove = (event) => {
    if (isDragging) {
      const newX = event.clientX - startDrag.x;
      const newY = event.clientY - startDrag.y;
      setPosition({ x: newX, y: newY });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="image-viewer"
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="zoomable-image"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      />
    </div>
  );
};

export default ImageViewer;
