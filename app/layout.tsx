import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Restaurante El Quillo",
  description: "Reserva tu mesa en Restaurante Órdago Getafe",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
