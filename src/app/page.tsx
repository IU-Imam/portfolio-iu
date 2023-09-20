import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>Imam Uddin</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
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
          <h3 className='text-2xl py-2'>A versatile developer and designer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            I am a freelance programmer offering a wide range of programming
            services. I'm enthusiastic about taking on new opportunities,
            collaborating on exciting projects, and tackling challenging tasks.
            Whether you're looking to turn your project ideas into reality or
            need assistance with your tech-related endeavors, please don't
            hesitate to get in touch. I am eager to hear from you and explore
            how we can collaborate to accomplish your objectives.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
      </section>
    </main>
  )
}