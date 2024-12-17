import React, {useState, useEffect} from "react";
import {
  HCILanding,
  About,
  HCINavigation,
  Blog,
  Footer,
} from "../components";
import FadeIn from '../components/FadeIn';
import '../index.scss';

function HCI() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <HCINavigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <HCILanding/> 
            <About/>
            <Blog/>
        </FadeIn>
        <Footer/>
    </div>
    );
}

export default HCI;