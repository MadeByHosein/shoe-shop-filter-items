import { useContext } from "react"
import { ProductContext } from "./context/context"


const Input = ({name,title, value}) => {
  const {handleChange} = useContext(ProductContext)

  return (
    <label className='flex flex-col px-3 group'>    
        <input 
        type="radio" 
        name={name} 
        value={value} 
        className='opacity-0'
        onChange={handleChange}
        />
        
        <div className="flex items-center gap-2">
          <span className='checkbox block w-4 h-4 border border-stone-400 rounded-full bg-gray-300 transition-opacity duration-300 ease-in-out hover:opacity-60' 
              style={name = 'color' && {backgroundColor: value} }
              ></span><span className="text-xs">{title}</span>      
        </div>
    </label>
  )
}

export default Input