import { Carousel } from "flowbite-react"
// import heroImg from '../img/hero-img.png'
import heroImgTwo from '../img/hero-img2.png'

function Hero() {
  return (
    <div className="h-[66vh]">
      <Carousel className="h-full">
        <div className="relative h-full ">
            <img src={heroImgTwo} className="w-full h-full object-cover object-[center_35%]" alt=""/>
            <div className="absolute inset-0 bg-linear-to-t from-[#0b0e27] via-[#0b0e27]/60 to-transparent"></div>
            <div className="sm:mx-60 mb-30 absolute inset-0 flex flex-col items-center justify-end text-white text-center z-10">
              <h2 className="text-3xl font-bold">Avatar</h2>
              <p className="text-lg opacity-90 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore corrupti iure temporibus, culpa, soluta reiciendis aspernatur quia sit voluptatum praesentium libero neque odio pariatur repellat fugiat cumque nisi ut fugit!</p>
            </div>
        </div>

      </Carousel>
    </div>
  )
}

export default Hero