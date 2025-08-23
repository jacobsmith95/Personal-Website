import type { Metadata } from "next";
//import Link from "next/link"
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Smith",
  description: "Jacob's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="font-[Savate] lg:px-6 py-2.5 backdrop-filter backdrop-blur-lg bg-opacity-80 sticky top-0">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center text-5xl tracking-wider hover:text-gray-600">Jacob Smith</div>
            <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 text-3xl lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                {/* <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:text-gray-600">Portfolio</a> */}
              </li>
              <li>
                {/* <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:text-gray-600">Blog</a> */}
              </li>
              <li>
                {/* <Link href="/contact" className="block py-2 pr-4 pl-3 text-white rounded hover:text-gray-600">Contact</Link> */}
              </li>
            </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
