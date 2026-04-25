import { data } from '../data'
import Product from './Product'

function Products() {
  return (
    <div className="max-w-330 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5">
      {data.map(pro => <Product
        key={pro.id}
        {...pro}
      />)}
    </div>
  )
}

export default Products