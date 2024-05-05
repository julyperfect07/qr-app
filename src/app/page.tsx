import Image from "next/image";

export default function Home() {
  return (
    <main className="  max-w-7xl mx-auto min-h-screen p-24">
      <div className=" text-center flex justify-between flex-col">
        <Image
          src="/kisspng-desk-office-graphic-design-vector-office-desk-computer-5aa2595e0c5603.5426725715205891500505.png"
          alt=""
          width={400}
          height={400}
        />
        <h1 className=" sm:text-8xl text-6xl z-10 text-[#2ec4b6] mt-12 rounded-lg text-center">
          سهلناها لك!
        </h1>
        <h1 className=" sm:text-6xl text-6xl z-10 text-[#2ec4b6] my-5 rounded-lg text-center">
          LinkSnip مع
        </h1>
        <h1 className="sm:text-5xl text-3xl z-10 text-[#2ec4b6] mt-10 rounded-lg text-center">
          !قصر روابطك و سهل الوصول اليها
        </h1>
        <h1 className=" sm:text-4xl text-2xl z-10 text-[#2ec4b6] my-2 rounded-lg text-center">
          {" "}
          الخاص بك (QR code) ونضبط لك
        </h1>
        <div></div>
      </div>
    </main>
  );
}
