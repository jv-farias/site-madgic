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

const topProjects = sucessProjects.filter((_, index) => index % 2 === 0);
const bottomProjects = sucessProjects.filter((_, index) => index % 2 !== 0);

export default function Home() {
  return (
    <>
      <div className="lg:px-48">
        <Header />
      </div>
      <section className="flex justify-between lg:px-48 items-center mt-20">
        <div className="flex flex-col items-start gap-8 w-[40%] 	">
          <h1 className="text-5xl leading-tight	text-[#1A202C]">
            Seu negócio aos <span className="font-bold">olhos do mundo</span>
          </h1>
          <h2 className="text-[#4A5568] text-base">
            Com a Madgic, você conta com o desenvolvimento rápido, seguro e de
            alta performance do seu website, loja virtual ou aplicativo.
          </h2>
          <Button className="bg-[#3D63EA;] hover:bg-[#2d4499]">
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
      </section>

      <section className="lg:px-48 flex flex-col items-center bg-[#F9F9FF] w-full mt-20 py-10 border-gray-200 border ">
        <h2 className="text-4xl mb-10 font-semibold">
          Conheça nossos Serviços
        </h2>
        <div className="w-full flex items-center justify-between">
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

      <section className="flex justify-between items-center mt-20 lg:px-48">
        <div className="flex flex-col items-start w-1/2">
          <div className="w-[70px] h-[5px] bg-custom-gradient-separator"></div>
          <h2 className="text-4xl my-8 w-3/4">
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
        <div className="flex-1 justify-end items-end">
          <Image
            src={previewVideo}
            className="lg:w-[75%] lg:mx-auto "
            height={300}
            alt="Ilustração das pessoas trabalhando"
          />
        </div>
      </section>

      <section className="flex flex-col items-center mt-20 lg:px-48">
        <div className="w-[70px] h-[5px] bg-custom-gradient-separator"></div>
        <h2 className="text-4xl my-8 w-2/5 text-center">
          Como desenvolvemos{" "}
          <span className="font-bold">projetos de sucesso</span>
        </h2>
        <div className="flex gap-2 items-center w-full">
          <div className="flex flex-col w-full">
            <div className="flex items-center w-full justify-between px-10">
              {topProjects.map((project, index) => {
                return (
                  <div key={index} className="flex flex-col items-center pr-10">
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
            <div className="w-f h-[3px] bg-custom-gradient-separator"></div>
            <div className="flex items-center w-full justify-between px-10 ">
              {bottomProjects.map((project, index) => {
                return (
                  <div key={index} className="flex flex-col items-center pl-10">
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

      <section className="flex flex-col items-center mt-20 lg:px-48">
      <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full flex justify-between items-center">
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="databases">Databases</TabsTrigger>
        <TabsTrigger value="cms">CMS</TabsTrigger>
        <TabsTrigger value="cloud_testing">CloudTesting</TabsTrigger>
        <TabsTrigger value="devops">DevOps</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you0e done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            
            </div>
            <div className="space-y-1">

            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, youl be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
        
            </div>
            <div className="space-y-1">
    
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="joao">

      </TabsContent>
      <TabsContent value="vitor">
        
        </TabsContent>
    </Tabs>
      </section>
    </>
  );
}
