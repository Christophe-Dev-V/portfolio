import Image from 'next/image'
import Link from 'next/link'
import { BiExit } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

const Projects = () => {
  return (
    <div className='mt-16 text-center'>
      <h1 className='text-3xl font-semibold text-teal-400'>River Audio</h1>
      <p className='my-10 text-xl text-gray-300'>
        Landing page for DJ local business River Audio. (Site in Spanish)
      </p>
      <p className='mb-12 text-xl text-gray-300'>
        <span className='text-teal-400'>Sections:</span> Landing page
      </p>
      <div className='relative p-2 overflow-hidden hover:brightness-110 hover:cursor-pointer transition-all duration-500 ease-in-out border-2 border-gray-500 w-5/6 md:w-4/6 mx-auto rounded-sm hover:scale-[1.01] hover:transform'>
        <a
          href='https://riveraudio.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/images/river.jpg'
            width={1000}
            height={550}
            layout='intrinsic'
          />
        </a>
      </div>
      <div className='flex items-center justify-center gap-2 my-4 text-teal-500'>
        <a
          href='https://riveraudio.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='hover:text-teal-400'>Visit site</p>
        </a>
        <span>
          <BiExit />
        </span>
      </div>
      <p className='my-6 text-xl text-gray-300'>
        Built with: <span className='text-teal-400'>React, Nextjs, CSS.</span>
      </p>
      <p className='my-8 text-xl text-gray-300'>
        My GitHub:{' '}
        <span className='flex items-center justify-center w-6/12 mx-auto my-4 text-4xl text-teal-400'>
          <a
            href='https://github.com/christophe-dev-v'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-teal-500'
          >
            <AiFillGithub />
          </a>
        </span>
      </p>
    </div>
  )
}
export default Projects
