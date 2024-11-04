'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
  {
    title: 'Understanding JavaScript Fundamentals',
    description:
      'Dive deep into the basics of JavaScript and enhance your programming skills.',
    slug: 'understanding-javascript-fundamentals',
    isFeatured: true,
  },
  {
    title: 'The Art of Web Development',
    description:
      'Learn the craft of web development from experienced developers and industry experts.',
    slug: 'the-art-of-web-development',
    isFeatured: true,
  },
  {
    title: 'Mastering Your Code Editor',
    description:
      'Advanced techniques to effectively use your code editor for maximum productivity.',
    slug: 'mastering-your-code-editor',
    isFeatured: true,
  },
  {
    title: 'Introduction to Data Structures and Algorithms',
    description:
      'Get started with data structures and algorithms with this comprehensive overview.',
    slug: 'introduction-to-data-structures-and-algorithms',
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: 'Version Control with Git',
    description:
      'Enhance your collaboration skills with expert tips on using Git for version control.',
    slug: 'version-control-with-git',
    isFeatured: true,
  },
  {
    title: 'Effective Coding Practices',
    description:
      'Learn how to write clean, maintainable code and improve your coding habits.',
    slug: 'effective-coding-practices',
    isFeatured: true,
  },
];


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars