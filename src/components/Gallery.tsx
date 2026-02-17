import Image from "next/image";

export function Gallery() {
  const images = [
    "/assets/gallery/first.jpeg",
    "/assets/gallery/second.jpeg",
    "/assets/gallery/third.jpeg",
    "/assets/gallery/fourth.jpeg",
    "/assets/gallery/fifth.jpeg",
    "/assets/gallery/sixth.jpeg",
    "/assets/office scrap and dismantaling/office-dismantling-service.jpg",
    "/assets/gallery/ak2.jpeg",
    "/assets/gallery/ak4.jpeg",
    "/assets/gallery/ak5.jpeg",
    "/assets/hvac scraps/acscraps.jpg",
    "/assets/gallery/aluminium scrap.jpg.jpeg",
    "/assets/gallery/aluminium scrap2.jfif.jpeg",
    "/assets/mixed scrap/mixed.jpg.jpeg",
    "/assets/gallery/copper-scrap.jpg.jpeg",
    "/assets/gallery/copper scrap2.jfif.jpeg",
  ];

  return (
    <section className="section-gallery py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-6">
            Project <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
            A comprehensive look at our large-scale industrial scrap management and dismantling operations across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 group hover:shadow-2xl transition-all duration-500 border border-white"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
