import Card from '../../components/Card'
import productData from '../../db/productData'
import { ProductContext } from '../../components/context/context'
import { useContext } from 'react'

const Products = () => {
  const {filteredProduct} = useContext(ProductContext)

  return (
    <div className='flex flex-wrap gap-5 p-5'>
      {filteredProduct.map(({img, title, star, reviews, prevPrice, newPrice}, index)=> (
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