import Car, { MyFunc } from "./Car";

function Cars() {
  return <div className='cars'>
    <Car />
    <Car />
    <Car />
    <Car />
    <Car />
    <MyFunc />
  </div>
}

export default Cars;