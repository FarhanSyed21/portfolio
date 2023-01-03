import React from 'react'
import Blog from '../assets/Blog.png'
import Downloader from '../assets/Downloader.png'
import Netflix from '../assets/Netflix.png'
import Word from '../assets/Word.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Netflix,
            demo: "https://netflix-ott-platform.netlify.app",
            code: "https://github.com/FarhanSyed21/Ott-Platform-Netflix-Clone"

        },
        {
            id: 2,
            src: Blog,
            demo: "https://blog-writing.netlify.app",
            code: "https://github.com/FarhanSyed21/Blog-App"
        },
        {
            id: 3,
            src: Downloader,
            demo: "https://files-downloader.netlify.app",
            code: "https://github.com/FarhanSyed21/File-Downloader"
        },
        {
            id: 4,
            src: Word,
            demo: "https://dictionary-wordhunt.netlify.app",
            code: "https://github.com/FarhanSyed21/word-Hunt"
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my cool works right here</p>
            </div>

            

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {
                portfolios.map(({ id, src, demo, code }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <a href={demo}>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            </a>
                            <a href={code}>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>    
                            </a>
                        </div>
                    </div>
                ))
            }    
            </div>
        </div>
    </div>
  )
}

export default Portfolio