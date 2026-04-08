import React from 'react';

import ProfilePictureIcon from '../assets/images/profile.jpeg';

export default function Home() {
    return (
        <div className="home-page-container">
            <div className="home-container__inner home-container__animated">
                <figure>
                    <img className="home-profile-pic" alt="Profile" src={ProfilePictureIcon} />
                </figure>
                <article>
                    <h1 className="home-title">
                        Michael Vireo
                    </h1>
                    <p className="home-description">
                        Full Stack Software Engineer | React
                    </p>
                </article>
            </div>
        </div>
    );
}
