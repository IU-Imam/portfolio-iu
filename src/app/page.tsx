'use client'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import im from '../../public/meee.png'
import d from '../../public/d.png'
import mob from '../../public/mob.png'
import { useState } from 'react'
import React, { useEffect } from 'react';
import {
  BsFillArrowUpCircleFill
} from 'react-icons/bs'


export default function Home() {
  const [darkMood, setDarkMood] = useState(false)
  const [activeId, setActiveId] = useState('#services')
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let scrollPosition = 0;

    const isScrollingDown = () => {
      let scrollingDown = false;
      const newScrollPosition = window.pageYOffset;
      if (newScrollPosition > scrollPosition) {
        scrollingDown = true;
      }
      scrollPosition = newScrollPosition;
      return scrollingDown;
    };

    const handleScroll = () => {
      const scrollToTopButton = document.querySelector('[data-backToTopButton]');
      if (scrollToTopButton) {
      if (isScrollingDown() || window.pageYOffset === 0) {
        scrollToTopButton.classList.add('opacity-0', 'invisible');
        scrollToTopButton.classList.remove('opacity-100', 'visible');
      } else {
        scrollToTopButton.classList.remove('opacity-0', 'invisible');
        scrollToTopButton.classList.add('opacity-100', 'visible');
      }
    }
    };

    window.addEventListener('scroll', handleScroll);
 // Clean up the event listener when the component unmounts
 return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []); // Empty dependency array to run this effect only once on mount

return (
    <div className={darkMood ? 'dark' : ''}>
      <div
        data-backToTopButton
        role="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-4 right-2 z-10 bg-gradient-to-r from-cyan-500 to-teal-500 text-white group w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-back-to-top opacity-0 invisible hover:opacity-100 hover:visible transition-opacity duration-300"
      >
        <BsFillArrowUpCircleFill width="30" height="20" />
      </div>
      <main className='bg-white px-10 dark:bg-gray-900'>
      <nav className=' py-8 flex justify-between fixed t-0 z-10 w-4/5 mt-0 '>
            
            <h1 className='text-xl font-burtons dark:text-gray-300 '>
              Imam Uddin
            </h1>
            <ul className='flex items-center '>
              
              
        <li className="mr-2" >
        <Link
  href="#services"
  
            className='inline-block px-4 py-2 rounded-md ml-8 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:text-gray-300'
          >Services</Link>

        </li>
        <li className="mr-2" >
            <Link href="#works" 
            className="inline-block px-4 py-2 rounded-md ml-8 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:text-gray-300 ">Works</Link>
        </li>
        <li className="mr-2">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMood(!darkMood)}
                  className='cursor-pointer text-2xl dark:text-gray-400'
                />
              </li>
              <li className="mr-2" >
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:text-gray-300'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        <section className='min-h-screen justify-center '>
          
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium mt-14'>
              Imam Uddin
            </h2>
            <h3 className='text-2xl py-2 dark:text-yellow-50'>
              Freelance Programmer | AI Enthusiast
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
              Welcome to my portfolio website! I'm Imam Uddin, an AI enthusiast and freelance programmer passionate about harnessing the power of artificial intelligence to solve complex problems 
              and create innovative solutions. 
              With a strong background in programming and a keen interest in AI technologies, I offer a wide range of services to meet your project needs.
            </p>
          <div>
  <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
    <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></a>
    <a href="https://linkedin.com/in/imam-uddin-iu" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
    <a href="https://github.com/IU-Imam" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
  </div>
</div>

          <div className='relative mx-auto bg-gradient-to-b from-white rounded-full w-80 h-80 m-20 overflow-hidden px-2 shadow-lg dark:from-gray-500'>
            <Image src={im} alt='' layout='fill' objectFit='fill' />
          </div>
        </section>

        <section>
          <div className='dark:text-gray-300 py-24' id='services'>
            <h3 className='text-3xl py-1'>Service I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
              AI Solutions: From machine learning models to natural language processing systems, 
              I develop AI-powered solutions that leverage cutting-edge technologies to drive innovation and deliver tangible results.
            </p>
          </div>
          <div className='lg:flex gap-10 dark:text-gray-300 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800'>
              <Image src={d} alt='' className='relative mx-auto h-93 w-93 ' />
              <div />
              <div className='items-start'>
                <h3 className='text-3xl py-1'>Development</h3>
                <p className='text-md py-2 leading-8 text-gray-80'>
                  Whether you're looking to turn your project ideas into reality
                  or need assistance with your tech-related endeavors, please
                  don't hesitate to get in touch. I am eager to hear from you
                  and explore how we can collaborate to accomplish your
                  objectives.
                </p>
                <h4>Web Design</h4>
                <p>Web App </p>
                <p>Projet Deployment</p>
                <p>Server Management</p>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800'>
              <Image
                src={mob}
                alt=''
                className='relative mx-auto h-93 w-93 mt-5 '
              />
              <div />
              <div>
                <h3 className='text-3xl py-1 mt-4'>Mobile</h3>
                <p className='text-md py-2 leading-8 text-gray-80'>
                  Whether you're looking to turn your project ideas into reality
                  or need assistance with your tech-related endeavors, please
                  don't hesitate to get in touch. I am eager to hear from you
                  and explore how we can collaborate to accomplish your
                  objectives.
                </p>
                <h4>UX/UI Design</h4>
                <p>App </p>
                <p>Projet Deployment</p>
                <p>Server Management</p>
              </div>
            </div>
          </div>
        </section>
        <section id='works'>
        <h3 className='dark:text-gray-300 text-3xl py-1 m-4 py-24'>My Works</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

        </section>


        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="#" className="hover:underline">Imam Uddin</a>. All Rights Reserved.</span>
  </div>
</footer>

      </main>
    </div>
  )
}
