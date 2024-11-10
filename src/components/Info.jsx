import React from 'react'
import Profile from '../assets/profile-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
        <div className="info--wrapper">
            <img className="info--photo" src={ Profile } alt="" />
            <h1 className="info--name">Mike Soo</h1>
            <h2 className="info--job-title">Frontend Developer</h2>
            <p className="info--website">
                <a
                    className="info--website-link"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    website coming soon
                </a>
            </p>
            <div className="info--btn-wrapper">
                <address>
                    <a href="mailto:mikethedopetoast@gmail.com">
                        <button className="info--btn btn--email">
                            <FontAwesomeIcon icon={ faEnvelope } className="btn--icon" />
                            Email
                        </button>
                    </a>
                </address>
                
                <a
                    href="https://www.linkedin.com/in/mikewenjinsoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="info--btn btn--linkedin">
                        <FontAwesomeIcon icon={ faLinkedin } className="btn--icon" />    
                        Linkedin
                    </button>
                </a>
                
            </div>
        </div>
    )  
}