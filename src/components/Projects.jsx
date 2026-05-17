import { motion } from 'framer-motion';
import { BookMarked, Star, GitFork, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const getLanguageColor = (lang) => {
    const colors = {
        Python: "#3572A5",
        JavaScript: "#f1e05a",
        HTML: "#e34c26",
        CSS: "#563d7c",
        TypeScript: "#3178c6",
        Java: "#b07219",
        "C++": "#f34b7d",
    };
    return colors[lang] || "#8b949e"; // default gray
};

const ProjectCard = ({ project, idx }) => {
    return (
        <motion.a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group block p-6 rounded-xl glass glass-hover transition-all duration-300 relative overflow-hidden flex flex-col h-full"
        >
            {/* Hover Glow */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--neon-cyan)]/20 blur-3xl group-hover:bg-[var(--neon-cyan)]/40 transition-all"></div>

            <div className="flex items-center gap-2 mb-4 text-[var(--text-main)] font-bold text-lg">
                <BookMarked size={20} className="text-[var(--neon-magenta)] shrink-0" />
                <span className="group-hover:text-[var(--neon-cyan)] transition-colors tracking-wide truncate">{project.name}</span>
            </div>

            <p className="text-sm text-[var(--text-muted)] mb-8 leading-relaxed flex-grow">
                {project.description || "No description provided. (Add one on GitHub!)"}
            </p>

            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mt-auto pt-4 border-t border-[var(--border-neon)]/10">
                <div className="flex items-center gap-1">
                    <div 
                        className="w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]" 
                        style={{ 
                            backgroundColor: getLanguageColor(project.language), 
                            color: getLanguageColor(project.language) 
                        }}
                    ></div>
                    {project.language || "Unknown"}
                </div>
                <div className="flex items-center gap-1">
                    <Star size={12} /> {project.stargazers_count}
                </div>
                <div className="flex items-center gap-1">
                    <GitFork size={12} /> {project.forks_count}
                </div>
            </div>
        </motion.a>
    );
};

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pinnedRepos = [
            'Thapasya-ERP-System',
            'Thapasya-arts-school-website',
            'petfood-backend',
            'stay-rentals-backend'
        ];

        // Fetch specific pinned repositories
        Promise.all(
            pinnedRepos.map(repoName =>
                fetch(`https://api.github.com/repos/prince-0303/${repoName}`)
                    .then(res => {
                        if (!res.ok) throw new Error(`Failed to fetch ${repoName}`);
                        return res.json();
                    })
            )
        )
            .then(data => {
                setRepos(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch pinned repos:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-widest">
                <span className="text-[var(--neon-cyan)]">PROJECTS</span>
            </h2>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="animate-spin text-[var(--neon-cyan)]" size={48} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {repos.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} idx={idx} />
                    ))}
                </div>
            )}

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
