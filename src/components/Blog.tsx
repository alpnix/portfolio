import React from "react";
import KnottyBoard from '../assets/images/knotty-board.webp';
import Understanding from '../assets/images/understanding.webp';
import Redesign from '../assets/images/redesign-extend.webp';
import AnotherWorld from '../assets/images/another-world.png';
import '../assets/styles/Project.scss';

function Blog() {
    return(
    <div className="projects-container" id="projects">
        <h1>Design Sprints</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://medium.com/@alsmith_29721/design-sprint-1-knotty-board-0fe8792461db" target="_blank" rel="noreferrer"><img src={KnottyBoard} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@alsmith_29721/design-sprint-1-knotty-board-0fe8792461db" target="_blank" rel="noreferrer"><h2>Design for Dimensions</h2></a>
                <p></p>
            </div>
            <div className="project">
                <a href="https://medium.com/@khnguyen_23014/designing-for-understanding-the-impact-of-exercise-sleep-and-gpa-on-mental-health-among-u-s-4378ce063dc8" target="_blank" rel="noreferrer"><img src={Understanding} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@khnguyen_23014/designing-for-understanding-the-impact-of-exercise-sleep-and-gpa-on-mental-health-among-u-s-4378ce063dc8" target="_blank" rel="noreferrer"><h2>Design for Understanding</h2></a>
                <p></p>
            </div>
            <div className="project">
                <a href="https://medium.com/@pleary03/design-sprint-design-for-another-world-a1330e58e521" target="_blank" rel="noreferrer"><img src={AnotherWorld} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@pleary03/design-sprint-design-for-another-world-a1330e58e521" target="_blank" rel="noreferrer"><h2>Design for Another World</h2></a>
                <p></p>
            </div>
            <div className="project">
                <a href="https://medium.com/@hci_enjoyer/draft-for-re-design-and-extend-making-mental-health-tangible-4cd0d988ba27" target="_blank" rel="noreferrer"><img src={Redesign} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@hci_enjoyer/draft-for-re-design-and-extend-making-mental-health-tangible-4cd0d988ba27" target="_blank" rel="noreferrer"><h2>Re-design and Extend</h2></a>
                <p></p>
            </div>
        </div>
    </div>
    );
}

export default Blog;