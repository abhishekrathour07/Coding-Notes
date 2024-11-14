'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const codingNotesTestimonialsData = [
  {
    quote:
      'Joining this coding platform transformed my understanding of programming and helped me discover my true potential. The resources are top-notch!',
    name: 'Rohit Singh',
    title: 'Web Development Student',
  },
  {
    quote:
      "The community and support at this platform are incredible. I've grown not just as a coder, but also as a developer, thanks to their comprehensive learning approach.",
    name: 'Abhishek Singh',
    title: 'Software Engineering Student',
  },
  {
    quote:
      "This platform gave me the tools and confidence to elevate my coding skills. I'm endlessly grateful for the personalized guidance.",
    name: 'Rahul Kumar Sah',
    title: 'Data Science Student',
  },
  {
    quote:
      'As a beginner, finding the right resources can be challenging, but this platform provided me with the guidance and support I needed to succeed.',
    name: ' Riya Kumari',
    title: 'Python Programming Student',
  },
  {
    quote:
      'The courses on algorithms and data structures were eye-opening. Highly recommend for anyone looking to deepen their understanding of coding!',
    name: 'kumar rishu ritik',
    title: 'Computer Science Student',
  },
  {
    quote:
      'The collaborative projects on this platform helped me apply my knowledge in real-world scenarios. An excellent choice for aspiring developers!',
    name: 'Bhuwon Bhandari',
    title: 'Full-Stack Development Student',
  },
  {
    quote:
      'The collaborative projects on this platform helped me apply my knowledge in real-world scenarios. An excellent choice for aspiring developers!',
    name: 'Maaz',
    title: 'data Science Student',
  },
];


function CodingNotesTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success from Coders</h2>
        <div className="flex justify-center w-full overflow-hidden px-2 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl min-w-4xl">
            <InfiniteMovingCards
                items={codingNotesTestimonialsData}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default CodingNotesTestimonials