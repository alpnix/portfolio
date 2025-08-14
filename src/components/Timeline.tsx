import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 May - 2025 Aug"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>Amazon</i></h4>
            <p>
              Infrastructure, AI/ML, and Backend Systems
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 Aug - 2025 May"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>College Crisis Initiative</i></h4>
            <p>
              ML Infrastructure, Data Engineering, and LLMs
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 May - 2024 Aug"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>Forest Systems</i></h4>
            <p>
              FinTech, Cybersecurity, Generative AI, Full-stack Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 May - 2024 Aug"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant for CSC 372: NLP</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>Davidson College</i></h4>
            <p>
              Grading, Teaching, Office Hours (Data CATS)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 May - 2024 Aug"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Student Consultant)</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>Hurt Hub@Davidson</i></h4>
            <p>
              Web Development, Market Research, API Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 Jan - 2023 Aug"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>Fiverr</i></h4>
            <p>
              Data Scraping, Web Automation, Data Mining, Analysis, and Visualization
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 Sep - 2022 Jan"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle"><i>Magfi</i></h4>
            <p>
              NLP, Databases, and Microservices
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;