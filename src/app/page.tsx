import LinkButton from "@/components/LinkButton";
import { IconBook, IconBot, IconRocket, IconWhatsApp } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-5 pb-16">
      <section className="flex flex-col gap-4">
        <LinkButton href="https://api.whatsapp.com/send?phone=5561981601063&text=Olá%20Coruss%2C%20quero%20agendar%20minha%20Análise%20Estratégica" variant="light" plainIcon icon={<IconWhatsApp size={32} />}>
          Agende sua Análise Estratégica
        </LinkButton>
        <LinkButton href="https://coruss.com.br/servicos" icon={<IconRocket />}>
          Conheça Nossas Soluções de Marketing
        </LinkButton>
        <LinkButton href="https://www.coruss.com.br/inteligencia-artificial" icon={<IconBot />}>
          Agentes de Inteligência Artificial
        </LinkButton>
        <div className="mt-2 w-full">
          <div >
            <iframe
              src="https://www.youtube.com/embed/y00g2YEug5o"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full"
              allowFullScreen
            />
          </div>
        </div>
        <LinkButton href="https://coruss.com.br/blog/" icon={<IconBook />}>
          Leia nosso Último Artigo no Blog
        </LinkButton>
        <h3 className="mt-3 text-sm font-semibold text-[color:var(--muted)]">Organize suas Vendas com CRM</h3>
        
        <div className="mt-2 grid grid-cols-3 gap-3">
          <LinkButton href="https://www.coruss.com.br/bitrix24" stacked plainIcon icon={<Image className="logo-white" src="/bitrix.png" alt="Bitrix24" width={110} height={36} /> }>
            Bitrix24
          </LinkButton>
          <LinkButton href="https://www.coruss.com.br/ploomes-crm" stacked plainIcon icon={<Image className="logo-white" src="/ploomes.png" alt="Ploomes" width={160} height={56}  /> }>
            Ploomes CRM
          </LinkButton>
          <LinkButton href="https://www.coruss.com.br/zoho-crm" stacked plainIcon icon={<Image className="logo-white" src="/zoho.webp" alt="Zoho CRM" width={110} height={36} /> }>
            Zoho CRM Plus
          </LinkButton>
        </div>
        
        
        
      </section>

    
    </div>
  );
}
