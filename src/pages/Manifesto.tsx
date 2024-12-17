import React from "react";
import '../assets/styles/Manifesto.scss';

function Manifesto() {

  return (
    <div className="container" id="manifesto">
      <div className="about-section">
        <div className="content">
          <h1>Manifesto</h1>
        </div>

        <h2 id="design-manifesto-building-empathy-through-interaction">Design Manifesto: Building Empathy Through Interaction</h2>
        <p>Human-computer interaction (HCI) is more than the mechanics of technology and interfaces—it's about understanding and addressing the diverse needs of human beings. Over this semester, I've learned that design is a deeply human process, driven by empathy, iteration, and the balance between constraints and creativity. These lessons emerged not only from designing for functionality but from reflecting on the purpose and impact of these designs on their users.</p>
        <p>This manifesto captures five core principles that define my approach to design. Each principle draws directly from experiences in our design sprints, showcasing how the interplay between user needs, technology, and human factors shaped my perspective.</p>
        <hr />
        <h3 id="1-empathy-at-the-core-of-design-">1. <em>Empathy at the Core of Design</em></h3>
        <p>Empathy is the foundation of effective design. It enables us to understand the perspectives, struggles, and aspirations of the people we design for. Throughout our sprints, I found that immersing myself in the user's experience led to meaningful insights.</p>
        <h4 id="evidence-personas-and-need-identification">Evidence: Personas and Need Identification</h4>
        <p>In the “Design for Dimensions” sprint, we created personas for three users of a furniture website: Debby, Catherine, and Rose. These personas reflected diverse needs—from affordability to visual accessibility—and helped us tailor features like the “Room Preview” tool. Empathizing with users like Rose, who struggled with technology, guided our decision to prioritize simplicity and large images on the smartwatch interface.</p>
        <h4 id="reflection-">Reflection:</h4>
        <p>Empathy goes beyond listening; it requires action. By stepping into the shoes of these personas, we designed features that addressed real barriers users might face. Moving forward, I aim to foster deeper connections with users through interviews and immersive techniques to better understand their contexts.</p>
        <hr />
        <h3 id="2-iteration-as-a-pathway-to-refinement-">2. <em>Iteration as a Pathway to Refinement</em></h3>
        <p>Great designs are born from iteration. The design process is rarely linear—it's an evolving journey of experimentation, testing, and improvement.</p>
        <h4 id="evidence-re-design-and-extend-sprint">Evidence: Re-design and Extend Sprint</h4>
        <p>During the “Re-design and Extend” sprint, our iterative approach transformed abstract data about college students' mental health into engaging physical prototypes. Early feedback revealed challenges with our LEGO-based analytical model, such as unclear data labels. Incorporating these insights, we refined the prototype into a modular, accessible 4D representation with color-coded blocks and tactile markers.</p>
        <h4 id="reflection-">Reflection:</h4>
        <p>Iteration is not just about fixing flaws; it's about uncovering opportunities for innovation. This principle has shown me that embracing feedback and rethinking initial concepts leads to stronger, user-centered designs.</p>
        <hr />
        <h3 id="3-balancing-simplicity-and-functionality-">3. <em>Balancing Simplicity and Functionality</em></h3>
        <p>Designs must strike a balance between simplicity and the richness of their features. Overloading users with options or visuals can detract from their experience.</p>
        <h4 id="evidence-knotty-board-redesign">Evidence: Knotty &amp; Board Redesign</h4>
        <p>When redesigning Knotty &amp; Board's website, we focused on simplifying navigation to accommodate users with varying levels of technological literacy. For example, the smartwatch interface used “Apple Watch-style” bubbles to avoid crowding the small screen. At the same time, we preserved functionality by allowing customizable searches and intuitive navigation across devices.</p>
        <h4 id="reflection-">Reflection:</h4>
        <p>The art of design lies in knowing what to include and, equally, what to leave out. Future designs should prioritize clarity without sacrificing the richness of user experiences.</p>
        <hr />
        <h3 id="4-embracing-constraints-as-catalysts-">4. <em>Embracing Constraints as Catalysts</em></h3>
        <p>Constraints—be they technical, temporal, or resource-based—are often perceived as barriers. However, they can drive creativity by forcing designers to think critically and innovate within limits.</p>
        <h4 id="evidence-virtual-reality-game-design">Evidence: Virtual Reality Game Design</h4>
        <p>The “Design for Another World” sprint posed significant constraints. Limited time and resources pushed us to switch from Unity to A-Frame, simplifying development while retaining the immersive quality of the VR game. The shift to gaze-based controls was another creative solution that eliminated the need for manual input, enhancing accessibility.</p>
        <h4 id="reflection-">Reflection:</h4>
        <p>Constraints are opportunities in disguise. They encourage resourcefulness and ingenuity, qualities that are essential for impactful design. Adapting to these challenges has made me more confident in tackling complex problems with limited tools.</p>
        <hr />
        <h3 id="5-designing-for-inclusion-and-accessibility-">5. <em>Designing for Inclusion and Accessibility</em></h3>
        <p>An inclusive design considers the diverse needs of all users, particularly those who are often overlooked. Accessibility is not an afterthought; it's a core element of thoughtful design.</p>
        <h4 id="evidence-physicalization-of-mental-health-data">Evidence: Physicalization of Mental Health Data</h4>
        <p>In the persuasive physicalization sprint, we created an alarm clock that visualized data on sleep and mental health. Feedback from peers led us to add tactile markers and audio features, making the design accessible to users with visual impairments. Similarly, we used high-contrast colors in the analytical model to accommodate users with color blindness.</p>
        <h4 id="reflection-">Reflection:</h4>
        <p>Inclusion is about recognizing diversity and designing for it from the outset. As a designer, I'm committed to creating experiences that are accessible, equitable, and meaningful for all users.</p>
        <hr />
        <h3 id="conclusion-a-human-centered-future">Conclusion: A Human-Centered Future</h3>
        <p>This manifesto reflects the growth and insights I've gained throughout the semester. The principles of empathy, iteration, simplicity, creativity under constraints, and inclusion will guide my future designs, whether in HCI or other fields.</p>
        <p>As technology continues to evolve, so must our approach to design. My goal is to create solutions that resonate with users on a human level—solutions that not only meet functional needs but also enrich lives. The journey of design is one of perpetual learning, and I'm excited to continue exploring, creating, and refining in pursuit of this vision.</p>

      </div>
    </div>
  );
}

export default Manifesto;