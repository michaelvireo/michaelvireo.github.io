import React from 'react';

// import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
// import { ReactComponent as LeetCodeIcon } from '../assets/icons/leetcode.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/resume.svg';

export default function Header() {
    return (
        <footer className="footer clearfix">
            <div className="footer-social-links">
                {/* <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Twitter"
                    href="https://twitter.com/michaelvireo"
                >
                    <TwitterIcon className="social-link-icon" aria-label="Twitter" />
                </a> */}
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="LinkedIn"
                    href="https://www.linkedin.com/in/michaelvireo/"
                >
                    <LinkedInIcon className="social-link-icon" aria-label="LinkedIn" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Github" 
                    href="https://github.com/michaelvireo" 
                >
                    <GitHubIcon className="social-link-icon" aria-label="Github" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="E-mail"
                    href="mailto:michaelvireo@outlook.com"
                >
                    <MailIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="E-mail"
                    />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Phone Number"
                    href="tel:+19999999999"
                >
                    <WhatsAppIcon
                        className="social-link-icon"
                        viewBox="0 0 308 308"
                        aria-label="Phone Number"
                    />
                </a>

                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Résumé"
                    href="/assets/MichaelVireoResume.pdf"
                >
                    <ResumeIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="Résumé"
                    />
                </a>
            </div>
        </footer>
    );
}
