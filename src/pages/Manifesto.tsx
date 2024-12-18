import React from "react";
import '../assets/styles/Manifesto.scss';
import { Link } from "react-router-dom";

import HCI from '../assets/images/Human-Computer-Interaction.avif';
import EmpathyMap from '../assets/images/empathy-map.webp';
import Personas from '../assets/images/personas.png';
import AccessibilityMap from '../assets/images/accessibility-map.webp';
import RedesignClock from '../assets/images/redesign-clock.webp';


function Manifesto() {
  return (
    <div className="container" id="manifesto">
      {/* Back button at the top left with hover effect */}
      <nav className="back-button-nav" style={{ position: 'absolute', top: '2.5em', left: '2.5em' }}>
        <Link
          to="/hci"
          className="back-button"
          style={{
            textDecoration: 'none',
            fontSize: '2em',
            color: '#fff',
            padding: '0.2em 0.5em',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#555')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          &larr;
        </Link>
      </nav>

      <div className="design-manifesto">
  <header className="header">
    <img
      src={HCI}
      alt="Human-Computer Interaction"
      className="header-image"
    />
    <h1 className="title">Design Manifesto</h1>
    <h2 className="subtitle">Reflections on my HCI Journey</h2>
  </header>

  <hr />

  <section className="introduction">
    <h3>Introduction</h3>
    <p>
      Nowadays, smart technology has expanded into every corner of our lives.
      From AI models that mimic human creativity to tools that optimize daily
      tasks, technology now shapes how we work, live, and connect. As someone
      who has spent time building software projects to help others, this class
      gave me a rare opportunity to slow down and ask: <strong> Why are we
      designing the way we do? And how can we design better for people? </strong>
    </p>
    <p>
      Throughout this course, I've reflected on a ton of my previous software
      projects and gained deeper insights into what I am currently trying to
      achieve with a direct-to-user technology startup, <strong> GrotN</strong>.
      I also couldn't help but think back to a book I read during high school,
      Otto Scharmer's <em> Theory U</em>. The book highlights the power of design
      thinking to create meaningful solutions by putting the user at the center.
      It reminds me that the design process is less about jumping to solutions
      and more about <strong> seeing, sensing, and iterating</strong> to create
      tools that empower people.
    </p>
    <p>
    The journey through Human-Computer Interaction (HCI) has certainly shifted how I view design in certain aspects. This design manifesto reflects my growth and focuses on five key principles that now represents how I see a design process: 
    </p>
    <ol>
      <li>Start with empathy</li>
      <li>Define problems clearly</li>
      <li>Iterate relentlessly</li>
      <li>Design inclusively</li>
      <li>Prototype for the real world</li>
    </ol>

    <p>Each principle, shaped by projects, reflections, and failures, represents how design can go beyond aesthetics and functionality to become <strong>human-centered, inclusive, and impactful</strong>. I will be going over these projects, reflections and results for each of these steps that we went this Fall!</p>
  </section>

  <hr />

  <section className="section-empathy">
    <h3>Start with Empathy</h3>
    <p>
    The design process begins with empathy. As designers, we often assume we know what users want. But real design requires us to step into their shoes, listen to their struggles, and see the world from their perspective.
     This idea came alive during the
      <strong> Needfinding Exercise</strong>, where I explored the challenges college students face in aligning their fitness and diet goals.
    </p>
    <p>
    For this project, I interviewed three people: Patrick, Oktay, and Anil. All these college students had fitness goals but very different relationships with diet and accountability. Patrick struggled to eat in a caloric surplus due to external factors like sleep and social activities. Oktay emphasized the role of social accountability, while Anil highlighted the importance of consistency in diet plans.  
    </p>
    <img
      src={EmpathyMap}
      alt="Empathy Map"
      className="content-image"
    />
    <p>To synthesize their stories, I created an <strong> empathy map </strong> that visualized what users think, feel, say, and do. This map helped me uncover insights that would not be able to generate on my own. Here were some outcomes that I had that were actual user stories and problems:  </p>
    <ul>
      <li>
        <strong> Keeping track of calories</strong> is harder than people think.
      </li>
      <li>
        <strong> Accountability matters: </strong>having a “fitness buddy” makes
        sticking to a plan easier.
      </li>
      <li>
        <strong> Consistency brings comfort: </strong>users want routines without
        feeling overwhelmed.
      </li>
    </ul>
   
    <p>
    This exercise taught me that empathy isn't just about listening, it's about seeing beyond the surface. By understanding my users' struggles and motivations, I was able to have a better idea of what to design for the future steps of the process just because I knew what the users were going through and exactly what they would and they would not like. 
    </p>
  </section>

  <hr />

  <section className="section-define">
    <h3>Define Problems Clearly</h3>
    <p>
      Once you understand the user, the next step is to define the problem. As
      Albert Einstein said, “If I had an hour to solve a problem, I'd spend 55
      minutes thinking about the problem and 5 minutes thinking about
      solutions.” 
    </p>
    <p>
    This was a quote that highly resonated with my semester. 
    </p>
    <p>I see hackathons as an incredibly accelerated version of a design process 
      with more emphasize on the <strong> hacking</strong> part. However, the most significant step 
      in all the hackathons I attended this year was coming up with a real problem to 
      solve. This was the most important step to success in almost all the projects I 
      worked on, as also supported by the biggest startup school in the world, YCombinator: </p>
      <blockquote>
      Make something people want
      </blockquote>
      <p>A well-defined problem makes solutions much easier to find.

This principle became clear in the <strong> Knotty & Board</strong> project, where we redesigned a website to improve usability. To define the problem, my team and I created **user personas** that represented different types of users:  
</p>
    <img
      src={Personas}
      alt="User Personas"
      className="content-image"
    />
    <ul>
      <li>A student who values budget-friendly, space-saving solutions </li>
      <li>An older user who struggles with technology and values simplicity</li>
    </ul>

    <p>Personas allowed us to view the problem from multiple lenses. Instead of jumping to solutions, we took time to analyze:  </p>
    <ul>
      <li>What are the pain points users face?</li>
      <li>What outcomes do they value most? </li>
      <li>How can we balance their needs within a single interface?</li>
    </ul>
    <p>By defining the problem clearly, we realized our redesign wasn't just about improving visuals. Rather, it was more so about creating a tool that addressed diverse user goals on diverse technological devices based on their demographics too. </p>
    <p>
    Similarly, this principle also shaped my approach to prototyping the <strong> fitness-diet tool</strong>, the app I was building based on my findings from the previous emphathy section. Here, I had to narrow the problem to tracking calories in a simple, non-intrusive way focusing on the empathy map and user personas from the previous exercise.
    </p>

  </section>

  <hr />

  <section className="section-iterate">
    <h3>Iterate Relentlessly</h3>
    <p>
    Design is almost never perfect on the first try. It's an iterative 
    feedback loop process of <strong>testing, failing, learning, and improving</strong>. 
    One of the most valuable lessons I learned in this class was to taking feedback 
    from as many people as possible as almost everybody has something to add. 
    In this context, either embracing failure or not seeing it as an actual failure 
    but a step in the design process also helped massively in the improvmenet steps.   
    </p>
    <p>This principle was central to multiple projects (maybe almost all), 
      including but not limited to the <strong>fitness-diet tool</strong> and the <strong>Design Sprint 2 visualization</strong>. </p>
      <p>For the fitness-diet tool, I started with basic sketches based on user insights. I shared these prototypes with classmates, gathered feedback, and improved the design:  </p>

    <ul>
      <li>
        <strong> Initial problem:</strong> Users found calorie tracking too
        manual and stressful.
      </li>
      <li>
        <strong> Iteration:</strong> Simplified the interface to prioritize
        calorie surplus as the main KPI.
      </li>
    </ul>
    <p>
      Similarly, in Design Sprint 2, me and my team visualized data around college students' mental health. Early versions were cluttered and hard to interpret. By gathering feedback and iterating, we refined the visuals, introducing opacity-based scatterplots and interactive elements to make the visualization and their interpretations more intuitive.  
    </p>
    <p>The <strong>feedback loop</strong> which mostly consists of <em>test, fail, improve</em> makes all the difference. Through iteration, I learned that design is never exactly “finished.” It evolves through continuous dialogue with users and stakeholders.
</p>
  </section>

  <hr />

  <section className="section-inclusively">
    <h3>Design Inclusively</h3>
    <p>
    Inclusivity is at the heart of good design. A tool that excludes people, 
    whether it is due to physical barriers, cognitive challenges, or other factorsm, 
    fails the main purpose of working for <strong>humans</strong>. This realization hit me
     during the <strong>Campus Accessibility Project</strong>, where I spent 24 hours navigating 
     Davidson College as someone with mobility impairments. The assignment even made 
     me realize new spots, paths, or entrances on campus and has impacted my way of 
     walking around since then.
    </p>
    <p>I focused on five buildings: VAC, Cannon, Sentelle, Watson, and Chambers. The experience was eye-opening. For example:</p>
    <ul>

      <li><strong>Positive aspects:</strong> Many buildings had accessible entrances and powered doors.</li>
      <li><strong>Negative aspects:</strong> Some entrances were hidden, lacked powered doors, or required navigating stairs. </li>
    </ul>
    <img
      src={AccessibilityMap}
      alt="Accessibility Map"
      className="content-image"
    />
    <p>
    The reflection made me more aware of how <strong>small design choices</strong> can make or break
      accessibility like installing powered doors or removing stairs, can transform accessibility for a big population. 
    </p>
    <p>I also tried to carry this lesson into other projects, 
      like the <strong>3D VR ball shooting game</strong>, where we designed immersive 
      experiences that engaged multiple senses. We wanted to make sure to 
      follow the basic accessbility guidelines to make sure everyone can access 
      the game, even without a VR headset at their expense.</p>

    <p>Inclusive design isn't just for people with disabilities. It is an essential thought process that benefits everyone with many different cases. A slight thought by the designer put onto the design can create life-changing experience for thousands of users.</p>
  </section>

  <hr />

  <section className="section-prototype">
    <h3>Prototype for the Real World</h3>
    <p>
    The final step is to build prototypes that work in real-world settings. 
    Prototypes aren't about perfection. They are meant for testing ideas 
    quickly and learning from them. In essence <strong>iterating</strong>.  
    </p>
    <p>The <strong>3D VR ball shooting game</strong> we designed is a perfect example. Using sight and rotation based controls, we built an immersive experience that engaged the user's head movement, vision, and hearing. The simplicity of the design made the game intuitive, showing that good prototypes don'’'t have to be complicated. While building this game, we always made sure to let our friends play the game and obtain constant feedback on our prototype</p>
    <p>Similarly, in the <strong>Re-design and Extend assignment</strong>, we focused on simplifying user interactions. By removing unnecessary elements and improving navigation, we created tools and prototypes that users could understand immediately. By designing both our bar charts and clock designs from my <a href="https://medium.com/@khnguyen_23014/designing-for-understanding-the-impact-of-exercise-sleep-and-gpa-on-mental-health-among-u-s-4378ce063dc8">Design Sprint 2</a>, we aimed to go for a simple and interactive design for the users. </p>

    <img
      src={RedesignClock}
      alt="Redesign Clock"
      className="content-image"
    />
    <p>Both projects reinforced a key lesson: prototypes should <strong>engage multiple senses</strong> and prioritize <strong>simplicity</strong>. The goal isn’t to build something flashy. Instead, it’s to build something that users can interact with and understand effortlessly.</p>

  </section>

  <hr />

  <section className="conclusion">
    <h3>Conclusion</h3>
      <p>This had an effect on certain aspect of my perspective related to design and hows and whys of it. My focus has shifted from being a user of technology (and possibly even a builder of technology) to thinking deeply about <strong>why and how</strong> it's built. Design isn't about adding features for the sake of it. It's about creating tools that solve real problems and empower people. </p>
      <p>Otto Scharmer's <em>Theory U</em> reminds us that design is a journey of <strong>listening, reflecting, and co-creating</strong>. As I continue my work with my startup GrotN and beyond, I will carry forward the principles I've learned throughout the design processes of this class:</p>
      <ul>
      <li>Start with empathy.  </li>
      <li>Define problems clearly.  </li>
      <li>Iterate relentlessly.  </li>
      <li>Design inclusively.  </li>
      <li>Prototype for the real world.  </li>
      </ul>
      <blockquote>
      The ultimate aim of design is not to create for humans, but to create <strong>with</strong> humans.
      </blockquote>
      <p>Great design starts with understanding people. It ends with solutions that make life just a little bit better.  </p>
  </section>
      
  </div>

    </div>
  );
}

export default Manifesto;
