import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
          <div className='flex flex-col border border-gray-300 rounded-lg p-5'>
            <div className='w-50 h-40'>
              <img src={img} alt={title} />       
            </div>

            <div className='mt-1'>
              {title}
            </div>

            <div className='flex gap-2 items-center'>
              <div className='flex'>{star}{star}{star}{star}</div>
              <div>{reviews}</div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <del>{prevPrice}</del>
                <div>{newPrice}</div>
              </div>
              <div>
                <BsFillBagHeartFill />
              </div>
            </div>

          </div> 
       
    
  )
}

export default Card