import { useContext } from 'react'
import {ProductContext} from '../components/context/context'

const Button = ({title , width, value}) => {
  const {handleClick } = useContext(ProductContext)
  return (
    <div>
        <button 
            value={value}
            onClick={() => handleClick(value)}
            className={`border px-3 ${width} py-1 rounded-lg text-sm text-gray-700 border-gray-300 cursor-pointer`}>
              {title}
        </button>
    </div>
  )
}

export default Button