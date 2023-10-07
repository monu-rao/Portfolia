
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Navbar from './Components/navbar';
import Contact from './Components/Contect';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='bg-black overflow-hidden overflow-y-scroll  scroll-smooth text-white font-sans'>
   <div className='box-border bg-transparent '>
   <div className=' text-white overflow-hidden  '>

   <Navbar
    navTitle = "Home"
    navAbout = "About"
    navText2 = "Portfolio"
    navText3 = "Clients"
    btnText = "Contact Me"
    />
   <Intro/>
   <Skills/>
   <Works/>
   <Contact  /> 
    <Footer/>

   </div>
   </div> 

   </div>
  );
}

export default App;
