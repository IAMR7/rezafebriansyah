"use client";
import { useState } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import "./globals.css";

// export const metadata = {
//   title: "Reza Febriansyah - Web Profile",
//   description: "I like exploration!",
// };

export default function RootLayout({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <html lang="en" data-theme={toggle === true ? "winter" : "night"}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <title>Reza Febriansyah - Web Profile</title>
      </head>
      <body>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
