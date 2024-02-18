import React from 'react';
import './Adventure.css';

function Adventure() {
  return (
    <div className="adventure-container">
      <header className="header">
        <div className="header-left">Advens</div>
        <nav className="header-right">
          <ul>
            <li><a href="#body-1">Home</a></li>
            <li><a href="#body-2">Collections</a></li>
            <li><a href="#footer">Contact</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>
      <div id="body-1">
        <div className="background-image">
          <div className="foreground">
            <h2>Embark on an Adventure</h2>
            <p>Explore the unknown and embrace the journey.</p>
            <button className="explore1-button">Explore</button>
          </div>
        </div>
      </div>
      <div id="body-2">
        <div className="grid-1">
          <div className="photo-1">
            <button className="explore-button">Explore</button>
          </div>
          <div className="photo-2">
            <button className="explore-button">Explore</button>
          </div>
        </div>
        <div className="grid-2">
          <div className="photo-3">
            <button className="explore-button">Explore</button>
          </div>
          <div className="photo-4">
            <button className="explore-button">Explore</button>
          </div>
          <div className="photo-5">
            <button className="explore-button">Explore</button>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="footer-column">
          <a href="#profile">Instagram</a><br></br><br></br>
          <a href="#profile">Facebook</a><br></br><br></br>
          <a href="#profile">Twitter</a><br></br><br></br>
        </div>
        <div className="footer-column">
          <a href="#contact">Phone</a><br></br><br></br>
          <a href="#contact">Email</a><br></br><br></br>
          <a href="#contact">Discord</a><br></br><br></br>
        </div>
        <div className="footer-column">
          <a href="#about">Developer</a><br></br><br></br>
          <a href="#about">Explorer</a><br></br><br></br>
          <a href="#about">Designer</a><br></br><br></br>
        </div>
      </footer>
    </div>
  );
}

export default Adventure;
