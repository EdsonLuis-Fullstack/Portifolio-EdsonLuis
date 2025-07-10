import Image from "next/image";
import { Github, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import MyPhoto from "@/assets/Myphoto.jpg";

const WorkanaIcon = () => (
  <img
    src="https://brand.workana.com/images/icons/apple-icon-57x57.png"
    alt="Workana"
    width="16"
    height="16"
    className="inline-block"
  />
);
export default function Home() {
  return (
    <section className="bg-[#0D0D0D] w-full min-h-[100vh] relative overflow-hidden">
      {/*Section Home */}
      <div className="container mx-auto px-4 lg:px-8 h-screen flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 z-10 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-6xl text-start mt-[20px] md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#353232] via-white to-[#B0B0B0] bg-clip-text text-transparent relative">
              Desenvolvedor
              <span className="absolute inset-0 bg-gradient-to-r from-[#D9D9D9] via-white to-[#B0B0B0] bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></span>
            </span>
            <span className="block mt-2 bg-gradient-to-r from-[#504220] via-[#D4B366] to-[#C5A253] bg-clip-text text-transparent relative">
              Frontend
              <span className="absolute inset-0 bg-gradient-to-r from-[#C5A253] via-[#D4B366] to-[#C5A253] bg-clip-text text-transparent blur-sm opacity-60 animate-pulse"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#C5A253] via-[#F5E6A3] to-[#C5A253] bg-clip-text text-transparent opacity-40 animate-ping"></span>
            </span>
          </h1>
          <p className="text-[#B0B0B0] text-start text-lg md:text-xl lg:text-2xl mb-[20px] max-w-2xl leading-relaxed">
            Desenvolvedor Front end com 4 anos de experiência no mercado. Freelancer profissional com mais de<br className="lg:block hidden"></br> R$15 mil em projetos entregues, especializado em React, Next.js, Tailwind CSS, Styled Components, e soluções web de alta performance para startups e agências.
            </p>
          <div className="flex flex-row items-center gap-2">
            <div className="flex w-full flex-wrap gap-2">
              <Badge>
                <a href="https://github.com/EdsonLuis-Fullstack" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github />
                  GitHub
                </a>
              </Badge>
              <Badge variant="secondary">
                <a href="https://www.workana.com/freelancer/0ba3fc7d730d4e14bc56ad053a605c5e" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <WorkanaIcon />
                  Workana
                </a>
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <a href="https://www.linkedin.com/in/edson-luis-155291371/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Linkedin />
                  LinkedIn
                </a>
              </Badge>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="relative px-8 py-3 rounded-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A253]/50 scale-100 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B366] via-[#F5E6A3] to-[#C5A253]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C5A253] via-[#F5E6A3] to-[#C5A253] opacity-20 blur-sm animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C5A253] via-[#F5E6A3] to-[#C5A253] opacity-0 group-hover:opacity-40 blur-sm animate-pulse"></div>
              <span className="relative z-10 text-[#0D0D0D] font-bold">
                Ver Projetos
              </span>
              </button>
            <button className="relative border border-[#5C6672] px-8 py-3 rounded-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#5C6672]/30 hover:scale-102 bg-gradient-to-r from-[#2F2F2F] to-[#1C1C1C]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5C6672] via-[#7A8491] to-[#5C6672] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5C6672] via-[#8A96A3] to-[#5C6672] opacity-0 group-hover:opacity-20 blur-sm"></div>
              <span className="relative z-10 bg-gradient-to-r from-[#D9D9D9] via-[#B0B0B0] to-[#D9D9D9] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300 font-semibold">
                Contato
              </span>
              </button>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
            <Image
              src={MyPhoto}
              alt="Foto do desenvolvedor"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent lg:from-transparent lg:via-[#0D0D0D]/40 lg:to-[#0D0D0D]/80"></div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C5A253] rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#5C6672] rounded-full opacity-30"></div>
        </div>
      </div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#C5A253] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#5C6672] rounded-full opacity-5 blur-3xl"></div>
      {/*Section of projects */}
      <section className="min-h-screen">
      </section>
    </section>
  );
}