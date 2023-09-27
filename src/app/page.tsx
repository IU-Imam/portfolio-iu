'use client'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

import Image from 'next/image'
import im from '../../public/meee.png'
import d from '../../public/d.png'
import mob from '../../public/mob.png'
import { useState } from 'react'

export default function Home() {
  const [darkMood, setDarkMood] = useState(false)
  return (
    <div className={darkMood ? 'dark' : ''}>
      <main className='bg-white px-10 dark:bg-gray-900'>
        <section className='min-h-screen justify-center'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-300'>
              Imam Uddin
            </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMood(!darkMood)}
                  className='cursor-pointer text-2xl dark:text-gray-400'
                />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium '>
              Imam Uddin
            </h2>
            <h3 className='text-2xl py-2 dark:text-yellow-50'>
              A versatile developer and designer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
              I am a freelance programmer offering a wide range of programming
              services. I'm enthusiastic about taking on new opportunities,
              collaborating on exciting projects, and tackling challenging
              tasks.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-white rounded-full w-80 h-80 m-20 overflow-hidden px-2 shadow-lg dark:from-gray-500'>
            <Image src={im} alt='' layout='fill' objectFit='fill' />
          </div>
        </section>

        <section>
          <div className='dark:text-gray-300'>
            <h3 className='text-3xl py-1'>Service I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
              Whether you're looking to turn your project ideas into reality or
              need assistance with your tech-related endeavors, please don't
              hesitate to get in touch. I am eager to hear from you and explore
              how we can collaborate to accomplish your objectives.
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
      </main>
    </div>
  )
}
