export default function LaSalaDelProfit() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#00ff99,_transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6 border border-green-500/30">
              Academia de Trading Profesional
            </span>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://i.ibb.co/twJsQPJ0/IMG-20260520-WA0003.jpg"
                alt="Logo La Sala del Profit"
                className="w-20 h-20 rounded-2xl border border-green-500/30 shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              LA SALA
              <span className="block text-green-400">DEL PROFIT</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Aprende trading desde cero con estrategias reales, análisis en vivo y una comunidad enfocada en resultados.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl font-bold text-black shadow-2xl">
                Empezar Ahora
              </button>

              <button className="border border-white/20 hover:border-green-400 transition px-8 py-4 rounded-2xl font-bold">
                Ver Cursos
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 shadow-2xl max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1642543348745-77d0b7f1f1d6?q=80&w=1200&auto=format&fit=crop"
                alt="Trading"
                className="rounded-3xl mb-6 w-full h-72 object-cover"
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-black/30 rounded-2xl px-5 py-4">
                  <span>Señales en Vivo</span>
                  <span className="text-green-400 font-bold">24/7</span>
                </div>

                <div className="flex items-center justify-between bg-black/30 rounded-2xl px-5 py-4">
                  <span>Mentorías Privadas</span>
                  <span className="text-green-400 font-bold">Premium</span>
                </div>

                <div className="flex items-center justify-between bg-black/30 rounded-2xl px-5 py-4">
                  <span>Comunidad Exclusiva</span>
                  <span className="text-green-400 font-bold">VIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">¿Qué aprenderás?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Formación completa para traders que quieren resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-3">Análisis Técnico</h3>
            <p className="text-gray-400">
              Aprende a interpretar gráficos y detectar oportunidades de entrada.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">Gestión de Capital</h3>
            <p className="text-gray-400">
              Protege tu dinero y mejora tu disciplina como trader profesional.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Trading en Vivo</h3>
            <p className="text-gray-400">
              Participa en sesiones reales y aprende junto a traders expertos.
            </p>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="bg-gradient-to-r from-green-900/20 to-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Nuestros Planes</h2>
          <p className="text-gray-400 mb-14">
            Escoge el plan ideal para comenzar tu camino en el trading.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Básico</h3>
              <p className="text-5xl font-extrabold mb-6">€29</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✔ Curso Inicial</li>
                <li>✔ Comunidad</li>
                <li>✔ Clases Grabadas</li>
              </ul>
              <button className="w-full py-3 rounded-2xl bg-white text-black font-bold">
                Elegir
              </button>
            </div>

            <div className="bg-green-500 text-black rounded-3xl p-8 scale-105 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-5xl font-extrabold mb-6">€79</p>
              <ul className="space-y-3 mb-8">
                <li>✔ Todo lo Básico</li>
                <li>✔ Mentorías</li>
                <li>✔ Señales VIP</li>
              </ul>
              <button className="w-full py-3 rounded-2xl bg-black text-white font-bold">
                Más Popular
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Elite</h3>
              <p className="text-5xl font-extrabold mb-6">€149</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✔ Acceso Total</li>
                <li>✔ Trading en Vivo</li>
                <li>✔ Soporte Privado</li>
              </ul>
              <button className="w-full py-3 rounded-2xl bg-white text-black font-bold">
                Elegir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PAGOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-green-500/10 to-black border border-green-500/20 rounded-[40px] p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Métodos de Pago</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Realiza tu pago de forma rápida y segura para acceder inmediatamente a la academia.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-bold mb-2">Tarjeta</h3>
              <p className="text-gray-400">Aceptamos Visa, Mastercard y débito.</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-2">Transferencia</h3>
              <p className="text-gray-400">Pagos bancarios nacionales e internacionales.</p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <div className="text-5xl mb-4">📲</div>
              <h3 className="text-2xl font-bold mb-2">PayPal</h3>
              <p className="text-gray-400">Pago rápido y seguro desde cualquier país.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-8 py-4 rounded-2xl shadow-xl">
              Pagar Ahora
            </button>

            <button className="border border-white/20 hover:border-green-400 transition px-8 py-4 rounded-2xl font-bold">
              Contactar Asesor
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-400 mb-8">
            Escríbenos directamente para más información sobre cursos y mentorías.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/34673534620"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-8 py-4 rounded-2xl shadow-xl"
            >
              WhatsApp Directo
            </a>

            <a
              href="https://instagram.com/lasaladelprofit"
              target="_blank"
              className="border border-white/20 hover:border-green-400 transition px-8 py-4 rounded-2xl font-bold"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
{/* EQUIPO */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Profesionales comprometidos con tu crecimiento en el trading y la educación financiera.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-8">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
      <img
    src="https://i.ibb.co/35ZV9PjB/IMG-20260520-WA0000.jpg"
    alt="Mario peña"
    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
  />

  <h3 className="text-2xl font-bold">
    Mario peña 
  </h3>

  <p className="text-green-400 font-semibold mt-2">
    Ceo-Mentor
  </p>
</div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
  
  <img
    src="https://i.ibb.co/QFyWZ9ZR/IMG-20260520-WA0001.jpg"
    alt="Enzo Pabon"
    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
  />

  <h3 className="text-2xl font-bold">
    Enzo pabon 
  </h3>

  <p className="text-green-400 font-semibold mt-2">
    Mentor
  </p>
</div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
     <img
    src="https://i.ibb.co/WpfT07vg/IMG-20260520-WA0002.jpg"
    alt="zoily solares "
    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
  />

  <h3 className="text-2xl font-bold">
    Zoily solares 
  </h3>

  <p className="text-green-400 font-semibold mt-2">
    Mentora
  </p>
</div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">
  <img
    src="https://i.ibb.co/xtKT3qCZ/IMG-20260518-WA0005.jpg"
    alt="Alejandro Bermudez"
    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
  />

  <h3 className="text-2xl font-bold">
    Alejandro Bermudez
  </h3>

  <p className="text-green-400 font-semibold mt-2">
    Productor Administrativo
  </p>
</div>
  </div>
</section>
{/* SOBRE NOSOTROS */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">
</div>
    <div>
      <img
        src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop"
        alt="Trading Academy"
        className="rounded-[40px] shadow-2xl"
      />
    </div>

    <div>
      <span className="text-green-400 font-bold uppercase tracking-widest">
        Sobre Nosotros
      </span>

      <h2 className="text-5xl font-extrabold mt-4 mb-6">
        Construimos Traders Reales
      </h2>

      <p className="text-gray-300 text-lg mb-6">
        En La Sala del Profit ayudamos a personas a desarrollar disciplina,
        mentalidad y estrategias reales para crecer dentro del trading.
      </p>

      <p className="text-gray-400 mb-8">
        Nuestra academia combina mentorías, sesiones en vivo y educación
        profesional enfocada en resultados sostenibles.
      </p>

      <div className="flex gap-8">
        <div>
          <h3 className="text-4xl font-bold text-green-400">+500</h3>
          <p className="text-gray-400">Alumnos</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-400">+120</h3>
          <p className="text-gray-400">Mentorías</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-400">24/7</h3>
          <p className="text-gray-400">Comunidad</p>
        </div>
      </div>
    </div>
</section>

{/* TESTIMONIOS */}
<section className="bg-gradient-to-r from-black to-green-900/20 py-20 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">
        Resultados de Nuestros Alumnos
      </h2>

      <p className="text-gray-400">
        Historias reales de crecimiento y transformación.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-4xl mb-4">⭐</div>

        <p className="text-gray-300 mb-6">
          “Aprendí desde cero y ahora tengo una estrategia clara y disciplina.”
        </p>

        <h3 className="font-bold text-green-400">
          Carlos M.
        </h3>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-4xl mb-4">🚀</div>

        <p className="text-gray-300 mb-6">
          “Las mentorías en vivo me ayudaron muchísimo a entender el mercado.”
        </p>

        <h3 className="font-bold text-green-400">
          Andrea P.
        </h3>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-4xl mb-4">📈</div>

        <p className="text-gray-300 mb-6">
          “Ahora opero con más confianza y gestión de riesgo profesional.”
        </p>

        <h3 className="font-bold text-green-400">
          Miguel R.
        </h3>
      </div>

    </div>
  </div>
</section>
{/* FAQ */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-4">
      Preguntas Frecuentes
    </h2>

    <p className="text-gray-400">
      Resolvemos las dudas más comunes sobre nuestra academia.
    </p>
  </div>

  <div className="space-y-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-3">
        ¿Necesito experiencia para comenzar?
      </h3>

      <p className="text-gray-400">
        No. Nuestra academia está diseñada para principiantes y traders avanzados.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-3">
        ¿Las mentorías son en vivo?
      </h3>

      <p className="text-gray-400">
        Sí. Realizamos sesiones en vivo y análisis de mercado constantemente.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-3">
        ¿Cómo puedo acceder a la comunidad VIP?
      </h3>

      <p className="text-gray-400">
        Al adquirir cualquiera de nuestros planes premium tendrás acceso inmediato.
      </p>
    </div>

  </div>
</section>
{/* MISION Y VISION */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold mb-4">
      Nuestra Filosofía
    </h2>

    <p className="text-gray-400">
      Los valores y objetivos que impulsan La Sala del Profit.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">
      <h3 className="text-3xl font-bold mb-4 text-green-400">
        Nuestra Misión
      </h3>

      <p className="text-gray-300 text-lg leading-relaxed">
        Nuestra misión es transformar la educación financiera y el trading en una oportunidad real de crecimiento para personas de todo el mundo, brindando herramientas, mentorías y estrategias profesionales que permitan desarrollar disciplina, mentalidad y resultados sostenibles en los mercados financieros.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">
      <h3 className="text-3xl font-bold mb-4 text-green-400">
        Nuestra Visión
      </h3>

      <p className="text-gray-300 text-lg leading-relaxed">
        Nuestra visión es convertirnos en una de las academias de trading más reconocidas a nivel internacional, formando una comunidad sólida de traders preparados, educados y enfocados en la libertad financiera a través del conocimiento y la innovación.
      </p>
    </div>

  </div>
</section>
<footer className="border-t border-white/10 py-10 px-6 text-center text-gray-400"></footer>
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-400">
        <h3 className="text-2xl font-bold text-white mb-2">LA SALA DEL PROFIT</h3>
        <p>Academia profesional de trading y educación financiera.</p>
      </footer>
    </div>
  )
}
