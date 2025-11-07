import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/alpnix" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/alpniksarli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://x.com/alpniks/" target="_blank" rel="noreferrer"><XIcon/></a>
        <a href="https://scholar.google.com/citations?user=Oj6Qr6YAAAAJ&hl=en" target="_blank" rel="noreferrer"><SchoolIcon/></a>
      </div>
      <p><a href="https://github.com/alpnix" target="_blank" rel="noreferrer">Alp Niksarli</a> &#169; 2025</p>
    </footer>
  );
}

export default Footer;