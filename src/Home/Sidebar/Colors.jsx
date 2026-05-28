import React from 'react'
import Input from '../../components/Input'

const Colors = () => {
  return <> 
    <div className='p-3'>
        <h1>Colors</h1>
        <div>
            <Input title='All'   name='colors' value =''     />
            <Input title='blue'  name='colors' value ='blue' />
            <Input title='black' name='colors' value ='black'/>
            <Input title='red'   name='colors' value ='red'  />
            <Input title='green' name='colors' value ='green'/>
            <Input title='white' name='colors' value ='white'/>
        </div>
    </div>   
  </>
}

export default Colors