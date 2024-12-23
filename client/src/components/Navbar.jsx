import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { logo, menu, close, crown } from '../assets';

const ScrolledNavbar = ({ isVisible }) => {
  const [toggle, setToggle] = useState(false);

  if(toggle && !isVisible)
    setToggle(false);

  return (
    <nav className={
      `fixed top-0 z-20 w-full flex justify-center mt-4 transition-transform duration-300
        ${
          isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]'
        }`
      }
    >
      <div className='w-[55%] px-6 py-2 bg-tertiary rounded-xl border-1 border border-light-purple'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
          <Link 
            to='/' 
            className='flex items-center gap-2'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img 
              src={crown} 
              alt='crown'
              width={40}
              height={40}
              className='object-contain'
            />
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-5'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className="hover:text-gold text-lg hover:font-medium cursor-pointer font-poppins text-white"
                onClick={() => setToggle(!toggle)}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='cursor-pointer w-[24px] h-[24px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-[1px] green-pink-gradient absolute top-20 right-0 mx-4 my-2 z-10 min-w-[140px] rounded-xl shadow-card`}>
              <div className='bg-tertiary rounded-xl p-6 w-full'>
                <ul className='list-none flex flex-col gap-4 justify-end items-start'>
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className="hover:text-gold text-lg hover:font-medium cursor-pointer font-poppins text-white"
                      onClick={() => setToggle(!toggle)}
                    >
                      <a href={`#${link.id}`}>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // First threshold - show scrolled navbar
      if (window.scrollY > 30) {
        setIsScrolled(true);
        
        // Second threshold - apply hide/show effect
        if (window.scrollY > 100) {
          if (window.scrollY > lastScrollY) { // scrolling down
            setIsVisible(false);
          } else { // scrolling up
            setIsVisible(true);
          }
        } else {
          // Between 30 and 100px scroll - always show
          setIsVisible(true);
        }
      } else {
        // Less than 30px scroll - show regular navbar
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isScrolled ? (
    <ScrolledNavbar isVisible={isVisible} />
  ) : (
    <nav className='px-6 w-full flex items-center py-3 fixed top-0 z-20'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/' 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={logo} 
            alt='crown'
            width={70}
            height={70}
            className='object-contain'
          />
          <p className='text-white text-md font-bold cursor-pointer flex'>
            Banzile Nhlebela &nbsp; <span className='sm:block hidden'>| TMK74 </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className="hover:text-gold text-lg hover:font-medium cursor-pointer font-poppins text-white"
              onClick={() => setToggle(!toggle)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='cursor-pointer w-[24px] h-[24px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-[1px] green-pink-gradient absolute top-20 right-0 mx-4 my-2 z-10 min-w-[140px] rounded-xl shadow-card`}>
            <div className='bg-tertiary rounded-xl p-6 w-full'>
              <ul className='list-none flex flex-col gap-4 justify-end items-start'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="hover:text-gold text-lg hover:font-medium cursor-pointer font-poppins text-white"
                    onClick={() => setToggle(!toggle)}
                  >
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;