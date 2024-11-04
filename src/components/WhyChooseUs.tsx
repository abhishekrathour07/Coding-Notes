
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const codingNotesContent = [
  {
    title: 'Unlock Your Coding Potential: A Tailored Learning Experience',
    description:
      'Start your journey in coding with resources and guidance designed just for you. Our personalized approach adapts to your learning style and pace, fostering creativity and skill development. At our coding notes platform, your goals align with our dedicated support, paving the way for programming mastery.',
  },
  {
    title: 'Interactive Learning: Real-Time Feedback',
    description:
      'Engage in a hands-on coding experience where feedback is instant, mirroring the collaborative nature of software development. This interactive approach boosts your understanding of coding concepts and enhances your ability to write effective code.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is regularly updated to incorporate the latest programming languages, frameworks, and best practices, ensuring that you’re always learning the most relevant and effective coding techniques. Stay ahead with a curriculum that evolves with the tech industry.',
  },
  {
    title: 'Endless Learning Opportunities',
    description:
      'With our extensive library of coding resources and diverse course offerings, you’ll constantly have new topics to explore. Our platform provides ongoing opportunities for growth, ensuring your coding skills are always progressing.',
  },
  {
    title: 'Community Collaboration and Networking',
    description:
      'Join a vibrant community of learners and professionals where you can share knowledge, collaborate on projects, and expand your network. Our platform encourages interaction and teamwork, essential for success in the tech world.',
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={codingNotesContent} />
    </div>
  )
}

export default WhyChooseUs