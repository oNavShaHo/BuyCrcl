import Image from 'next/image'
import { logo } from "../public/assets/images/index"
function Navbar() {
  return (
    <div className="w-full bg-blue-900 text-white">
     
    <div className="max-w-container mx-auto">

      <div className="h-12 px-5 rounded-full bg-transparent flex items-center
       gap-2 hover:bg-hoverBg duration-300 cursor-pointer">
        <Image src={logo} className="w-44" alt="logo"/>
      </div>

    </div>

    </div>
  )
}

export default Navbar