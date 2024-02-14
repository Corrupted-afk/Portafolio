import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { ClientThemeWrapper } from "./context/ClientThemeWrapper";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body >
        <ThemeProvider>
          <ClientThemeWrapper>
            <Navbar></Navbar>
            <div className="mx-auto max-w-5xl text-2xl ">

            {children}
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
        </body>
    </html>
  );
}
