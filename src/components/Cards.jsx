
import { shoes } from './constant'

const Cards = () => {
  return (
    <div className='flex absolute z-10 w-3/4 justify-end items-center bottom-0 right-0 gap-2'>
        {shoes.map((shoe,index)=> {
           return( <div key={index} className='bg-hero flex justify-center items-center '>
                <img src={shoe} alt="shoe collection" />
            </div>)
        })}
    </div>
  )
}

export default Cards