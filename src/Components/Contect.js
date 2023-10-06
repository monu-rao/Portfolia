import React from 'react'
import Walmart from'../assets/walmart.png'
import Adobe from'../assets/adobe.png'
import Microsoft from'../assets/microsoft.png'
import Facebook from'../assets/facebook.png'
import fbIcon from'../assets/facebook-icon.png'
import twIcon from'../assets/twitter.png'
import youIcon from'../assets/youtube.png'
import instIcon from'../assets/instagram.png'


const Contact = () => {
    
  return (
    <section className='contactPage min-h-[100vh-16] w-[100vw] max-w-4xl mx-auto flex flex-col justify-center items-center text-white text-center px-4'>

    <div className='clients ' id='clients'>

    <h2 className='text-4xl font-semibold max-sm:text-3xl mb-6 mt-6'>My clients</h2>
    <span className='text-sm font-normal max-w-2xl max-sm:font-light '> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum qui ullam, accusamus nobis eum nulla. Fugit alias repudiandae modi sequi officia.</span>

    <div className='clientsImg flex my-4 max-sm:flex-wrap'>
    <img src={Walmart} alt="" className='clientImg object-cover w-[23%] min-w-[9rem] m-auto p-1' />
    <img src={Adobe} alt="" className='clientImg object-cover w-[23%] min-w-[9rem] m-auto p-1' />
    <img src={Microsoft} alt="" className='clientImg object-cover w-[23%] min-w-[9rem] m-auto p-1' />
    <img src={Facebook} alt="" className='clientImg object-cover w-[23%] min-w-[9rem] m-auto p-1' />

    </div>
    </div>

    <div className="contact" id='contact'>
    <h2 className='my-4 text-4xl font-semibold max-sm:text-3xl'>Contact Me </h2>
    <span className='font-light text-base max-sm:font-light max-sm:text-sm max-w-2xl'>Please fill out the form below to discuss any work opportunities. </span>

    <form className="contactForm m-4 flex flex-col items-center justify-center w-[90vw] max-w-4xl">

    <input type="text"  className='font-medium w-full max-w-xl m-2 py-2 px-4 text-white rounded-lg bg-gray-900 ' placeholder='Your name'/>
    <input type="email"  className='font-medium w-full max-w-xl m-2 py-2 px-4 text-white rounded-lg bg-gray-900' placeholder='Your Email'/>
    <textarea name="" className="font-medium w-full max-w-xl m-2 py-2 px-4 text-white rounded-lg bg-gray-900" rows="5" placeholder='Your Message'></textarea>
    <button className="btn py-2 px-10 rounded-lg bg-white font-semibold text-black my-6">Submit</button>

    <div className='links flex flex-wrap'>
    <img src={fbIcon} alt="" className='link object-cover h-12 w-12 mx-3'/>
    <img src={twIcon} alt="" className='link object-cover h-12 w-12 mx-3'/>
    <img src={youIcon} alt="" className='link object-cover h-12 w-12 mx-3'/>
    <img src={instIcon} alt="" className='link object-cover h-12 w-12 mx-3'/>

    </div>
    </form>

    </div>
    </section>
  )
}

export default Contact