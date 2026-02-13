import Image from "next/image";

export function Gallery() {
  const images = [
    // Subpages Images
    "/assets/subpages images/aluminimumsubpage.jpeg",
    "/assets/subpages images/copper.jpg",
    "/assets/subpages images/metallandscao.jpeg",
    "/assets/subpages images/office-dismantling-service.jpg",
    "/assets/subpages images/wirescrap.jpg",
    "/assets/subpages images/woodlanscap.jpeg",
    "/assets/subpages images/acscraps.jpg",

    // Gallery Images
    "/assets/gallery/aluminium scrap.jpg.jpeg",
    "/assets/gallery/aluminium scrap2.jfif.jpeg",
    "/assets/gallery/copper scrap2.jfif.jpeg",
    "/assets/gallery/copper-scrap.jpg.jpeg",
    "/assets/gallery/wire.jpg.jpeg",
    "/assets/gallery/wire2.jfif.jpeg",

    // Services Images
    "/assets/services/electrical.jpg",
    "/assets/services/gas.jpeg",
    "/assets/services/gas2.jpeg",
    "/assets/services/gas3.jpeg",
    "/assets/services/hvac.jpg",
    "/assets/services/industrial.jpg",
    "/assets/services/metal.jpg",
    "/assets/services/office.jpg",
    "/assets/services/office1.jpeg",
    "/assets/services/office2.jpeg",
    "/assets/services/office3.jpeg",
    "/assets/services/office4.jpeg",
    "/assets/services/officeafter.jpeg",
    "/assets/services/officeafter1.jpeg",
    "/assets/services/officeafter3.jpeg",
    "/assets/services/ups.jpeg",
    "/assets/services/wood.jpg",
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
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
