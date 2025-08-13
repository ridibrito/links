import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IconFacebook,  IconTikTok, IconYouTube, IconInstagram, IconLinkedIn } from "@/components/icons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Links Coruss",
  description: "Acelere vendas com Marketing, IA e CRM em um só lugar.",
  metadataBase: new URL("https://links.coruss.com.br"),
  openGraph: {
    title: "Links Coruss",
    description: "Acelere vendas com Marketing, IA e CRM em um só lugar.",
    url: "https://links.coruss.com.br",
    siteName: "Coruss",
    images: [
      { url: "/logo.png", width: 800, height: 418, alt: "Coruss" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Links Coruss",
    description: "Acelere vendas com Marketing, IA e CRM em um só lugar.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <div className="min-h-dvh flex flex-col items-center">
          <header className="w-full">
            <div className="container px-5 py-8 flex flex-col items-center gap-3">
              <Link href="/" aria-label="Coruss - página inicial">
                <Image src="https://www.coruss.com.br/logos_coruss/logo_laranja.png" alt="Coruss" width={132} height={36} priority />
              </Link>
              <p className="text-center text-balance text-md text-[color:var(--muted)]">Acelere vendas com Marketing, IA e CRM em um só lugar.</p>
              <div className="mt-2 flex items-center gap-4">
                <a href="https://www.linkedin.com/company/corussconsultoria" target="_blank" className="social-icon" aria-label="LinkedIn"><IconLinkedIn /></a>
                <a href="https://www.facebook.com/corussconsultoria" target="_blank" className="social-icon" aria-label="Facebook"><IconFacebook /></a>
                <a href="https://www.instagram.com/coruss_consultoria/" target="_blank" className="social-icon" aria-label="Instagram"><IconInstagram /></a>
                <a href="https://www.tiktok.com/@coruss_consultoria" target="_blank" className="social-icon" aria-label="TikTok"><IconTikTok /></a>
                <a href="https://www.youtube.com/@coruss_consultoria" target="_blank" className="social-icon" aria-label="YouTube"><IconYouTube /></a>
              </div>
            </div>
          </header>
          <main className="w-full flex-1">
            {children}
           
          </main>
          
          {/* Rodapé removido conforme solicitado */}
        </div>
      </body>
    </html>
  );
}
