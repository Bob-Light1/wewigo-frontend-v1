"use client"


const Trusted = () => {
  // Les fichiers images doivent être dans /public/logos/
  const companyLogos = [
    { src: "/logos/slack.png", alt: "wewigo" },
    { src: "/logos/framer.png", alt: "Global SprachInstitut" },
    { src: "/logos/netflix.png", alt: "Institut Visas" },
    { src: "/logos/google.png", alt: "Apple" },
    { src: "/logos/linkedin.png", alt: "Amawon" },
    { src: "/logos/instagram.png", alt: "Allemagne" },
    { src: "/logos/facebook.png", alt: "Coca" },
  ];

  return (
    <main className="flex flex-col items-center justify-center mt-110  lg:mt-10 bg-gray-50 text-gray-800 overflow-hidden">

      {/* --- Marquee défilante --- */}
      <section className="relative w-full overflow-hidden select-none py-6">
        <style jsx>{`
          .marquee {
            display: flex;
            width: 200%;
            animation: scroll 18s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        {/* Dégradés latéraux */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Conteneur principal */}
        <div className="marquee">
          <div className="flex justify-around w-full">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-40 h-24 mx-8 grayscale hover:grayscale-0 transition"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trusted;
