import { motion } from 'framer-motion';

const skills = [
    "Python", "Django", "DRF", "Celery", "JWT", "PostgreSQL", "Redis",
    "FastAPI", "ChromaDB", "LLaMA", "Groq", "React.js", "Tailwind CSS",
    "Docker", "Nginx", "AWS", "Firebase", "REST API", "Cloudinary", "Git"
];

const OrbitalSkills = () => {
    return (
        <section id="skills" className="py-32 px-4 w-full flex flex-col items-center justify-center relative min-h-[80vh]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <h2 className="text-4xl font-bold mb-20 text-[var(--text-main)] tracking-widest uppercase z-10 text-center">
                System <span className="text-[var(--neon-magenta)]">Core</span>
            </h2>

            <div className="relative w-[350px] h-[350px] md:w-[700px] md:h-[700px] flex items-center justify-center">

                {/* Central Core */}
                <div className="absolute z-20 w-32 h-32 md:w-36 md:h-36 rounded-full glass border border-[var(--neon-cyan)] shadow-[0_0_30px_rgba(0,243,255,0.3)] flex items-center justify-center animate-pulse">
                    <span className="font-bold text-[var(--neon-cyan)] tracking-widest text-center text-sm md:text-base">CORE<br />SKILLS</span>
                </div>

                {/* Orbit Rings */}
                <div className="absolute w-full h-full rounded-full border border-[var(--border-neon)]/20" style={{ animation: 'spin-forward 30s linear infinite' }}></div>
                <div className="absolute w-[80%] h-[80%] rounded-full border border-[var(--neon-cyan)]/10" style={{ animation: 'spin-backward 35s linear infinite' }}></div>
                <div className="absolute w-[65%] h-[65%] rounded-full border border-[var(--border-neon)]/30" style={{ animation: 'spin-backward 25s linear infinite' }}></div>
                <div className="absolute w-[50%] h-[50%] rounded-full border border-[var(--neon-magenta)]/10" style={{ animation: 'spin-forward 30s linear infinite' }}></div>
                <div className="absolute w-[35%] h-[35%] rounded-full border border-[var(--neon-magenta)]/20" style={{ animation: 'spin-forward 20s linear infinite' }}></div>

                {/* Re-implementing orbits using rotating containers for simplicity */}

                {/* Inner Orbit (6 skills) */}
                <div className="absolute w-[35%] h-[35%]" style={{ animation: 'spin-forward 20s linear infinite' }}>
                    {skills.slice(0, 6).map((skill, i) => (
                        <div
                            key={skill}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden block"
                            style={{ transform: `rotate(${i * 60}deg) translate(80px) rotate(-${i * 60}deg)` }}
                        >
                            <div
                                className="glass px-3 py-1.5 rounded-full text-[10px] font-bold text-[var(--neon-magenta)] border border-[var(--neon-magenta)]/30 shadow-[0_0_10px_rgba(255,0,170,0.1)] whitespace-nowrap"
                                style={{ animation: 'spin-backward 20s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                    {skills.slice(0, 6).map((skill, i) => (
                        <div
                            key={`md-${skill}`}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                            style={{ transform: `rotate(${i * 60}deg) translate(140px) rotate(-${i * 60}deg)` }}
                        >
                            <div
                                className="glass px-4 py-2 rounded-full text-sm font-bold text-[var(--neon-magenta)] border border-[var(--neon-magenta)]/30 shadow-[0_0_10px_rgba(255,0,170,0.1)] whitespace-nowrap"
                                style={{ animation: 'spin-backward 20s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle Orbit (7 skills) */}
                <div className="absolute w-[65%] h-[65%]" style={{ animation: 'spin-backward 25s linear infinite' }}>
                    {skills.slice(6, 13).map((skill, i) => (
                        <div
                            key={skill}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden block"
                            style={{ transform: `rotate(${i * (360 / 7)}deg) translate(140px) rotate(-${i * (360 / 7)}deg)` }}
                        >
                            <div
                                className="glass px-3 py-1.5 rounded-full text-[10px] font-bold text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 shadow-[0_0_10px_rgba(0,243,255,0.1)] whitespace-nowrap"
                                style={{ animation: 'spin-forward 25s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                    {skills.slice(6, 13).map((skill, i) => (
                        <div
                            key={`md-${skill}`}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                            style={{ transform: `rotate(${i * (360 / 7)}deg) translate(250px) rotate(-${i * (360 / 7)}deg)` }}
                        >
                            <div
                                className="glass px-4 py-2 rounded-full text-sm font-bold text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 shadow-[0_0_10px_rgba(0,243,255,0.1)] whitespace-nowrap"
                                style={{ animation: 'spin-forward 25s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outer Orbit (7 skills) */}
                <div className="absolute w-full h-full" style={{ animation: 'spin-forward 35s linear infinite' }}>
                    {skills.slice(13, 20).map((skill, i) => (
                        <div
                            key={skill}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden block"
                            style={{ transform: `rotate(${i * (360 / 7)}deg) translate(200px) rotate(-${i * (360 / 7)}deg)` }}
                        >
                            <div
                                className="glass px-3 py-1.5 rounded-full text-[10px] font-bold text-[var(--text-main)] border border-[var(--border-neon)]/50 shadow-[0_0_10px_rgba(0,243,255,0.05)] whitespace-nowrap"
                                style={{ animation: 'spin-backward 35s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                    {skills.slice(13, 20).map((skill, i) => (
                        <div
                            key={`md-${skill}`}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                            style={{ transform: `rotate(${i * (360 / 7)}deg) translate(360px) rotate(-${i * (360 / 7)}deg)` }}
                        >
                            <div
                                className="glass px-4 py-2 rounded-full text-sm font-bold text-[var(--text-main)] border border-[var(--border-neon)]/50 shadow-[0_0_10px_rgba(0,243,255,0.05)] whitespace-nowrap"
                                style={{ animation: 'spin-backward 35s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        @keyframes spin-forward {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes spin-backward {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }
      `}</style>
        </section>
    );
};

export default OrbitalSkills;
