import { Inter } from "next/font/google";
import "./globals.css";
import Example from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ME: Your own AI",
  description: "Created by Aviral ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
