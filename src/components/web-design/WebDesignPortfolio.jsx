import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../projects/ProjectsShowcase';

const WebDesignPortfolio = () => {
    // Filter for web design or development related projects
    const webProjects = projects.filter(p =>
        p.category.toLowerCase().includes('web design') ||
        p.category.toLowerCase().includes('development') ||
        p.category.toLowerCase().includes('e-commerce')
    ).slice(0, 3);

    return (
        <section className="relative bg-white py-20 md:py-35 overflow-hidden">
            {/* Light atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] bg-red-50/30 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] bg-rose-50/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-40 space-y-12 md:space-y-0 text-left">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/5 rounded-full mb-8"
                        >
                            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-700 font-semibold text-sm uppercase tracking-[0.3em]">
                                Curated Showcase
                            </span>
                        </motion.div>

                        <h2 className="text-6xl md:text-9xl font-black text-gray-900 leading-[0.82] tracking-[-0.04em] mb-10 uppercase">
                            SELECTED <br />
                            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent italic">WORKS</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed border-l-4 border-red-500 pl-10 pt-2">
                            Merging technical precision with creative vision to deliver exceptional digital outcomes.
                        </p>
                    </div>

                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-black text-white rounded-2xl hover:bg-red-600 transition-all font-black uppercase tracking-widest text-xs shadow-2xl shadow-black/20"
                        >
                            View Mastery Archive +
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {webProjects.map((project, index) => (
                        <Link
                            key={index}
                            to="/projects"
                            className="group relative"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-gray-50 border border-gray-100 shadow-xl group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] transition-all duration-1000 relative mb-10">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-none">{project.name}</h3>
                                    <p className="text-gray-300 text-lg font-medium line-clamp-2">{project.description}</p>
                                </div>
                            </div>

                            <div className="px-6">
                                <h3 className="text-3xl font-black tracking-tight uppercase italic text-red-600 group-hover:text-black transition-colors duration-500">{project.name}</h3>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="w-8 h-[2px] bg-red-500 group-hover:w-16 transition-all duration-700" />
                                    <p className="text-gray-500 font-black uppercase tracking-[0.2em] text-xs">{project.category}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebDesignPortfolio;
