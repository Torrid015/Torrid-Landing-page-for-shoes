import { star } from "./assets/icons"
import { popularProducts } from "./components/constant"


const PopularProduct = () => {
  return (
    <section className="mt-14 p-7 mx-auto flex justify-center items-center scroll-mt-28" id="shop">
        <div className="m-3 items-center flex flex-col">
            <h2 className="text-3xl  font-montserrat font-bold text-center">Our <span className="text-coral-red">Popular</span> Products</h2>
            <p className="max-w-md text-slate-gray text-center items-center justify-center">Get the most sought-after products before they&apos;re gone! Our popular items are flying off the shelves. Shop now and experience the best of our collection.</p>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-4 mt-5">
                {popularProducts.map((products,index) => {
                    return(
                        <div key={index} className="flex flex-col gap-2 mb-3 mt-3">
                            <div className="bg-card bg-cover">
                                <img src={products.image} alt="Popular Products Image" className=" w-[280px] h-[280px] " />
                            </div>
                            <div className="flex gap-3 font-mono font-light items-center justify-start  p-1">
                                <img src={star} alt="product ratings" /> {`(${products.rating})`}
                            </div>
                            <div className="font-palanquin font-bold text-xl px-4 capitalize leading-4
                            ">{products.name}</div>
                            <div className="font-palanquin font-bold text-coral-red items-center justify-start flex">
                                {products.price}
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default PopularProduct