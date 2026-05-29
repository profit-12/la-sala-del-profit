export default function VipPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Contenido VIP
        </h1>

        <p className="text-zinc-400 text-lg mb-12">
          Aquí encontrarás análisis, señales, sesiones en vivo y contenido exclusivo de la Sala VIP.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard
            title="Análisis en Vivo"
            description="Revisión del mercado antes y durante la sesión de New York."
            image="/imagenes/bienvenida-vip.jpeg"
          />

          <ContentCard
            title="Señales VIP"
            description="Ideas de operación con entrada, stop loss, take profit y gestión de riesgo."
            image="/trading.jpeg"
          />

          <ContentCard
            title="Comunidad"
            description="Acompañamiento diario, dudas, seguimiento y aprendizaje junto al grupo."
            image="/imagenes/bienvenida-bootcamp.jpeg"
          />
        </div>
      </section>
    </main>
  );
}

function ContentCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}