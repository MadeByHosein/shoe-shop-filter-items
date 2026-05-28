import React from 'react'
import Input from '../../components/Input'

const Price = () => {
  return <> 
    <div className='p-3'>
        <h1>Price</h1>
        <div>
            <Input title='All' name='price' value='' />
            <Input title='$0-$50' name='price' value='0-50' />
            <Input title='$50-$100' name='price' value='50-100' />
            <Input title='$100-$150' name='price' value='100-150' />
            <Input title='over $150' name='price' value='over-150' />
        </div>
    </div>   
  </>
}

export default Price