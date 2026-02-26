import brand1 from '../../assets/brands/betterway.png';
import brand2 from '../../assets/brands/huntsman.png';
import brand3 from '../../assets/brands/sagar.png';
import brand4 from '../../assets/brands/betterway.png';
import brand5 from '../../assets/brands/vncoe.webp';

export default function HomeBrands() {
    const brands = [
        { name: 'Betterway', src: brand1 },
        { name: 'Huntsman', src: brand2 },
        { name: 'Sagar', src: brand3 },
        { name: 'Pink Auto', src: brand4 },
        { name: 'VNCOE', src: brand5 },
        { name: 'Betterway2', src: brand1 },
        { name: 'Huntsman2', src: brand2 },
        { name: 'Sagar2', src: brand3 },
        { name: 'Pink Auto2', src: brand4 },
        { name: 'VNCOE2', src: brand5 },
    ];

    return (
        <section className="relative bg-black py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-white mb-8 md:mb-12 uppercase tracking-widest">
                    WE WORK WITH GLOBAL LEADERS AND AMBITIOUS BRANDS READY TO LEAD
                </h3>

                <div className="relative w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    <div className="flex animate-slide-left-infinite whitespace-nowrap will-change-transform">
                        <div className="flex items-center gap-10 sm:gap-14 md:gap-12 lg:gap-4 px-6 sm:px-8 lg:px-10">
                            {brands.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <img
                                        src={brand.src}
                                        alt={`${brand.name} logo`}
                                        className="max-w-full max-h-full object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-10 sm:gap-14 md:gap-12 lg:gap-4 px-6 sm:px-8 lg:px-10">
                            {brands.map((brand) => (
                                <div
                                    key={`${brand.name}-dup`}
                                    className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <img
                                        src={brand.src}
                                        alt={`${brand.name} logo duplicate`}
                                        className="max-w-full max-h-full object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
