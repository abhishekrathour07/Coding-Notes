'use client';

import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Image from 'next/image';
import { User, Bug } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';
function AboutUs() {
    const aboutUsData = {

        title: " About Us",
        intro: "Welcome to CodingNotes, your trusted partner in mastering the art of coding and development.Our mission is to provide accessible, quality resources to help you thrive in the world of programming.",
        motive: "At CodingNotes, we believe that coding is for everyone. We strive to empower learners through interactive courses , personalized learning paths, and a supportive community.",
        subTitle: "Developer",
        aboutDev: 'I am a dedicated final-year BCA student with a strong passion for web development. Specializing in creating user-friendly websites, I have successfully built projects like "Coding Notes," which serves as a valuable resource for fellow students.',
        name: "Abhishek Singh",
        profession: "Full Stack Developer"

    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

            <div className="max-w-2xl mx-auto p-4 relative z-10">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    {aboutUsData.title}
                </h1>

                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    {aboutUsData.intro}
                </p>

                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    {aboutUsData.motive}
                </p>

                {/* Values section */}
                <div className="mt-8">
                    <h2 className="text-xl md:text-4xl sm:text-3xl font-semibold text-white mb-4 text-center">
                        {aboutUsData.subTitle}
                    </h2>
                    <BackgroundGradient className='p-0'>
                        <div className='w-auto bg-[#111827] py-6 gap-4 px-2 rounded-3xl flex flex-col overflow-hidden items-center '>
                            <div className='hover:bg-blue-950 rounded-lg'>
                                <a href='https://github.com/abhishekrathour07'>
                                    <Image src="/courses/abhishek.png" alt="author img" width={200} height={400} className='opacity-70 hover:opacity-10 rounded-lg  transition duration-500' />
                                </a>
                            </div>
                            <div className='flex flex-col items-center gap-4 justify-center '>
                                <h4 className='text-neutral-500 max-w-lg mx-auto text-sm text-center'>{aboutUsData.aboutDev}</h4>
                                <p className='flex gap-2'> <User />{aboutUsData.name}</p>
                                <p className='flex gap-2'><Bug />{aboutUsData.profession}</p>
                            </div>
                        </div>
                    </BackgroundGradient>
                </div>

                {/* Closing statement */}
                <p className="text-neutral-500 max-w-lg mx-auto mt-6 text-sm text-center">
                    Join us on this journey, and lets explore the endless possibilities that coding offers. We&apos;re here to support you every step of the way.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
