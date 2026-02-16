import Image from "next/image";

export function Gallery() {
  const images = [
    // Gallery Items

    "/assets/gallery/copper scrap2.jfif.jpeg",
    "/assets/gallery/copper-scrap.jpg.jpeg",
    "/assets/gallery/wire.jpg.jpeg",
    "/assets/gallery/wire2.jfif.jpeg",

    // Office Scrap & Dismantling
    "/assets/office scrap and dismantaling/office-dismantling-service.jpg",
    "/assets/office scrap and dismantaling/office1.jpeg",
    "/assets/office scrap and dismantaling/office2.jpeg",
    "/assets/office scrap and dismantaling/office3.jpeg",
    "/assets/office scrap and dismantaling/office hero.jpeg",
    "/assets/office scrap and dismantaling/office.jpg",
    "/assets/office scrap and dismantaling/office dismantling.webp",
    "/assets/office scrap and dismantaling/officeafter3.jpeg",

    // Electrical & Power Scrap
    "/assets/electrical scraps/wirescrap.jpg",
    "/assets/electrical scraps/ups.jpeg",
    "/assets/electrical scraps/generator.jpeg",
    "/assets/electrical scraps/wire.jfif.jpeg",

    // HVAC Scrap
    "/assets/hvac scraps/acscraps.jpg",
    "/assets/hvac scraps/hvac.jpg",

    // Metal Scrap

    "/assets/metal scraps/metallandscao.jpeg",
    "/assets/metal scraps/copper.jpg",
    "/assets/metal scraps/aluminimumsubpage.jpeg",

    // Mixed Scrap
    "/assets/mixed scrap/mixed.jpg.jpeg",
    "/assets/mixed scrap/mixed3.jpg.jpeg",
    "/assets/mixed scrap/mixed2.jfif.jpeg",
    "/assets/mixed scrap/mix.jpg.jpeg",
    "/assets/mixed scrap/mix1.webp",
  ];

  return (
    <section className="section-gallery py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-6">
            Project <span className="text-green-600 italic font-serif">Gallery</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
            A comprehensive look at our large-scale industrial scrap management and dismantling operations across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Before & After Comparison Card */}
          <div className="col-span-2 md:row-span-2 relative aspect-[2/1] md:aspect-square overflow-hidden rounded-xl bg-gray-200 group hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="grid grid-cols-2 h-full">
              <div className="relative h-full border-r border-gray-100">
                <Image
                  src="/assets/office scrap and dismantaling/officebefore.jpeg"
                  alt="Before"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[8px] md:text-xs font-black uppercase tracking-widest shadow-lg z-10">
                  Before
                </div>
              </div>
              <div className="relative h-full">
                <Image
                  src="/assets/office scrap and dismantaling/officeafter1.jpeg"
                  alt="After"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-green-600 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[8px] md:text-xs font-black uppercase tracking-widest shadow-lg z-10">
                  After
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>

          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 group hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
