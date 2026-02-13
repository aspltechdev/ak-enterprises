import Image from "next/image";

export function ScrapProcessingBanner() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Image Container */}
                <div className="relative w-full aspect-[21/9] md:aspect-[2/1] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 group">
                    <Image
                        src="/assets/hero_industrial.png"
                        alt="Safe and Quality Scrap Processing Site"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-green-600 tracking-tight drop-shadow-sm">
                        Safe & Quality Scrap Processing
                    </h2>
                </div>
            </div>
        </section>
    );
}
