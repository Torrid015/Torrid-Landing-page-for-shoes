import { Nav } from './components/constant';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleToggle = () => {
    setisOpen(true);
  };

  return (
    <header className='w-full bg-white sticky top-0 right-0 py-5 shadow-xl flex justify-between items-center sm:mx-auto z-20'>
      <div className='flex justify-start space-x-10 items-center sm:mx-auto'>
        <h1 className='text-amber-400 font-serif font-extrabold text-2xl px-8 my-0'>
          .Torrid
        </h1>

        <nav className=' justify-center items-center hidden sm:flex sm:mx-auto'>
          {Nav.map((links, index) => {
            return (
              <div
                key={index}
                className='p-3 pb-0  sm:flex text-[#2E4053] text-lg hover:text-orange-950 transition-all ease-in relative  pt-0 space-x-4'>
                <a
                  href={links.href}
                  className='hover:after:content[] hover:after:absolute hover:after:w-7 hover:after:h-[2px] hover:after:bg-orange-950 hover:after:bottom-0 hover:after:left-0 transition-all ease-in'>
                  {links.name}
                </a>
              </div>
            );
          })}
        </nav>
      </div>
      <div className='p-3 font-serif text-base text-gray-400 border rounded-full border-red-300 mx-auto hover:border-red-500 hover:text-gray-800 transition-all ease-in leading-3 tracking-wide hidden sm:flex'>
        <a href='#signUp' className=''>
          SignUp/Register
        </a>
      </div>

      <div
        className='text-4xl cursor-pointer sm:hidden px-4
      '
        onClick={() => {
          handleToggle();
        }}>
        &#9776;
      </div>
      <section
        className={` flex-col sm:hidden bg-white origin-top animate-open-menu top-0 ${
          isOpen === true ? `flex` : `hidden`
        } absolute w-full justify-center text-4xl z-30   transition-all`}
        onClick={() => {
          setisOpen(false);
        }}>
        <button className='self-end  text-8xl' onClick={() => setisOpen(false)}>
          &times;
        </button>

        <nav
          className='flex flex-col items-center  gap-8 h-screen py-2 '
          aria-label='mobile nav'>
          <a
            href='#home'
            className='p-2  hover:opacity-70 transition-all ease-in'
            onClick={() => {
              setisOpen(false);
            }}>
            Home
          </a>
          <a
            href='#shop'
            className='p-2  hover:opacity-70 transition-all ease-in'
            onClick={() => {
              setisOpen(false);
            }}>
            Shop
          </a>
          <a
            href='#about'
            className='p-2  hover:opacity-70 transition-all ease-in'
            onClick={() => {
              setisOpen(false);
            }}>
            About Us
          </a>
          <a
            href='#contact'
            className='p-2  hover:opacity-70 transition-all ease-in'
            onClick={() => {
              setisOpen(false);
            }}>
            Contact Us
          </a>
          <a
            href='#testimonials'
            className='p-2  hover:opacity-70 transition-all ease-in'
            onClick={() => {
              setisOpen(false);
            }}>
            Testimonials
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
