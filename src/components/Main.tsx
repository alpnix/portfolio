import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import '../assets/styles/Main.scss';
import AlpNiksarli from '../assets/images/Alp Subject.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={AlpNiksarli} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/alpnix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alpniksarli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/alpniks/" target="_blank" rel="noreferrer"><XIcon/></a>
          </div>
          <h1>Alp Niksarli</h1>
          <p>Software Developer && Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/alpnix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alpniksarli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/alpniks/" target="_blank" rel="noreferrer"><XIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;