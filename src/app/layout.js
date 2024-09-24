import localFont from "next/font/local";
import BroadSelection from "./broadSelection/page";
import "./globals.css";
import LandingPage from "./landingPage/page";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Header />
        {children}
 
        <Footer />
      </body>
    </html>
  );
}
