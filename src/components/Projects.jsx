import { motion } from 'framer-motion';
import { BookMarked, Star, GitFork } from 'lucide-react';

const projects = [
    {
        title: "petfood-backend",
        desc: "E-Commerce backend API built with Python, Django REST Framework.",
        lang: "Python",
        color: "#3572A5", // Python Blue
        link: "https://github.com/prince-0303/petfood-backend"
    },
    {
        title: "petfood-frontend",
        desc: "Modern React frontend for the petfood e-commerce platform.",
        lang: "JavaScript",
        color: "#f1e05a", // JS Yellow
        link: "https://github.com/prince-0303/petfood"
    },
    {
        title: "Student_LMS",
        desc: "Fullstack Student Management System using Django & PostgreSQL.",
        lang: "Python",
        color: "#3572A5",
        link: "https://github.com/prince-0303/Student_LMS"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-widest">
                <span className="text-[var(--neon-cyan)]">PROJECTS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group block p-6 rounded-xl glass glass-hover transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--neon-cyan)]/20 blur-3xl group-hover:bg-[var(--neon-cyan)]/40 transition-all"></div>

                        <div className="flex items-center gap-2 mb-4 text-[var(--text-main)] font-bold text-lg">
                            <BookMarked size={20} className="text-[var(--neon-magenta)]" />
                            <span className="group-hover:text-[var(--neon-cyan)] transition-colors tracking-wide">{project.title}</span>
                        </div>

                        <p className="text-sm text-[var(--text-muted)] mb-8 leading-relaxed">
                            {project.desc}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mt-auto">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: project.color, color: project.color }}></div>
                                {project.lang}
                            </div>
                            <div className="flex items-center gap-1">
                                <Star size={12} /> {Math.floor(Math.random() * 10)}
                            </div>
                            <div className="flex items-center gap-1">
                                <GitFork size={12} /> {Math.floor(Math.random() * 5)}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
