export default function VIPPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-green-400 mb-10">
        SALA VIP
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-green-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Señales en Vivo
          </h2>

          <p className="text-gray-400">
            Accede a operaciones y análisis en tiempo real.
          </p>
        </div>

        <div className="bg-white/5 border border-green-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Sesión New York
          </h2>

          <p className="text-gray-400">
            Trading en vivo con la comunidad.
          </p>
        </div>

        <div className="bg-white/5 border border-green-500/20 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Psicología
          </h2>

          <p className="text-gray-400">
            Mentalidad y disciplina profesional.
          </p>
        </div>

      </div>

    </div>
  )
}