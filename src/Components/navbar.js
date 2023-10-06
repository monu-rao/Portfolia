import React, {useState} from 'react'
import logo from'../assets/logo copy.png';
import contectImg from'../assets/contact.png'
import { Link, scrollSpy } from 'react-scroll';
import menu from'../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (

    
    <nav className='sticky top-0 h-20 w-[100vw] navbar flex justify-between max-w-6xl items-center content-center mx-auto mt-4 px-4 py-8 border-none bg-black  z-10  '>
    
    <img src={logo} alt="logo" className='logo object-cover h-12 w-16 ' />

    <div className='max-sm:hidden'>

    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>Home</Link>

    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={10} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>About</Link>

    <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>Portfolio</Link>

    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={10} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>Clients</Link>
    </div>

    <button className='bg-white text-black flex justify-center items-center content-center px-4 rounded-full max-sm:hidden' onClick={()=> {
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}><img src={contectImg} alt="contectImg" className='w-4 h-4 m-4 object-cover' />Contect Me</button>
    


    <img src={menu} alt="menu" className='mobMenu hidden object-cover h-7 max-sm:flex' onClick={()=> setShowMenu(!showMenu)} />

    <div className='navMenu absolute top-16 right-8 z-50 flex flex-col p-2 h-fit min-w-min bg-gray-800 rounded-md' style={{display: showMenu? 'flex': 'none'}}>
    
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='py-2 px-12 m-1 bg-black rounded-sm' onClick={()=> setShowMenu(false)}>Home</Link>

    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={10} duration={500} className='py-2 px-12 m-1 bg-black rounded-sm' onClick={()=> setShowMenu(false)}>About</Link>

    <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='py-2 px-12 m-1 bg-black rounded-sm' onClick={()=> setShowMenu(false)}>Portfolio</Link>

    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={10} duration={500} className='py-2 px-12 m-1 bg-black rounded-sm' onClick={()=> setShowMenu(false)}>Clients</Link>

    </div>
    </nav>
    
  )
}

export default Navbar;