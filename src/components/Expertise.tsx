import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faGear } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "OpenAI",
    "Pinecone",
    "Hugging Face",
    "LangChain",
    "Antrophic",
    "Perplexity",
    "RAG", 
    "Streamlit",
    "TensorFlow",
    "PyTorch",
    "FastAPI", 
    "Defang", 
];

const labelsSecond = [
    "Python",
    "Playwright",
    "Flask",
    "HTTP",
    "Rust",
    "Git",
    "Linux",
    "Pandas",
    "Selenium",
    "BeautifulSoup",
    "Go",
    "RegEx"
];

const labelsThird = [
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

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLMs</h3>
                    <p>Built multiple retrieval (RAG) based agentic systems, and won multiple awards at hackathons. Worked on web agents automating coding, web search, etc. Research includes RL environments, post-training, and context optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>Crawling & Automation</h3>
                    <p>I am confident in building high-scale data pipelines and collection automation. Experience with data acquisiton, annotation, and augmentation. I worked professionally for 3 years on web-based data collection through 50+ freelancing projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built multiple web applications from scratch using modern technologies such as Next and Express. I have a strong proficiency in Python and its various backend frameworks such as Django, Flask, FastAPI.</p>
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