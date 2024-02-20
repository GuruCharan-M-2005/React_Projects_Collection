import React from 'react'
import './Portfolio.css'
export default function Portfolio() {
  return (
    <div className='main-container'>
        <div className='header-container'>
            <div className='header-left'>
                <h1 className='header-main-text'>My Portfolio</h1>
            </div>
            <div className='header-right'>
                <ul className='header-list'>
                    <a href='#about-container' className='header-list-items'>About</a>
                    <a href='#projects-container' className='header-list-items'>Projects</a>
                    <a href='#education-container' className='header-list-items'>Education</a>
                    <a href='#contact-container' className='header-list-items'>Contact</a>
                </ul>
            </div>
        </div>
        <div id='about-container'>
            <div className="text-container">
                <div className="text-area">
                    Hello! I am Gurucharan.
                </div>
                <div className='text-brief'>
                    I am developer. I am specialized in creating, designing, and implementing software solutions,<br></br>
                     applications, or systems using programming languages, frameworks, and tools to meet specific user needs or <br></br>
                     solve technological challenges. I often work collaboratively in teams, utilizing their problem-solving skills,<br></br>
                      creativity, and technical expertise to develop innovative and efficient software products.
                </div>
            </div>
        </div>
        <div id='projects-container'>
            <div className='projects-topic'>
                My Project Collections
            </div>
            <div className='project-list'>
                <li className='project-list-items'><a href='#' className='project-card'>Fundraiser Projects </a>- A Fundraiser App I had developed along with my teammates.</li>
                <li className='project-list-items'><a href='#' className='project-card'>22 React Project Collections</a> - A collection of 22 react projects i had developed.</li>
                <li className='project-list-items'><a href='#' className='project-card'>22 React-Native Project Collection</a> - A collection of 22 react native projects i had developed.</li>
            </div>
        </div>
        <div id='education-container'>
            <div className='education-topic'>
                My Academic Journey
            </div>
            <div className='education-list'>
                <li className='education-list-items'>B.E - CSE(2022-2026) - SKCET,Coimbatore </li>
                <li className='education-list-items'>Higher Secondary(2020-2022) - RKV MHSS,Jedarpalayam - 95.66%</li>
                <li className='education-list-items'>Secondary(2015-2020) - GHSS,Jedarpalayam - 98%</li>
            </div>
        </div>
        <div id='contact-container'>
            <div className='contact-topic'>
                My Contact details
            </div>
            <div className='contact-grid'>
                <div className='contact-grid-container'>
                    <a href='' className='contact-grid-items'>Phone</a><br></br>
                    <a href='' className='contact-grid-items'>Email</a><br></br>
                    <a href='' className='contact-grid-items'>Discord</a><br></br>
                </div>
                <div className='contact-grid-container'>
                    <a href='' className='contact-grid-items'>Github</a><br></br>
                    <a href='' className='contact-grid-items'>LinkedIn</a><br></br>
                    <a href='' className='contact-grid-items'>Internshala</a><br></br>
                </div>
                <div className='contact-grid-container'>
                    <a href='' className='contact-grid-items'>Instagram </a><br></br>
                    <a href='' className='contact-grid-items'>Facebook</a><br></br>
                    <a href='' className='contact-grid-items'>Twitter</a><br></br>
                </div>
            </div>
        </div>
    </div>
  )
}
