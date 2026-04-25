import Name from './Name'
import Author from './Author'
import Price from './Price'

function Book(props) {

  return (
    <div className='border rounded-md p-7.5'>
      <Name name={props.name} />
      <Author author={props.author} />
      <Price price={props.price} />
    </div>
  )
}

export default Book
