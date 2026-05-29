import Image from "next/image";

export default function VipPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      
      <h1 className="text-5xl font-bold mb-8 text-green-400">
        Sala VIP
      </h1>

      <Image
        src="/imagenes/bienvenida-vip.jpeg"
        alt="VIP"
        width={900}
        height={500}
        className="rounded-2xl"
      />

    </main>
  );
}
