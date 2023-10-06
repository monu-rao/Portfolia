import React from 'react'
import profileImg from'../assets/img.png'
import { Link } from 'react-scroll'
import btnImg from'../assets/hireme.png'

const Intro = () => {
  return (
    <section className='intros h-[100vh-12]  w-[100vw] max-w-6xl mx-auto overflow-hidden bg-transparent relative flex flex-row-reverse max-sm:flex-col-reverse justify-around items-center' id='intro'>

    <img src={profileImg} alt="Portfile" className='max-sm:mt-10 z-10  object-cover h-[40vh] max-sm:h-full max-sm:px-4 rounded-md max-sm:bg-cover '/>    

        <div className='introContent h-[100vh] max-sm:h-[40vh] w-[100vw] px-8 text-5xl max-sm:text-3xl font-bold flex flex-col justify-center  bg-transparent max-sm:mt-8'>

            <span className='text-2xl font-thin max-sm:text-xl'>Hello,</span>
            <span>I'm <span className='text-yellow-300'>Shyam</span> <br /> Website Designer</span>
            <p className='text-base font-normal mt-3'> I am a skilled and passionate web designer with experience in creating <br /> visually appealing and user-friendly websites.</p>
            <Link>
            <button className="btn bg-white mt-4 py-3 px-6 text-black text-base rounded-full flex justify-center items-center">
            <img src={btnImg} alt="" className='object-cover mr-2 h-4' />Hire me</button>
            </Link>
        </div>     

        
       
    </section>
  );
}

export default Intro;