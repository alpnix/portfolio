import React from "react";
import AdaHacks from '../assets/images/adahacks.jpeg';
import AvingerCertificate from '../assets/images/avinger-certificate.jpeg';
import AlpCheck from '../assets/images/Alp-Niksarli-Check.jpg';
import Spyder from '../assets/images/Spyder.jpeg';
import Arxiv from '../assets/images/Arxiv.jpeg';
import OpenContext from '../assets/images/open-context.jpeg';
import Pragma from '../assets/images/pragma.jpeg';
import Patent from '../assets/images/Patent.png';
import AviCenna from '../assets/images/avicenna.jpg';
import HCI from '../assets/images/Human-Computer-Interaction.avif';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Achievements</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://devpost.com/software/garden-finance" target="_blank" rel="noreferrer"><img src={AdaHacks} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alpnix/AdaHack2025" target="_blank" rel="noreferrer"><h2>Garden Finance</h2></a>
                <p>Won first place 🥇 and Optiver prize category in Ada Hacks.</p>
            </div>

            <div className="project">
                <a href="https://hurthub.davidson.edu/alp-niksarli-27-tackles-dutch-housing-crisis-with-avinger-impact-fund-award/" target="_blank" rel="noreferrer"><img src={AvingerCertificate} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hurthub.davidson.edu/alp-niksarli-27-tackles-dutch-housing-crisis-with-avinger-impact-fund-award/" target="_blank" rel="noreferrer"><h2>Avinger Impact Fund</h2></a>
                <p>Won first place 🥇 in the pitch competition, winning $10,000 and other investment offers.</p>
            </div>

            <div className="project">
                <a href="https://hurthub.davidson.edu/alp-niksarli-27-transforming-housing-with-grotn-and-2500-from-the-nisbet-venture-fund/" target="_blank" rel="noreferrer"><img src={AlpCheck} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hurthub.davidson.edu/alp-niksarli-27-transforming-housing-with-grotn-and-2500-from-the-nisbet-venture-fund/" target="_blank" rel="noreferrer"><h2>Nisbet Venture</h2></a>
                <p>Pitched my startup idea, GrotN. Earned $2,500 winning the audience choice award after my presentation.</p>
            </div>

            <div className="project">
                <a href="https://devpost.com/software/spyder-k8qf2o" target="_blank" rel="noreferrer"><img src={Spyder} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alpnix/spyder/" target="_blank" rel="noreferrer"><h2>Spyder</h2></a>
                <p>Won first place 🥇 and the best use of Defang at VandyHacks with a research visualization tool.</p>
            </div>

            <div className="project">
                <a href="https://arxiv.org/abs/2311.07591" target="_blank" rel="noreferrer"><img src={Arxiv} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://arxiv.org/abs/2311.07591" target="_blank" rel="noreferrer"><h2>Published Paper</h2></a>
                <p>Published a paper on properly classfying middle school books using NLP and neural networks.</p>
            </div>

            <div className="project">
                <a href="https://devpost.com/software/open-context" target="_blank" rel="noreferrer"><img src={OpenContext} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alpnix/open-context" target="_blank" rel="noreferrer"><h2>Open Context</h2></a>
                <p>Won best AI project at HackHarvard with a multimodal AI academic content management platform.</p>
            </div>

            <div className="project">
                <a href="https://devpost.com/software/pragma-hx4nk6" target="_blank" rel="noreferrer"><img src={Pragma} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alpnix/pragma/" target="_blank" rel="noreferrer"><h2>Pragma</h2></a>
                <p>Won best place and internship offer by Infosys at HackNC with an automated data collection tool.</p>
            </div>

            <div className="project">
                <a href="https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2025058589" target="_blank" rel="noreferrer"><img src={Patent} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://patentscope.wipo.int/search/en/detail.jsf?docId=WO2025058589" target="_blank" rel="noreferrer"><h2>Patent Pending</h2></a>
                <p>A patent on a method for determining the amount of salt in structures.</p>
            </div>

            <div className="project">
                <a href="https://devpost.com/software/avi-cenna" target="_blank" rel="noreferrer"><img src={AviCenna} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alpnix/AviCenna" target="_blank" rel="noreferrer"><h2>AviCenna</h2></a>
                <p>Won best use of Taipy at HopHacks with a medical chatbot assistant.</p>
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