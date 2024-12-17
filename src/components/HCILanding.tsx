import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import AlpNiksarli from '../assets/images/Alp Subject.png';

function HCILanding() {
  const mainTextStyle = {
    fontSize: "4.5em", 
  };
  const secondaryTextStyle = { 
    fontSize: "2em",
  }

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
          </div>
          <h1 style={mainTextStyle}>Alp Niksarli</h1>
          <p style={secondaryTextStyle}>HCI Design Portfolio</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/alpnix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alpniksarli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HCILanding;