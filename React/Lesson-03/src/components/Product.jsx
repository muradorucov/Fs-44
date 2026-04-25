function Product({ img, name, price }) {
  name = "Test"
  return (
    <div className="border rounded-md shadow-2xl">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

export default Product