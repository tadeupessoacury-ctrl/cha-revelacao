import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
