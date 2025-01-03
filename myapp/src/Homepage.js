import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Homepage.css';

function Homepage() {
    return (
        <SwipeableViews enableMouseEvents>
            {/* Each div below represents a swipable page */}
            
            {/* Header Section */}
            <div className="swipeable-page">
                <header className="header">
                    <h1>Muhammad Talha Tariq</h1>
                    <p>
                        <a href="https://github.com/talha110-cyber" target="_blank" rel="noopener noreferrer">GitHub</a> 
                        <a href="https://linkedin.com/in/talhatariq110" target="_blank" rel="noopener noreferrer"> LinkedIn</a> 
                        <a href="mailto:talha110tariq@gmail.com"> talha110tariq@gmail.com</a> 
                        <a href="tel:+923200401823" target="_blank" rel="noopener noreferrer"> +923200401823</a>
                    </p>
                </header>
            </div>

            {/* Education Section */}
            <div className="swipeable-page">
                <section className="education">
                    <h2>Education</h2>
                    <div className="education-item">
                        <h3>Lahore University of Management Sciences (LUMS)</h3>
                        <p>BS Computer Science | Sept 2021 - Present</p>
                        <p>Relevant Coursework: Data Structures, Algorithms, AI, Distributed Systems, and more.</p>
                    </div>
                    <div className="education-item">
                        <h3>Beaconhouse Defence Campus</h3>
                        <p>A levels | Sept 2019 - Aug 2021</p>
                        <p>Secured 100% Academic based scholarship </p>
                    </div>
                    <div className="education-item">
                        <h3>The City School MTC Lahore</h3>
                        <p>O levels | Sept 2016 - Aug 2019</p>
                        <p>1A* & 7As</p>
                    </div>
                </section>
            </div>

            {/* Projects Section */}
            <div className="swipeable-page">
                <section className="projects">
                    <h2>Projects</h2>
                    <div className="project-item">
                        <h3>CampusCousine</h3>
                        <a href="https://github.com/ShafayKashif/se2024" target="_blank" rel="noopener noreferrer">Project Link</a>
                        <p>Food ordering platform for students using the MERN stack as my Software Engineering project.</p>
                        <p>Skills: Full Stack Development, Software Development in a Team </p>
                    </div>
                    <div className="project-item">
                        <h3>Research Internship at Centre for Speech and Language Technologies</h3>
                        <p>2 Directed Research Projects with Dr. Agha Ali Raza (PhD. Carnegie Mellon)</p>
                        <p><a href="https://www.c-salt.org" target="_blank" rel="noopener noreferrer">(CSALT)</a></p>
                        <p>Skills: Evaluating Large Language Models, Researching upon how varying prompts result in different outputs across Models such as Llama, Mistral & Mixtral </p>
                    </div>
                </section>
            </div>

            {/* Volunteer Section */}
            <div className="swipeable-page">
                <section className="volunteer">
                    <p>Program Coordinator for The Citizens Foundation in association with CBS LUMS</p>
                    <p><a href={require('./TCF.jpeg')} target="_blank" rel="noopener noreferrer"> Certificate </a></p>
                    <p>Exchange Semester at University of Baltistan July - August 2022 </p>
                    <p><a href={require('./baltistan.jpeg')} target="_blank" rel="noopener noreferrer"> Certificate</a></p>
                    <p>Competed in the "COP in my City" Program </p>
                    <p><a href={require('./COP.jpeg')} target="_blank" rel="noopener noreferrer"> Certificate</a></p>
                </section>
            </div>
        </SwipeableViews>
    );
}

export default Homepage;
