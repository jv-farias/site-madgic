import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageHome from "../assets/imageHome.png";
import { Service } from "@/components/services";
import { CatIcon } from "lucide-react";
import ecommerceIcon from "../assets/ecommerce.png";
import appIcon from "../assets/app.png";
import designIcon from "../assets/design.png";

const ourServices = [
  {
    icon: appIcon, // Substitua conforme necessário para cada serviço
    title: "Sites Institucionais",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: ecommerceIcon, // Substitua pelo ícone correspondente a Lojas Virtuais
    title: "Lojas Virtuais",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: designIcon, // Substitua pelo ícone correspondente a Aplicativos Móveis
    title: "Aplicativos Móveis",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default function Home() {
  return (
    <>
      <div className="lg:w-[75%] lg:mx-auto">
        <Header />
      </div>
      <div className="flex justify-between lg:w-[75%] lg:mx-auto items-center mt-20">
        <div className="flex flex-col items-start gap-8 w-[40%] 	">
          <h1 className="text-5xl leading-tight	text-[#1A202C]">
            Seu negócio aos <span className="font-bold">olhos do mundo</span>
          </h1>
          <h2 className="text-[#4A5568] text-base">
            Com a Madgic, você conta com o desenvolvimento rápido, seguro e de
            alta performance do seu website, loja virtual ou aplicativo.
          </h2>
          <Button className="bg-[#3D63EA;]">
            Comece agora seu projeto com a Madgic
          </Button>
        </div>
        <div className="flex-1 items-end">
          <Image
            src={imageHome}
            className="lg:w-[75%] lg:mx-auto "
            height={300}
            alt="Ilustração das pessoas trabalhando"
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#F9F9FF] w-full mt-20 py-10 ">
        <h2 className="text-2xl font-semibold" >Nossos Serviços</h2>
        
          <div className=" lg:w-[75%] lg:mx-auto  flex items-center justify-between">

            {ourServices.map((service, index) => {
              return (
                <Service
                  key={index}
                  descriptionService={service.description}
                  icon={service.icon}
                  titleService={service.title}
                />
              );
            })}

        </div>
      </div>
    </>
  );
}
