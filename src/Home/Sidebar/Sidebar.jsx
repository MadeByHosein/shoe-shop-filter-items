import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"


const Sidebar = () => {
  return (
    <div className='flex mt-23 w-30 h-100 border-r border-r-stone-300 '>
      <div >
        <Category />
        <Price />
        <Colors />     
      </div>
    </div>
  )
}

export default Sidebar