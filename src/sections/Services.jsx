import { services } from "../components/constant"


const Services = () => {
  return (
    <section className='px-2 mt-5 mx-auto flex-col sm:flex-row flex-wrap items-center justify-center flex scroll-mt-[55px]' id="about">
        {services.map((service, index) => {
            return(
            <div className="bg-card p-3 max-w-[320px] h-[200px] m-2 bg-cover rounded-2xl" key={index}>
                <div>
                    <img src={service.image} alt="service icon" className="p-3 bg-coral-red rounded-full" />
                </div>
                <div className="mt-2">
                    <h2 className="font-bold text-2xl font-montserrat mb-2">{service.name}</h2>
                    <p className="max-w-sm text-slate-gray font-palanquin text-sm">{service.para}</p>
                </div>
            </div>
        )})}
    </section>
  )
}

export default Services