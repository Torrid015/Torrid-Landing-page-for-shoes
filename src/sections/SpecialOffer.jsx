import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffer = () => {
  return (
    <section className='px-3 flex flex-col sm:flex-row-reverse justify-center items-center gap-5 mx-auto mt-9'>
      <div className='sm:pl-3 max-w-md'>
        <h1 className='text-center text-[35px] font-bold font-serif capitalize'>
          We provide you <span className='text-coral-red'>Super Quality</span>{' '}
          Shoes
        </h1>
        <p className='text-slate-gray mt-4 mb-6'>
          Hand crafted with love and care, our super quality products showcase
          exceptional craftsmanship. Every detail every material, and every
          finish is carrefully considered to provide you with an unparalleled
          ownership experience.
        </p>
        <div className='text-center gap-4 flex '>
          <Button label={'View details'} image={arrowRight}/>
          < Button label={'Learn more'} image={arrowRight} backgroundColor={'bg-white'} borderColor={'border-black'}/>
        </div>
      </div>

      <div className='max-w-lg'>
        <img
          src={offer}
          alt='super quality products'
          width={512}
          height={500}
          className='w-screen'
        />
      </div>
    </section>
  );
}

export default SpecialOffer