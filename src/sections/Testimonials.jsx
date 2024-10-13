import { reviews } from "../components/constant"


const Testimonials = () => {
  return (
    <section className='px-4 mx-auto mt-6 scroll-mt-16' id='testimonals'>
      <h2 className='text-4xl text-center font-bold capitalize'>
        What our <span className='text-coral-red'>customers</span> say?
      </h2>
      <p className='text-center text-md font-semibold max-w-md flex items-center justify-center mx-auto p-2'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us
      </p>

      <div className='flex flex-col sm:flex-row mx-auto items-center justify-evenly px-4'>
        {reviews.map((rev) => (
          <div
            key={rev.name}
            className='flex flex-col items-center justify-center gap-4 p-4'>
            <img
              src={rev.image}
              alt='customer image'
              width={150}
              height={150}
              className='rounded-full'
            />
            <p className='text-center max-w-md text-slate-gray'>{rev.para}</p>
            <div className='flex gap-4'>
              <img src={rev.rating.star} alt='ratings' /> ({rev.rating.num})
            </div>
            <h4 className='text-xl font-bold font-palanquin'>{rev.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials