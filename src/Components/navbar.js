import React, {useState} from 'react'
import PropTypes from 'prop-types'
import logo from'../assets/logo copy.png';
import contectImg from'../assets/contact.png'
import { Link, scrollSpy } from 'react-scroll';
import menu from'../assets/menu.png'

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (

    
    <nav className='sticky top-0 h-20 w-[100vw] navbar flex justify-between max-w-6xl items-center content-center mx-auto mt-4 px-4 py-8 border-none bg-black  z-10  '>
    
    <img src={logo} alt="logo" className='logo object-cover h-12 w-16 ' />

    <div className='max-sm:hidden font-medium'>

    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>{props.navTitle}</Link>

    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={10} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>{props.navAbout}</Link>

    <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>{props.navText2}</Link>

    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={10} duration={500} className='cursor-pointer m-4 hover:text-yellow-300 hover:pb-2 hover:border-b-2 hover:border-yellow-300 active:text-yellow-300'>{props.navText3}</Link>
    </div>

    <button className='bg-white text-black font-medium flex justify-center items-center content-center px-4 rounded-full max-sm:hidden' onClick={()=> {
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}><img src={contectImg} alt="contectImg" className='w-4 h-4 m-4 object-cover' />{props.btnText}</button>
    


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

Navbar.propTypes = {
  navTitle : PropTypes.string.isRequired,
  navAbout : PropTypes.string

}

Navbar.defaultProps = {
  navTitle : "Set title here",
  navAbout : "About"
}

export default Navbar;