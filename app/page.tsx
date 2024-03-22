import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import imageHome from "../assets/imageHome.png";
import { Service } from "@/components/services";
import { ArrowRightIcon, CatIcon } from "lucide-react";
import ecommerceIcon from "../assets/ecommerce.png";
import appIcon from "../assets/app.png";
import designIcon from "../assets/design.png";
import previewVideo from "../assets/aboutUsVideo.png";
import { CardProjects } from "@/components/cardProjects";
import { Separator } from "@/components/separator";
import trophyIcon from "../assets/trophy.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blogCard";

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

const sucessProjects = [
  {
    order: "#1",
    title: "Definição de objetivos",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    order: "#2",
    title: "Escolha de Tecnologia",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    order: "#3",
    title: "Planejamento",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    order: "#4",
    title: "Desenvolvimento",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    order: "#5",
    title: "Teste e Validação",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
  },
  {
    order: "#6",
    title: "Lançamentos e manutenção",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline. Lorem Ipsum ",
  },
];

const postsBlog = [
  {
    name: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: "https://utfs.io/f/e65d4d35-74de-43db-a564-8e0fd9321d26-kfbb5c.jfif",
  },
  {
    name: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: "https://utfs.io/f/5a1df94e-74aa-4b99-a4c6-d4534693f710-pc4iju.jfif",
  },
  {
    name: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: "https://utfs.io/f/620f710c-f1c1-4b0d-ad0b-6c69c464e107-4zus93.jfif",
  },
  {
    name: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: "https://utfs.io/f/d41958d9-9402-43f6-8492-8bae570c341c-nvbikf.jfif",
  },
  {
    name: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: "https://utfs.io/f/149dd9a0-5efd-4155-bb9d-6dbd07736da5-os3xk4.jfif",
  },
];

const topProjects = sucessProjects.filter((_, index) => index % 2 === 0);
const bottomProjects = sucessProjects.filter((_, index) => index % 2 !== 0);

export default function Home() {
  return (
    <>
      <div className="lg:px-48">
        <Header />
      </div>
      <section className="flex justify-between lg:px-48 items-center mt-20 max-sm:my-10 max-sm:px-8">
        <div className="flex flex-col items-start gap-8 w-[40%] max-sm:w-full 	">
          <h1 className="text-5xl leading-tight	text-[#1A202C] max-sm:text-4xl ">
            Seu negócio aos <span className="font-bold">olhos do mundo</span>
          </h1>
          <h2 className="text-[#4A5568] text-base">
            Com a Madgic, você conta com o desenvolvimento rápido, seguro e de
            alta performance do seu website, loja virtual ou aplicativo.
          </h2>
          <Button className="bg-[#3D63EA;] hover:bg-[#2d4499] max-sm:w-full">
            Comece agora seu projeto com a Madgic
          </Button>
        </div>
        <div className="flex-1 items-end">
          <Image
            src={imageHome}
            className="lg:w-[75%] lg:mx-auto max-sm:hidden   "
            height={300}
            alt="Ilustração das pessoas trabalhando"
          />
        </div>
      </section>

      <section className="lg:px-48 flex flex-col items-center bg-[#F9F9FF] w-full mt-20 py-8 border-gray-200 border max-sm:flex-col max-sm:px-8 max-sm:my-8  ">
        <h2 className="text-4xl mb-10 font-semibold max-sm:text-3xl ">
          Conheça nossos Serviços
        </h2>
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:gap-8">
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
      </section>

      <section className="flex justify-between items-center mt-20 lg:px-48 max-sm:flex-col max-sm:my-10 max-sm:px-8">
        <div className="flex flex-col items-start w-1/2 max-sm:flex-col max-sm:w-full">
          <div className="w-[70px] h-[5px] bg-custom-gradient-separator"></div>
          <h2 className="text-4xl my-8 w-3/4 max-sm:w-full  max-sm:text-3xl">
            Conectar pessoas{" "}
            <span className="font-bold">é conectar negócios</span>
          </h2>
          <p className="text-[#718096]">
            Trabalhamos em estreita colaboração com você para entender suas
            necessidades e objetivos. Nossa equipe de designer e desenvolvimento
            criará uma solução personalizada que atenderá às necessidades do seu
            negócio
          </p>
          <p className="flex items-center gap-2 text-[#57007B] font-semibold my-10 ">
            Fale agora conosco e comece seu projeto <ArrowRightIcon size={18} />{" "}
          </p>
        </div>
        <div className="flex-1 justify-end items-end ">
          <Image
            src={previewVideo}
            className="lg:w-[75%] lg:mx-auto "
            height={300}
            alt="Ilustração das pessoas trabalhando"
          />
        </div>
      </section>

      <section className="flex flex-col items-center mt-20 lg:px-48 max-sm:flex-col max-sm:my-10 max-sm:px-8 ">
        <div className="w-[70px] h-[5px] bg-custom-gradient-separator"></div>
        <h2 className="text-4xl my-8 w-2/5 text-center max-sm:w-full max-sm:text-left max-sm:text-3xl max-sm:mt-4 max-sm:mb-8">
          Como desenvolvemos{" "}
          <span className="font-bold">projetos de sucesso</span>
        </h2>
        <div className="flex gap-2 items-center w-full max-sm:flex-col">
          <div className="flex flex-col w-full max-sm:flex-col mt-10">
            <div className="flex items-center w-full justify-between px-10 max-sm:flex-col">
              {topProjects.map((project, index) => {
                return (
                  <div key={index} className="flex flex-col items-center pr-10 max-sm:flex-row">
                    <CardProjects
                      key={index}
                      description={project.description}
                      order={project.order}
                      title={project.title}
                    />
                    <Separator orientation="vertical" />
                  </div>
                );
              })}
            </div>
            <div className="w-full h-[3px] bg-custom-gradient-separator max-sm:h-20 max-sm:w-[3px]"></div>
            <div className="flex items-center w-full justify-between px-10 max-sm:flex-col ">
              {bottomProjects.map((project, index) => {
                return (
                  <div key={index} className="flex flex-col items-center pl-10 max-sm:flex-col">
                    <Separator orientation="vertical" />
                    <CardProjects
                      key={index}
                      description={project.description}
                      order={project.order}
                      title={project.title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <Image alt="Ilustração de um Troféu" src={trophyIcon} width={40} />
        </div>
      </section>

      <section className="lg:mt-20 mt-6 mb-3 max-sm:px-8 lg:px-48">
      <div className="w-[70px] h-[5px] bg-custom-gradient-separator"></div>
      <h2 className="text-4xl my-8 w-3/4 max-sm:w-full max-sm:mt-4  max-sm:text-3xl">
            Nossos{" "}
            <span className="font-bold">Artigos</span>
          </h2>
        <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden " >
          {postsBlog.map((post, index) => (
            <div key={index} className="min-w-[254px] max-w-[254px]" >
              <BlogCard imageUrl={post.imageUrl} name={post.name} />
            </div>
          ))}
        </div>
      </section>



      <section className="flex justify-between lg:px-48 items-center my-20 max-sm:my-10 max-sm:px-8">
        <Footer />
      </section>

    </>
  );
}
