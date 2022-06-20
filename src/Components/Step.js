/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'
import Footer from './Footer'
import Order from '../img/Steporder.png'
import Gambar1 from '../img/Steporder1.png'
import Gambar2 from '../img/Steporder2.png'
import Gambar3 from '../img/Steporder3.png'
import Gambar4 from '../img/Steporder4.png'
import Gambar5 from '../img/Steporder5.png'

export default function Example() {
  return (
    <>
    <Navbar />
    <div id="carouselExampleCaptions" class="carousel slide relative w-2/4 h-max mx-auto" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
  </div>

  <div class="carousel-inner relative w-max h-max overflow-hidden text-center">

    <div class="carousel-item active relative float-left object-center">
      <img
        src={Gambar1}
        class="block w-2/4 h-2/4 m-2"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src={Gambar2}
        class="block w-2/4 h-2/4 m-2"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src={Gambar3}
        class="block w-2/4 h-2/4"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src={Gambar4}
        class="block w-2/4 h-2/4"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src={Gambar5}
        class="block w-2/4 h-2/4"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>
    
  </div>

  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Footer />
</>
  )
}
