import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-rows-[20px_1fr_px] text-center">
        <h1 className="font-[Savate] text-9xl tracking-wide pt-72 hover:tracking-widest">
          Designed.
        </h1>
        <h2 className="font-[Savate] text-9xl tracking-wide pt-12 hover:tracking-widest">
          Built.
        </h2>
        <h3 className="font-[Savate] text-9xl tracking-wide pt-12 hover:tracking-widest">
          Loved.
        </h3>
      </div>
      <div className="text-center">
        <h4 className="font-[Savate] text-5xl pt-72">
          <p>
            Welcome to my website, a showcase for my projects and interests in the computer science sphere.
          </p>
        </h4>
      </div>
    </div>
  );
}
