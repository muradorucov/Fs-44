import CarImage from "./CarImage";
import CarName from "./CarName";
import CarPrice from "./CarPrice";

export default function Car() {
  return <div className='car'>
    <CarName />
    <CarImage />
    <CarPrice />
  </div>
}

export function MyFunc() {
  return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quasi molestiae, repellat et fugiat non nulla dolorem deleniti commodi odio accusamus in, inventore, laborum dolorum sit aliquam repudiandae. Quo, consectetur.</p>
}



// export { MyFunc, };
// export default Car;