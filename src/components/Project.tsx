import React from "react";
import HCI from '../assets/images/Human-Computer-Interaction.avif';
import AlpCheck from '../assets/images/Alp-Niksarli-Check.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://hurthub.davidson.edu/alp-niksarli-27-transforming-housing-with-grotn-and-2500-from-the-nisbet-venture-fund/" target="_blank" rel="noreferrer"><img src={AlpCheck} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hurthub.davidson.edu/alp-niksarli-27-transforming-housing-with-grotn-and-2500-from-the-nisbet-venture-fund/" target="_blank" rel="noreferrer"><h2>Nisbet Venture 2024</h2></a>
                <p>Pitched my startup idea, GrotN. Earned $2,500 winning the audience choice award after my presentation.</p>
            </div>
            <div className="project">
                <a href="/hci" target="_blank" rel="noreferrer"><img src={HCI} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/hci" target="_blank" rel="noreferrer"><h2>HCI Design Portfolio</h2></a>
                <p>This is my CSC 363, Human Computer Interaction, design portfolio as my final project. </p>
            </div>
        </div>
    </div>
    );
}

export default Project;