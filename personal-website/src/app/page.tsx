import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[Savate]">
      <header className="sticky top-0">
        <nav className="lg:px-6 py-2.5 backdrop-filter backdrop-blur-lg bg-opacity-80">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="localhost:3000" className="flex items-center text-3xl tracking-wider hover:text-gray-600">
              Jacob Smith
            </a>
            <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 text-xl lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:text-gray-600">Portfolio</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:text-gray-600">Blog</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:text-gray-600">Contact</a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="grid grid-rows-[20px_1fr_px] items-center justify-items-center">
        <h1 className="font-[Savate] text-9xl tracking-widest pt-72">
          Designed. <br></br> Built. <br></br> Loved.
        </h1>
      </div>
      <div className="grid grid-rows-3 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      </div>
    </div>
  );
}
