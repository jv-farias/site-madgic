import Image from "next/image";
import logoMadgic from "../../assets/logoMadgic.webp";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="flex justify-between px-10 py-4 shadow-lg items-center">
      <Image src={logoMadgic} alt="Logo Madgic" width={140} />
      <ul className="flex items-center justify-between flex-1 px-24 text-[#4A5568] font-medium">
        <li>Sobre</li>
        <li>Serviços</li>
        <li>Casos de Sucesso</li>
        <li>Blog</li>
      </ul>
      <Button className="bg-custom-gradient" >Fale Conosco</Button>
    </header>
  );
};
