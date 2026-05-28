import { createContext, useState } from "react";
import productData from "../../db/productData";

export const ProductContext = createContext(null)

export const ProductProvider = ({children}) => {

    /* SearchInput Filter */
    const [query , setQuery] = useState('') 
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    const filteredItems = productData.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))

    /* Button Filters */
    const [selectedBtn,setSelectedBtn] = useState(null)

    const handleClick = (brand) => {
        setSelectedBtn(brand)
    }
    let filteredProduct = filteredItems

    /* Category & Color & Price Filters */
    const [category , setCategory] = useState(null)
    const [color , setColor] = useState(null)
    const [priceRange , setPriceRange] = useState(null)

    const handleChange = (e) => {
        const {name , value} = e.target

        if (name === 'category'){
            setCategory(value)
        }
        if (name === 'colors'){
            setColor(value)
        }
        else if (name === 'price'){
            setPriceRange(value)
        }
    }

    const filteredData = () => {
        if (query) {
            filteredProduct = filteredItems
        }
        if (selectedBtn ) {
            filteredProduct = filteredProduct.filter((product)=> product.company === selectedBtn)
        }
        if (category) {
            filteredProduct = filteredProduct.filter((product)=> product.category === category )
        }
        if (color) {
            filteredProduct = filteredProduct.filter((product)=> product.color === color )
        }
        else if (priceRange) {
            filteredProduct = filteredProduct.filter((product)=> {

                if (priceRange === '0-50') {
                    return +product.newPrice <= 50
                }
                if (priceRange === '50-100') {
                    return +product.newPrice >= 50 && product.newPrice <= 100
                }
                if (priceRange === '100-150') {
                    return +product.newPrice >= 100 && product.newPrice <= 150
                }
                else if (priceRange === 'over-150') {
                    return +product.newPrice >= 150
                }
                
            })
        }
       return filteredProduct
    }
    filteredData()

    const value = {
        query,
        handleInputChange,
        filteredProduct,
        handleClick,
        handleChange,
        color
    }
  return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
  )
}