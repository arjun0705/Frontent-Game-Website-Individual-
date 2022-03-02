import React from 'react'

function Contact() {
    return (
        <div className='contact'>

            <div className='contactheading'> <h1> Contact Us </h1> </div>
            <div className='contactdata'>
                <div className='mobile'> Mobile No - <p>9112691270</p> </div>
                <div className='mobile'> Email - <p>arjunsamrat0705@gmail.com</p></div>
                <div className='links'>
                    <p className='followus'> -Follow Us On- </p>
                    <a href='https://www.facebook.com/'> <i class="fab fa-facebook"></i> </a>
                    <a href='https://www.instagram.com/'><i class="fab fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/arjun-samrat-23b7b11aa/'><i class="fab fa-linkedin"></i></a>
                </div>
                {/* <input></input>
                <div></div> */}
            </div>

        </div>
    )
}

export default Contact
