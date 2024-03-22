// import Image from "next/image";

// import { Button } from "../ui/button";

// export const Header = () => {
//   return (
//     <header className="flex justify-between px-10 py-4 shadow-lg items-center max-sm:flex-col">
//      
//       <ul className="flex items-center justify-between flex-1 px-24 text-[#4A5568] font-medium max-sm:flex-col">
//         <li>Sobre</li>
//         <li>Serviços</li>
//         <li>Casos de Sucesso</li>
//         <li>Blog</li>
//       </ul>
//       <Button className="bg-custom-gradient" >Fale Conosco</Button>
//     </header>
//   );
// };


"use client"


import Link from "next/link"
import { Menu, Search } from "lucide-react"
import logoMadgic from "../../assets/logoMadgic.webp";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";


export const Header = () => {
  const [state, setState] = useState<boolean>(false)

  const menus = [
    { title: "Sobre", path: "/" },
    { title: "Serviços", path: "/" },
    { title: "Casos de Sucesso", path: "/" },
    { title: "Blog", path: "/" },
  ]

  return (
    <nav className="bg-white w-full border-b md:border-0 shadow-lg">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block md:px-8">
          <Link href="/">
            <Image src={logoMadgic} alt="Logo Madgic"  width={130} />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
            }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {menus.map((item, idx) => (
              <li key={idx} className=" hover:text-indigo-600  text-[#4A5568] font-medium">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
             <Button className="bg-custom-gradient max-sm:w-full" >Fale Conosco</Button>
          </ul>
        </div>
      </div>
    </nav>
  )
}