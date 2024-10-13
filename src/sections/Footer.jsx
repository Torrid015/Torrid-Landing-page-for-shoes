
const Footer = () => {
  return (
    <section className='mt-4 px-4'>
      <hr />
      <div className='flex items-center justify-evenly mx-auto text-slate-gray'>
        <div className='flex flex-col font-bold'>
          <h1 className='text-amber-400 font-serif font-extrabold text-2xl flex items-start justify-start mx-auto p-3'>
            .Torrid
          </h1>
          <a href='#home'>Home</a>
          <a href='#shop'>Shop</a>
          <a href='#about'>About Us</a>
          <a href='#contact'>Contact Us</a>
          <a href='#testimonials'>Testimonials</a>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>My Account</p>
          <a href='#'>Sign up</a>
          <a href='#'>Sign in</a>
          <a href='#'>Forgot Password</a>
          <a href='#'>Cart</a>
          <a href='#'>Privacy amd policy</a>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Help</p>
          <a href='#'>Account Recovery</a>
          <a href='#'>Terms and Conditions</a>
          <a href='#'>FAQ</a>
          <a href='#'>Self Service</a>
          <a href='#'>Customers Protection</a>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Shop</p>
          <a href='#'>Cart</a>
          <a href='#'>Tracking</a>
          <a href='#'>Confirm Order</a>
          <a href='#'>Report Order</a>
          <a href='#'>Return Order</a>
        </div>
      </div>
      <div className='text-center font-serif font-semibold'>
        &copy; 2024 - All rights reserved
      </div>
    </section>
  );
}

export default Footer