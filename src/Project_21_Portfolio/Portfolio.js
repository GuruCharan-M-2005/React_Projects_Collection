import React from 'react'
import './Portfolio.css'
export default function Portfolio() {
  return (
    <div className='main-container'>
        <div className='header-container'>
            <div className='header-left'>
                <h1 className='header-main-text'>Gurucharan</h1>
            </div>
            <div className='header-right'>
                <ul className='header-list'>
                    <a href='#about-container' className='header-list-items'>About</a>
                    <a href='#projects-container' className='header-list-items'>Projects</a>
                    <a href='#contact-container' className='header-list-items'>Contact</a>
                </ul>
            </div>
        </div>
        <div id='about-container'>
            <div className="text-container">
                <div className="text-area">
                    Hello! I am Gurucharan, I am Developer...
                </div>
                <div className='text-brief'>
                    I am developer. I am specialized in creating, designing, and implementing software solutions,
                     applications, or systems using programming languages, frameworks, and tools to meet specific user needs or 
                     solve technological challenges. I often work collaboratively in teams, utilizing their problem-solving skills,
                      creativity, and technical expertise to develop innovative and efficient software products.
                </div>
            </div>
        </div>
        <div id='projects-container'>
            <div className='projects-topic'>
                My Projects
            </div>
            <div className='project-list'>
                <div className='project-grid'>
                    <a href='#' className='project-card'></a>
                    <h2 className='project-grid-text'>Fundraiser App</h2>
                </div>
                <div className='project-grid'>
                    <a href='#' className='project-card'></a>
                    <h2 className='project-grid-text'>React Projects</h2>
                </div>
                <div className='project-grid'>
                    <a href='#' className='project-card'></a>
                    <h2 className='project-grid-text'>React-Native Projects</h2>
                </div>
            </div>
        </div>
        <div id='contact-container'>
            <div className='form-heading'>Contact Us</div>
            <form className='form-main'>
                <div className="form-group">
                  <input type="text" id="name" placeholder='Your Name' required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder='Your Email' required />
                </div>
                <div className="form-group">
                  <textarea id="message"  rows="5" placeholder='Your Messege' required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}
