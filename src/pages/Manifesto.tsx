import React from "react";
import '../assets/styles/Manifesto.scss';
import { Link } from "react-router-dom";

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
      src="../src/assets/images/Human-Computer-Interaction.avif"
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
      gave me a rare opportunity to slow down and ask: <strong>Why are we
      designing the way we do? And how can we design better for people?</strong>
    </p>
    <p>
      Throughout this course, I’ve reflected on a ton of my previous software
      projects and gained deeper insights into what I am currently trying to
      achieve with a direct-to-user technology startup, <strong>GrotN</strong>.
      I also couldn’t help but think back to a book I read during high school,
      Otto Scharmer’s <em>Theory U</em>. The book highlights the power of design
      thinking to create meaningful solutions by putting the user at the center.
      It reminds me that the design process is less about jumping to solutions
      and more about <strong>seeing, sensing, and iterating</strong> to create
      tools that empower people.
    </p>
    <p>
      This design manifesto reflects my growth and focuses on five key
      principles:
    </p>
    <ol>
      <li>Start with empathy</li>
      <li>Define problems clearly</li>
      <li>Iterate relentlessly</li>
      <li>Design inclusively</li>
      <li>Prototype for the real world</li>
    </ol>
  </section>

  <hr />

  <section className="section-empathy">
    <h3>Start with Empathy</h3>
    <p>
      The design process begins with empathy. Real design requires us to step
      into the user’s shoes, listen to their struggles, and see the world from
      their perspective. This idea came alive during the
      <strong>Needfinding Exercise</strong>, where I explored the challenges
      college students face in aligning their fitness and diet goals.
    </p>
    <p>
      For this project, I interviewed three people: Patrick, Oktay, and Anil.
      Their stories showed me how different relationships with diet and fitness
      goals could be. Here were the key outcomes:
    </p>
    <ul>
      <li>
        <strong>Keeping track of calories</strong> is harder than people think.
      </li>
      <li>
        <strong>Accountability matters</strong>—having a “fitness buddy” makes
        sticking to a plan easier.
      </li>
      <li>
        <strong>Consistency brings comfort</strong>—users want routines without
        feeling overwhelmed.
      </li>
    </ul>
    <img
      src="../src/assets/images/empathy-map.webp"
      alt="Empathy Map"
      className="content-image"
    />
    <p>
      Creating an <strong>empathy map</strong> helped me synthesize these
      stories and truly understand what users were going through. Empathy isn’t
      just about listening—it’s about seeing beyond the surface to design better
      solutions.
    </p>
  </section>

  <hr />

  <section className="section-define">
    <h3>Define Problems Clearly</h3>
    <p>
      Once you understand the user, the next step is to define the problem. As
      Albert Einstein said, “If I had an hour to solve a problem, I’d spend 55
      minutes thinking about the problem and 5 minutes thinking about
      solutions.”
    </p>
    <p>
      This principle became clear in the <strong>Knotty & Board</strong>
      project, where we created user personas to improve usability.
    </p>
    <img
      src="../src/assets/images/personas.png"
      alt="User Personas"
      className="content-image"
    />
    <p>
      These personas helped us view the problem from multiple lenses and
      understand pain points. Similarly, while prototyping the
      <strong>fitness-diet tool</strong>, narrowing the problem helped me focus
      on tracking calories in a simple, non-intrusive way.
    </p>
  </section>

  <hr />

  <section className="section-iterate">
    <h3>Iterate Relentlessly</h3>
    <p>
      Design is never perfect on the first try. The feedback loop of
      <strong>test, fail, improve</strong> became central to projects like the
      <strong>fitness-diet tool</strong> and the
      <strong>Design Sprint 2 visualization</strong>.
    </p>
    <ul>
      <li>
        <strong>Initial problem:</strong> Users found calorie tracking too
        manual and stressful.
      </li>
      <li>
        <strong>Iteration:</strong> Simplified the interface to prioritize
        calorie surplus as the main KPI.
      </li>
    </ul>
    <p>
      Through iteration, I learned that design evolves through continuous
      dialogue with users and stakeholders.
    </p>
  </section>

  <hr />

  <section className="section-inclusively">
    <h3>Design Inclusively</h3>
    <p>
      Inclusivity is central to good design. During the
      <strong>Campus Accessibility Project</strong>, I spent 24 hours
      navigating Davidson College as someone with mobility impairments.
    </p>
    <img
      src="../src/assets/images/accessibility-map.webp"
      alt="Accessibility Map"
      className="content-image"
    />
    <p>
      The project revealed how small design choices can make or break
      accessibility. Similarly, in our
      <strong>3D VR ball shooting game</strong>, we prioritized accessibility so
      the experience could engage multiple senses.
    </p>
  </section>

  <hr />

  <section className="section-prototype">
    <h3>Prototype for the Real World</h3>
    <p>
      Prototypes are meant for testing ideas, not for perfection. The
      <strong>3D VR ball shooting game</strong> and the
      <strong>Re-design and Extend</strong> assignment taught me the value of
      building intuitive tools that users can engage with effortlessly.
    </p>
    <img
      src="../src/assets/images/redesign-clock.webp"
      alt="Redesign Clock"
      className="content-image"
    />
    <p>
      Prototypes that engage multiple senses and prioritize simplicity create
      better user experiences.
    </p>
  </section>

  <hr />

  <section className="conclusion">
    <h3>Conclusion</h3>
    <p>
      This class transformed how I see design. I now think deeply about the
      <strong>why</strong> and <strong>how</strong> of technology. Design isn’t
      about adding features—it’s about solving real problems and empowering
      people.
    </p>
    <p>
      Otto Scharmer’s <em>Theory U</em> reminds us that design is a journey of
      listening, reflecting, and co-creating. Moving forward, I will carry these
      principles into every project:
    </p>
    <ul>
      <li>Start with empathy.</li>
      <li>Define problems clearly.</li>
      <li>Iterate relentlessly.</li>
      <li>Design inclusively.</li>
      <li>Prototype for the real world.</li>
    </ul>
    <blockquote>
      “The ultimate aim of design is not to create for humans, but to create   
       <strong> with </strong> humans.”
    </blockquote>
  </section>
</div>

    </div>
  );
}

export default Manifesto;
