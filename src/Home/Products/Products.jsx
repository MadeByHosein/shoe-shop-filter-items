import {BsFillBagHeartFill} from 'react-icons/bs'
import Card from '../../components/Card'
import productData from '../../db/productData'


const Products = () => {
  return (
    <div className='flex flex-wrap gap-2 p-5'>
      {productData.map(({img, title, star, reviews, prevPrice, newPrice}, index)=> (
        <Card 
          key = {index}
          img = {img}
          title = {title}
          star = {star}
          reviews = {reviews}
          prevPrice = {prevPrice}
          newPrice = {newPrice}
          
        />
      ))}
    </div>
  )
}

export default Products