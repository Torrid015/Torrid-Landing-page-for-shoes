import { useState } from 'react';
import { bigShoe1 } from '../assets/images/index';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons/index';
import { shoes, Statistics } from '../components/constant';

const Hero = () => {
  let bigShoeImg = bigShoe1;
  const [newShoe, setnewShoe] = useState(bigShoeImg);
  const handleClick = (shoe) => {
    setnewShoe(shoe);
  };
  return (
    <section className='sm:mx-auto mt-5 flex flex-col sm:flex-row items-center justify-center px-4 scroll-mt-16' id='home'>
      <div className='ml-5 xl:w-2/5 '>
        <p className='text-xl text-red-500  capitalize mb-7 pl-2'>
          Our summer collection
        </p>
        <h2 className='sm:text-[72px] text-8xl capitalize break-words mt-10 tracking-wider bg-white md:whitespace-nowrap md:relative z-10 font-bold sm:pr-10 pl-2'>
          <span className='bg-white mt-10'>the New arrival</span>{' '}
          <span className='text-coral-red '>
            <br />
            nike
          </span>{' '}
          shoes
        </h2>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-10 sm:max-w-sm pl-2'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <div className='pl-2'>
          <Button label={'Shop Now'} image={arrowRight} />
        </div>

        <div className='mt-20 flex sm:justify-start justify-center items-center p-5 w-full flex-wrap gap-16 '>
          {Statistics.map((stats, index) => {
            return (
              <div key={index}>
                <p className='text-2xl font-palanquin font-bold'>
                  {stats.value}
                </p>
                <p>{stats.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='bg-hero flex flex-1 justify-center items-center object-contain bg-cover relative sm:h-screen bg-no-repeat'>
        <img
          src={newShoe}
          alt=''
          width={610}
          height={500}
          className='object-contain relative z-10'
        />

        <div className='flex absolute z-10 w-3/4 md:justify-end justify-center items-center sm:-bottom-16 sm:right-0 -bottom-14 right-10 gap-2'>
          {shoes.map((shoe, index) => {
            return (
              <div
                key={index}
                className={`bg-hero flex justify-center items-center  bg-cover rounded-xl hover:shadow-lg transition-all ease-in-out cursor-pointer ${
                  newShoe === shoe ? 'border border-coral-red' : 'hover:ring-1'
                } `}
                onClick={() => {
                  handleClick(shoe);
                }}>
                <img src={shoe} alt='shoe collection' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
