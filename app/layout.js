"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/navigation";
import FinanceContextProvider from "./lib/store/finance-context";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FinanceContextProvider>
        <Nav/>
        {children}
        </FinanceContextProvider>
      </body>
    </html>
  );
}
