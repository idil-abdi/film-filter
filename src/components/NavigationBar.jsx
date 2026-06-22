import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"
import logo from '../img/video.png'
function NavigationBar() {
  return (
    <> 
    <Navbar className="bg-[#0b0e27] text-[#a855f7]">
    <NavbarBrand href="#">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Film Filter</span>
    </NavbarBrand>
    <NavbarToggle className=" hover:text-[#a855f7]" />
      <NavbarCollapse className="flex justify-items-center">
        <NavbarLink className="text-white hover:text-[#a855f7] border-0 text-center" href="#">Home</NavbarLink>
        <NavbarLink className="text-white hover:text-[#a855f7] border-0 text-center" href="#">Movies</NavbarLink>
        <NavbarLink className="text-white hover:text-[#a855f7] border-0 text-center" href="#">TV Shows</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </>
  )
}

export default NavigationBar