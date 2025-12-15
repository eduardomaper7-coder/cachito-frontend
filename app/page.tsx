import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main
  className="min-h-screen bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('/fondo-restaurante.jpg')",
    backgroundPosition: "center top"
  }}
>


      <Navbar />

     {/* HERO */}
<section
  className="
    relative 
    w-full 
    h-[600px]          /* Más alto para evitar zoom excesivo */
    md:min-h-screen
    bg-no-repeat 
    bg-center 
    bg-cover           /* Ahora SIEMPRE cover en móvil */
  "
  style={{
    backgroundImage: "url('/hero-mobile.jpg')",
  }}
>

  {/* IMAGEN DESKTOP QUE SUSTITUYE A LA DE MÓVIL */}
  <div
    className="
      hidden md:block 
      absolute inset-0 
      bg-cover bg-center 
    "
    style={{
      backgroundImage: "url('/hero-desktop.jpg')",
      backgroundPosition: "center top"
    }}
  ></div>

  {/* CONTENIDO DEL HERO */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-white font-bold text-5xl md:text-7xl leading-tight drop-shadow-lg">
      Gastrotaberna <br /> Cachito's
    </h2>

    <a
      href="#reserva"
      className="mt-10 px-10 py-4 border border-white text-white rounded-lg text-xl font-semibold 
                 transition-all duration-300 hover:bg-white hover:text-black"
    >
      Reserva tu mesa
    </a>
  </div>
</section>



{/* SECCIÓN: Sabores que inspiran */}
<section className="bg-white text-[#0f172a] py-20 px-6 text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
    Sabores que inspiran
  </h2>


  <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
    Una experiencia gastronómica creada para disfrutar cada momento.
  </p>
</section>

{/* SECCIÓN: Imágenes con frases */}
<section className="w-full bg-white">
  <div className="grid grid-cols-1 md:grid-cols-3">
    
    {/* IMAGEN 1 */}
    <div className="relative w-full h-[500px] md:h-[700px]">
      <img
        src="/img1.jpg"
        alt="Imagen 1"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <p className="text-white text-xl md:text-2xl font-semibold text-center px-4">
          Ingredientes que hablan por sí mismos.
        </p>
      </div>
    </div>

    {/* IMAGEN 2 */}
    <div className="relative w-full h-[500px] md:h-[700px]">
      <img
        src="/img2.jpg"
        alt="Imagen 2"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <p className="text-white text-xl md:text-2xl font-semibold text-center px-4">
          Un lugar donde cada momento sabe mejor.
        </p>
      </div>
    </div>

    {/* IMAGEN 3 */}
    <div className="relative w-full h-[500px] md:h-[700px]">
      <img
        src="/img3.jpg"
        alt="Imagen 3"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <p className="text-white text-xl md:text-2xl font-semibold text-center px-4">
          Cocina que emociona, servicio que enamora.
        </p>
      </div>
    </div>

  </div>
</section>


{/* SECCIÓN: Platos Estrella */}
<section className="bg-white text-[#0f172a] py-12 md:py-24 px-6">
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
      Nuestros Platos Estrella
    </h2>

    <p className="text-lg md:text-2xl max-w-3xl mx-auto opacity-80 mt-5">
      Una selección cuidada de sabores que representan nuestra esencia culinaria.
    </p>
  </div>

  {/* GRID DE 3 PLATOS */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

    {/* PLATO */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/plato1.jpg"
        className="
          rounded-xl shadow-xl w-full max-w-md object-cover
          h-[260px] md:h-[450px]
        "
      />
      <h3 className="text-3xl md:text-5xl font-semibold mt-8">
        Sabores del Bosque
      </h3>
      <p className="mt-3 opacity-80 text-lg md:text-2xl max-w-md">
        Una combinación delicada de texturas y aromas inspirados en la naturaleza.
      </p>
    </div>

    {/* PLATO 2 */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/plato2.jpg"
        className="
          rounded-xl shadow-xl w-full max-w-md object-cover
          h-[260px] md:h-[450px]
        "
      />
      <h3 className="text-3xl md:text-5xl font-semibold mt-8">
        Mar y Fuego
      </h3>
      <p className="mt-3 opacity-80 text-lg md:text-2xl max-w-md">
        Un equilibrio perfecto entre frescura marina y el toque ahumado del fuego.
      </p>
    </div>

    {/* PLATO 3 */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/plato3.jpg"
        className="
          rounded-xl shadow-xl w-full max-w-md object-cover
          h-[260px] md:h-[450px]
        "
      />
      <h3 className="text-3xl md:text-5xl font-semibold mt-8">
        Tradición Renovada
      </h3>
      <p className="mt-3 opacity-80 text-lg md:text-2xl max-w-md">
        Un plato icónico reinterpretado para sorprender al paladar.
      </p>
    </div>

  </div>
</section>

{/* SECCIÓN: Descubre la historia (solo ordenador) */}
<section className="hidden md:block w-full bg-white py-16 px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-stretch">

    <div className="w-full h-[700px]">
      <img
        src="/historia.jpg"
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
      />
    </div>

    <div
      className="
        flex flex-col justify-center 
        bg-white text-[#0f172a] 
        p-16 rounded-2xl 
        h-[700px]
        shadow-2xl animate-float
      "
    >
      <h3 className="text-5xl font-bold mb-6 leading-tight">
        Descubre <br /> La historia de nuestra cocina.
      </h3>

      <p className="text-2xl opacity-90 leading-relaxed">
        Nuestra cocina nace de la pasión por el buen producto y del deseo de compartir experiencias auténticas.
        A lo largo de los años, hemos unido tradición y creatividad para dar vida a platos que cuentan una historia.
        Cada receta refleja dedicación, sabor y el compromiso de ofrecer momentos inolvidables en cada visita.
      </p>

      <a href="#conocenos" className="mt-8 text-2xl underline hover:opacity-70">
        Saber más...
      </a>
    </div>

  </div>
</section>




{/* SECCIÓN: VISÍTANOS */}
<section className="bg-white py-16 md:py-20 px-6 text-center">
  <h2 className="text-4xl md:text-6xl font-bold">Ven a visitarnos</h2>
  <p className="text-lg md:text-2xl opacity-80 mt-4">
    C. Leganés, 3, 28901 Getafe, Madrid
  </p>

  <div className="mt-10 md:mt-12 w-full max-w-5xl md:max-w-7xl mx-auto">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.134554872495!2d-3.734514684606177!3d40.30551407937945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418b1ab7e8fc41%3A0xd9dfaf039ad39224!2sC.%20Legan%C3%A9s%2C%203%2C%2028901%20Getafe%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000"
      width="100%"
      height="450"
      className="rounded-xl shadow-xl w-full h-[300px] md:h-[500px]"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

<footer className="bg-black text-white py-14 px-6 text-center">
  <h3 className="text-3xl font-bold">Contacta con nosotros</h3>

  <p className="text-lg opacity-80 mt-3">
    Lunes a Domingo de 9:00 a 23:00
  </p>

  <p className="text-2xl font-semibold mt-2">
    916018797
  </p>

  <p className="text-sm opacity-60 mt-6">
  Restaurante Órdago de Getafe
</p>

</footer>

    </main>
  );
}
