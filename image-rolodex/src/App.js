import React, { useState } from 'react';
import Rolodex from './Rolodex'; // Import your Rolodex component
import './App.css'; // Import the updated CSS styles
import ImageViewer from './ImageViewer';

// Sample artwork data for the gallery
const artwork = [
  { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', description: 'The Starry Night.' },
  { id: 2, src: 'https://media.nga.gov/iiif/242acea8-e32b-4119-bd4c-2d8d87675f4b/full/full/0/default.jpg?attachment_filename=the_voyage_of_life__manhood_1971.16.3.jpg', description: "The Voyage of Life: Adulthood." },
  { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Botticelli_-_Man_of_Sorrows.jpg', description: "The Man of Sorrows." },
  { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Aelbert_Cuyp_-_The_Maas_at_Dordrecht_-_Google_Art_Project.jpg/450px-Aelbert_Cuyp_-_The_Maas_at_Dordrecht_-_Google_Art_Project.jpg', description: 'The Maas at Dordrecht.'},
  { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Frederic_Edwin_Church_-_Niagara_Falls_-_WGA04867.jpg/450px-Frederic_Edwin_Church_-_Niagara_Falls_-_WGA04867.jpg', description: 'Niagra.' }
];

function App() {
  // State to manage which content is shown (default, location, schedule, gallery, or contact)
  const [content, setContent] = useState('default');
  const [learnMoreExpanded, setLearnMoreExpanded] = useState(false); // For expanding frame on Learn More


  // Function to display Google Maps when "Location" is clicked
  const showLocation = () => {
    setContent('location');
  };

  // Function to toggle the "Learn More" section
  const toggleLearnMore = () => {
    setLearnMoreExpanded(!learnMoreExpanded);
  };

  // Function to display the default content (like Rolodex) when other buttons are clicked
  const showDefaultContent = () => {
    setContent('default');
  };

  // Function to display the calendar when "Schedule" is clicked
  const showSchedule = () => {
    setContent('schedule');
  };

  // Function to display the gallery when "Gallery" is clicked
  const showGallery = () => {
    setContent('gallery');
  };

  // Function to display the contact section when "Contact" is clicked
  const showContact = () => {
    setContent('contact');
  };

  return (
    <div className={`frame ${learnMoreExpanded ? 'expanded' : ''}`}> {/* Dynamically add 'expanded' class */}
      {/* Top Bar */}
      <div className="top-bar">
        <div className="menu-item" onClick={showDefaultContent}>Home</div>
        <div className="menu-item" onClick={showGallery}>Gallery</div>
        <div className="menu-item" onClick={showContact}>Contact</div> {/* Show Contact */}
        <div className="menu-item" onClick={showSchedule}>Schedule</div>
        <div className="menu-item" onClick={showLocation}>Location</div>
      </div>

      {/* Content Section */}
      <div className="content-area">
        {content === 'default' && (
          <div>
            <h1>Welcome to the Artisan's Odyssey Gallery</h1>
            <p>This is a journey into the world of art. Feel free to browse the gallery below.</p>
            <Rolodex />
            <button className="rustic-button" onClick={toggleLearnMore}>
              {learnMoreExpanded ? 'Show Less' : 'Learn More'}
            </button>            {learnMoreExpanded && (
              <div className="learn-more-content">
                <p>
                Artisan's Odyssey is a vibrant art gallery that celebrates the journey of creativity and craftsmanship. Dedicated to showcasing works from emerging and established artists alike, the gallery serves as a visual voyage through a variety of mediums, styles, and cultures. From timeless traditional techniques to bold contemporary experiments, Artisan’s Odyssey offers an immersive experience that highlights the evolving narrative of art.
                </p>
              </div>
            )}
          </div>
        )}

        {content === 'location' && (
          <div className="google-map mb-5">
            <h2 className="text-center">Our Location</h2>
            <iframe title='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509488!2d144.95565181531583!3d-37.8173279797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727db512cbca0!2sFederation+Square!5e0!3m2!1sen!2sau!4v1515551950479"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        )}

        {content === 'schedule' && (
          <div className="calendar my-5">
            <h2 className="text-center">Upcoming Art Exhibits</h2>
            <iframe title='calendar'
              src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: 0 }} width="100%" height="600" frameBorder="0" scrolling="no">
            </iframe>
          </div>
        )}

        {content === 'gallery' && (
          <div className="gallery">
          <h2 className="text-center">Art Gallery</h2>
          <p>Zoom with your mousewheel/touchpad or touch screen to view the paintings closer</p>
          <div className="gallery-grid">
            {artwork.map((art) => (
              <div key={art.id} className="gallery-item">
                <ImageViewer src={art.src} alt={art.alt} />
              </div>
            ))}
            </div>
          </div>
        )}

        

        {content === 'contact' && (
          <div className="contact my-5">
            <h2 className="text-center">Contact Us</h2>
            <p className="text-center">Email: contact@cozycottage.com</p>
            <p className="text-center">Phone: (123) 456-7890</p>
            <div className="social-media-embeds text-center">
              <div className="social-media">
                <h3>Facebook</h3>
                <iframe title='facebook' 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookPageName&tabs=timeline&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500" height="300" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
              <div className="social-media">
                <h3>Instagram</h3>
                <iframe title='instagram' src="https://instagram.com/p/instagramEmbedExample/embed" width="320" height="400" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
