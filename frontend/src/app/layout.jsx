import "./globals.css";
import { Providers } from './providers'
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export const metadata = {
  title: "E-Shop",
  description: "Generated by create next app",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden"
      >
         <Providers>
         <Navbar/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
