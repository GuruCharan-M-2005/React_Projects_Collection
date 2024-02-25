import React,{useState} from 'react';
import './AboutPage.css'
import axios from 'axios'
import a from './agreement.mp4'
import b from './rating.mp4'
import c from './success.mp4'
import d from './telephone-book.mp4'

const AboutPage = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
  
    const sendMessage = async() => {
      await axios.post('http://localhost:3001/send', { message,email })
      .then(() => {
        console.log("Message sent successfully");
        setMessage('');
        setEmail('')
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    };
  return (
    <div className="about-page-container" >
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.51346885513!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708864197688!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <marquee className='marquee-div' behavior="scroll" direction="left">
        <p className='marquee-tag'>100% Quality, 100% secure application used for business, check it out now.. </p>
      </marquee>
      <div className='form-zone'>
        <div className='pics-class'>
        <video autoPlay loop muted className='video' width='60px' height='60px' style={{borderRadius:'25px'}}><source src={a} type='video/mp4' /></video>                 
            <h1>Contact us </h1>
        </div>
        <input type='text'  className='form-box' placeholder='Enter your Email'  onChange={(e) => setEmail(e.target.value)} />
        <input type='text'  className='form-box' placeholder='Enter your Number'  onChange={(e) => setMessage(e.target.value)} /> <br></br>
        <button className='form-button' onClick={sendMessage}>Send Message</button>
     </div>
     <div className='contact-zone'>
        <div className='contact-grid-1'>
            <div className='pics-class'>
                <video autoPlay loop muted className='video' width='60px' height='60px'style={{borderRadius:'25px'}}><source src={b} type='video/mp4' /></video>                 
                 <h2>ABOUT</h2>
            </div>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected. We are making this universal.</p>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected. We are making this universal.</p>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected. We are making this universal.</p>
        </div>
        <div className='contact-grid-2'>
            <div className='pics-class'>
            <video autoPlay loop muted className='video' width='60px' height='60px' style={{borderRadius:'25px'}}><source src={c} type='video/mp4' /></video>                 
                <h2>Zone-1</h2>
            </div>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected.</p>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected.</p>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected.</p>
        </div>
        <div className='contact-grid-3'>
            <div className='pics-class'>
            <video autoPlay loop muted className='video' width='60px' height='60px' style={{borderRadius:'25px'}}><source src={d} type='video/mp4' /></video>                 
                <h2>Zone-2</h2>
            </div>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected.</p>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected.</p>
            <p className='conttent-p-tag'>Hello there, Welcome to our app. This is the best platform as you expected.</p>
        </div>
     </div>
    </div>
  );
};

export default AboutPage;
