import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
          <div className='flex flex-col border border-gray-300 rounded-lg p-5'>
            <div>
              <img 
                src={img} 
                alt={title} 
                width={200} 
                height={200}
              />       
            </div>

            <div className='pt-2'>
              {title}
            </div>

            <div className='flex gap-2 items-center py-2'>
              <div className='flex'>{star}{star}{star}{star}</div>
              <div>{reviews}</div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <del>{prevPrice}</del>
                <div>${newPrice}</div>
              </div>
              <div>
                <BsFillBagHeartFill />
              </div>
            </div>

          </div> 
       
    
  )
}

export default Card