import React from 'react'
import UIDesign from'../assets/ui-design.png'
import WebDesign from'../assets/website-design.png'
import AppDesign from'../assets/app-design.png'

const Skills = () => {
  return (
    <section className="skills w-[100vw] h-full overflow-hidden max-w-5xl flex flex-col justify-center items-center text-center mx-auto max-sm:mt-6 " id='skills'>
    <span className='skillTitle mt-12 font-semibold text-4xl mb-7 max-sm:text-3xl max-sm:mt-4 max-sm:mb-4'> What I Do</span>
    <span className='skillDes font-normal text-base max-w-3xl px-8 mb-8 max-sm:font-light max-sm:text-sm'> I am a skilled and passionate web designer with experience Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas doloribus sunt deleniti illo inventore tempora suscipit tempore modi vitae magnam repellendus, amet laborum soluta, nulla repudiandae mollitia explicabo, perspiciatis sed!</span>

    <div className='skillbars m-6  max-w-7xl '>

    <div className="skillbar flex m-4 py-6 rounded-lg bg-gray-900 px-8 text-left">
    <img src={UIDesign} alt="UIDesign" className='object-cover h-12 w-12 mr-8'/>
    <div className="skillText">
    <h2 className='font-semibold text-lg max-sm:text-base max-sm:font-medium'> UI/UX design </h2>
    <p className='text-sm font-light max-sm:text-xs'>This is a demo text, you can write your owen content here.</p>
    </div>
    </div>

    <div className="skillbar flex m-4 py-6 rounded-lg bg-gray-900 px-8 text-left">
    <img src={WebDesign} alt="WebDesign" className='object-cover h-12 w-12 mr-8'/>
    <div className="skillText">
    <h2 className='font-semibold text-lg max-sm:text-base max-sm:font-medium'> Website design </h2>
    <p className='text-sm font-light max-sm:text-xs'>This is a demo text, you can write your owen content here.</p>
    </div>
    </div>

    <div className="skillbar flex m-4 py-6 rounded-lg bg-gray-900 px-8 text-left">
    <img src={AppDesign} alt="AppDesign" className='object-cover h-12 w-12 mr-8'/>
    <div className="skillText">
    <h2 className='font-semibold text-lg max-sm:text-base max-sm:font-medium'> App design </h2>
    <p className='text-sm font-light max-sm:text-xs'>This is a demo text, you can write your owen content here.</p>
    </div>
    </div>

    </div>
    </section>
  )
}

export default Skills;