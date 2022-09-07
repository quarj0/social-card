import React from "react";
import React from 'react'

const body = () => {
  return (
    <div>
        <main className='main-contents'>
        <img src="./edited.png" width={150} alt='img'/>
        <h1 className='name'>Owusu Ansah K.</h1>
        <h2 className='info'>Programmer | Ethical Hacker</h2>
        <a href='#website'className='site'>cyber.site</a>
        <div className='button-container'>
        <button className='email' type='submit'>
        <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
        <a href='https://wa.me/qr/6YI5RWF7LP6OI1'>WhatsApp</a>
       </button>
       <button className='linkedin' type='submit'>
       <FontAwesomeIcon icon={faLinkedin} size="1x" />
       <a href='https://www.linkedin.com/kwadwo-owusu-ansah'>LinkedIn</a> </button>
       </div>
        <h3 className='about'>About</h3>
          I'm a professional web developer, ethical hacker and a graphic designer.
          I code in Python, Sql, C++ and JavaScript.
          I can be your best developer for mobile or destop apps that you need.
         <br></br> Currently I'm a student at the University Of Cape Coast offering a BSC in Information Technology.
         <br></br>I'm available for hiring or can employ me for your remote works.
            
        <h3 className='about'>Interest</h3>
            <p className='about-info'>
             I'm Interested to be working remotely for now on any project but with those mentioned.
             Additional project in graphic design, and microsoft works are also accepted.
             Research is my hobby so if you think you have something but I didn't mention
             it, please you can also test me on it. 
            </p>
      </main>
    </div>
  )
}

export default body;