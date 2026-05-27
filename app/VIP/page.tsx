export default function VIPPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-green-400 mb-8">
        SALA VIP
      </h1>

      <div className="grid gap-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Clase 1 - Introducción
          </h2>

          <video
            controls
            className="w-full rounded-2xl"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  )
}