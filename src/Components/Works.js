import React from 'react'
import Portfolio1 from'../assets/portfolio-1.png'
import Portfolio2 from'../assets/portfolio-2.png'
import Portfolio3 from'../assets/portfolio-3.png'
import Portfolio4 from'../assets/portfolio-4.png'
import Portfolio5 from'../assets/portfolio-5.png'
import Portfolio6 from'../assets/portfolio-6.png'

const Works = () => {
  return (
    <section className='min-h-[100vh-16] mx-auto w-[100vw] max-w-4xl flex flex-col justify-center items-center text-center px-4 ' id='works'>

    <h2 className='my-4 text-4xl font-semibold max-sm:text-3xl'>My portfolio</h2>
    <span className='font-light text-base max-sm:font-light max-sm:text-sm max-w-2xl mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus deserunt fugit praesentium quae id obcaecati provident accusantium, alias non blanditiis neque doloribus voluptatem sequi?</span>

    <div className="worksImg flex justify-center items-center w-[100vw] max-w-5xl flex-wrap">
    <img src={Portfolio1} alt="" className="workImg object-cover h-80 m-2 max-sm:h-48" />
    <img src={Portfolio2} alt="" className="workImg object-cover h-80 m-2 max-sm:h-48" />
    <img src={Portfolio3} alt="" className="workImg object-cover h-80 m-2 max-sm:h-48" />
    <img src={Portfolio4} alt="" className="workImg object-cover h-80 m-2 max-sm:h-48" />
    <img src={Portfolio5} alt="" className="workImg object-cover h-80 m-2 max-sm:h-48" />
    <img src={Portfolio6} alt="" className="workImg object-cover h-80 m-2 max-sm:h-48" />

    </div>

    <button className="btn py-2 px-10 rounded-full bg-white font-semibold text-black my-12">See More</button>
    </section>
  )
}

export default Works;