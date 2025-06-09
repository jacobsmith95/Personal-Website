export default function Home() {
  return (
    <div className="font-[Savate]">
        <h1 className="text-6xl text-center pt-32">
            Contact Me:
        </h1>
        <div className="grid grid-cols-2 gap-12 p-32 pt-64 text-center text-4xl justify-center">
            <a target="_blank" href="https://www.linkedin.com/in/jacob-smith-53233279" className="" rel="noopener noreferrer">LinkedIn</a>
            <a target="_blank" href="https://dev.to/jacobsmith95" className="" rel="noopener noreferrer">Dev.to</a>
            <a target="_blank" href="https://github.com/jacobsmith95" className="col-span-2" rel="noopener noreferrer">Github</a>
            <div className="">05</div>
            <div className="">06</div>
            <div className="col-span-2">07</div>
        </div>
    </div>
  );
}