import Input from '../../components/Input'

const Category = () => {

  return <> 
  <div className='p-3'>
    <h1>Category</h1>
    <div>
        <Input title='All'      name='category' value = ''         />
        <Input title='Sneakers' name='category' value = 'sneakers' />
        <Input title='Flats'    name='category' value = 'flats'    />
        <Input title='Heels'    name='category' value = 'heels'    />
        <Input title='Sandals'  name='category' value = 'sandals'  />
    </div>
</div>   
  </>
}

export default Category