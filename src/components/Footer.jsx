import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
        <a
            href="https://github.com/mikethedopetoast"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
        </a>
        <a
            href="https://www.instagram.com/mikethedopetoast/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faInstagram} className="footer--icon" />
        </a>
        </div>
    )
}