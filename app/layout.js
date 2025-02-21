"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/navigation";
import FinanceContextProvider from "./lib/store/finance-context";
import AuthContextProvider from "./lib/store/auth-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
        <FinanceContextProvider>
        <Nav/>
        {children}
        </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
