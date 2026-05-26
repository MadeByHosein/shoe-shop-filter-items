import React from 'react'
import Button from '../../components/Button'

const Recommended = () => {
  return (
    <div className='flex flex-col items-start w-full pt-30 px-5'>
        <h1 className='font-semibold'>Recommended</h1>
        <div className='flex gap-2 flex-wrap '>
            <Button title ='All Products' width='w-30' />
            <Button title ='Nike' />
            <Button title ='Adidas' />
            <Button title ='Puma' />
            <Button title ='Vans' />              
        </div>
    </div>
  )
}

export default Recommended