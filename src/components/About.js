import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Michael! 👋'}</h1>
                <blockquote>
                    <p>💻 Full Stack Software Engineer | React</p>
                </blockquote>
                <p className="about-links-container">
                    {/* <a href="https://twitter.com/NAME">
                        <img
                            src="https://img.shields.io/twitter/follow/NAME?style=social"
                            alt="Twitter: @NAME"
                        />
                    </a> */}

                    <a href="https://www.linkedin.com/in/michaelvireo/">
                        <img
                            alt="Linkedin: @Michael-Vireo"
                            src="https://img.shields.io/badge/-Michael%20Vireo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/Michael-Vireo/"
                        />
                    </a>
                    <a href="https://github.com/michaelvireo">
                        <img src="https://img.shields.io/badge/-GitHub-181717?logo=github&link=https://github.com/michaelvireo" alt="GitHub: michaelvireo" />
                    </a>
                    <a href="mailto:michael.vireo@outlook.com">
                        <img
                            src="https://img.shields.io/badge/Email-michael.vireo@outlook.com-red"
                            alt="Email: michael.vireo@outlook.com"
                        />
                    </a>
                    <a href="tel:+19999999999">
                        <img src="https://img.shields.io/badge/Phone-9999999999-green" alt="Phone: +19999999999" />
                    </a>
                    
                </p>
                <p>
                    I am motivated by opportunities to solve meaningful problems, contribute to impactful work,
                    and bring strong analytical thinking 🧠 to challenging environments.
                </p>
                <p>
                    I strive to be dependable, adaptable, and results-oriented, with the ability to work well
                    both independently and as part of a collaborative team 🤝.
                </p>
                <p>
                    I am always looking to continue learning 📚, expand my skill set, and apply my background in
                    ways that create value for organizations and the people they serve.
                </p>
                <p>
                    Outside of work, I enjoy staying active 💪, learning new things, and connecting with others.
                    Please feel free to reach out if you would like to connect 📧
                </p>

                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>Developer Tools</td>
                        <td>GitHub, Docker, Postman, Jenkins, Visual Studio, VirtualBox, Jira, Confluence</td>
                    </tr>
                    <tr>
                        <td>Technologies</td>
                        <td>React, React Native, Node.js, Expo, HTML5, CSS, PostgreSQL, Swift, Gradle</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>Python, JavaScript, Java, Go, C, C++, C#</td>
                    </tr>
                    <tr>
                        <td>Analytics & Business Tools</td>
                        <td>Excel, Tableau, Simio, Minitab</td>
                    </tr>
                    {/* <tr>
                        <td>Artificial Intelligence</td>
                        <td>Machine Learning, Deep Learning, Neural Networks</td>
                    </tr>
                    <tr>
                        <td>Frameworks & Libraries</td>
                        <td>PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy</td>
                    </tr>
                    <tr>
                        <td>Analytics & Visualization</td>
                        <td>Jupyter Notebook, Matplotlib, Seaborn, Tableau, Excel</td>
                    </tr>
                    <tr>
                        <td>Cloud & MLOps</td>
                        <td>AWS Lambda, EC2, S3, RDS, Docker</td>
                    </tr> */}

                </table>
            </div>
        </div>
    );
}
