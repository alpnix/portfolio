import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faGear } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind",
    "Next.js",
    "Django",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Python",
    "Flask",
    "Requests",
    "Git",
    "Linux",
    "Pandas",
    "Selenium",
    "BeautifulSoup",
    "RegEx"
];

const labelsThird = [
    "Python",
    "OpenAI",
    "Pinecone",
    "Hugging Face",
    "Antrophic",
    "Perplexity",
    "RAG", 
    "Streamlit",
    "TensorFlow",
    "PyTorch",
    "FastAPI", 
    "Defang", 
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built multiple web applications from scratch using modern technologies such as Next and Express. I have a strong proficiency in Python and its various backend frameworks such as Django, Flask, FastAPI.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>Scraping & Automation</h3>
                    <p>I collect data from the web, test the security of online applications, and automate certain tasks from the cloud. I worked professionally for 3 years in the area using Python through tons of freelancing projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Worked on various machine learning/deep learning projects to fit the data. Currently, utilizing RAG to build agentic frameworks. I am also studying GenAI with a strong focus on building Large Language Models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;