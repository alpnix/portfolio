import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/alpnix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/alpniksarli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p><a href="https://github.com/alpnix" target="_blank" rel="noreferrer">Alp Niksarli</a> &#169; 2025</p>
    </footer>
  );
}

export default Footer;