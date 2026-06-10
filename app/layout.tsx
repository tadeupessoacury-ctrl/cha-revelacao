import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chá Revelação — Pedro ou Clara? 💛",
  description: "Confirme sua presença no Chá Revelação Festa Junina — 28 de Junho às 15h",
  openGraph: {
    title: "Chá Revelação — Pedro ou Clara?",
    description: "28 de Junho • 15h • Rua Dr. Mario Viana, 486",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={nunito.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
