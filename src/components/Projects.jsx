import { motion } from 'framer-motion';
import { BookMarked, Star, GitFork } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

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
    {
        title: "Stay-Rental-Backend",
        desc: "Backend API for a property rental platform with authentication, listings, and real-time chat.",
        lang: "Python",
        color: "#3572A5",
        link: "https://github.com/prince-0303/stay-rentals-backend"
    },
];

const ProjectCard = ({ project, idx }) => {
    const [stats, setStats] = useState({ stars: 0, forks: 0 });

    useEffect(() => {
        // Extract repo details from the link (e.g. "prince-0303/petfood-backend")
        const urlParts = project.link.split('github.com/');
        if (urlParts.length > 1) {
            const repoPath = urlParts[1];
            fetch(`https://api.github.com/repos/${repoPath}`)
                .then(res => res.json())
                .then(data => {
                    if (data.stargazers_count !== undefined) {
                        setStats({
                            stars: data.stargazers_count,
                            forks: data.forks_count
                        });
                    }
                })
                .catch(err => console.error("Failed to fetch repo stats:", err));
        }
    }, [project.link]);

    return (
        <motion.a
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
                    <Star size={12} /> {stats.stars}
                </div>
                <div className="flex items-center gap-1">
                    <GitFork size={12} /> {stats.forks}
                </div>
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-widest">
                <span className="text-[var(--neon-cyan)]">PROJECTS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.title} project={project} idx={idx} />
                ))}
            </div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto mt-20"
            >
                <h3 className="text-2xl font-bold mb-8 text-center tracking-widest text-[var(--text-main)]">
                    GITHUB <span className="text-[var(--neon-magenta)]">CONTRIBUTIONS</span>
                </h3>

                <div className="glass p-4 md:p-8 rounded-2xl border border-[var(--border-neon)]/30 shadow-[0_0_20px_rgba(0,243,255,0.05)] overflow-x-auto flex justify-center">
                    <div className="min-w-max">
                        <GitHubCalendar
                            username="prince-0303"
                            colorScheme="dark"
                            blockSize={11}
                            blockMargin={4}
                            fontSize={12}
                            theme={{
                                dark: ['#0f0f15', '#00f3ff40', '#00f3ff80', '#00f3ffc0', '#00f3ff']
                            }}
                            style={{
                                color: 'var(--text-main)',
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
