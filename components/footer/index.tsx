import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import logoMadgic from "../../assets/logoMadgic.webp";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="flex justify-center h-full max-sm:flex-col max-sm:items-center max-sm:gap-6 " >
            <div className="flex flex-col items-start justify-start gap-4 w-1/4 max-sm:w-full">
                <ul className="flex flex-col items-start gap-6 text-sm">
                    <li>
                        <Image src={logoMadgic} alt="Logo" width={80} />
                    </li>

                    <li className="w-3/4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque explicabo commodi perspiciatis quae, voluptatum deleniti.</li>

                </ul>
            </div>
            <div className="flex flex-col items-start gap-4  w-1/4  max-sm:w-full">
                <h3 className="font-semibold">Links</h3>
                <ul className="flex flex-col items-start gap-2 text-sm">
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>How it works</li>
                    <li>Blog</li>
                    <li>Carrers</li>
                    <li>Areas We Serve</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-4  w-1/4  max-sm:w-full">
                <h3 className="font-semibold">Contact Us</h3>
                <ul className="flex flex-col items-start gap-2 text-sm">
                    <li className="w-3/4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque explicabo commodi perspiciatis quae, voluptatum deleniti.</li>
                    <li>+55 85988888888 </li>
                </ul>
            </div>
            <div className="flex  items-end justify-center gap-4  w-1/4  max-sm:w-full">

                <Facebook />
                <Instagram />
                <Twitter />
                <Linkedin />


            </div>
        </footer>
    )
}