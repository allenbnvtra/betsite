import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minibets",
  description:
    "Get exciting bonuses and best odds. Number 1 casino in The Philippines. We offer live casino, sports betting, slots and many more.",
  icons: {
    icon: "/images/king.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
