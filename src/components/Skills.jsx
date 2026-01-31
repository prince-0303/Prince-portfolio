import { motion } from 'framer-motion';

const skills = [
    "Python", "Django", "React", "SQL", "PostgreSQL", "Git", "Docker", "JS", "Tailwind"
];

const OrbitalSkills = () => {
    return (
        <section id="skills" className="py-32 px-4 w-full flex flex-col items-center justify-center relative min-h-[80vh]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <h2 className="text-4xl font-bold mb-20 text-[var(--text-main)] tracking-widest uppercase z-10">
                System <span className="text-[var(--neon-magenta)]">Core</span>
            </h2>

            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">

                {/* Central Core */}
                <div className="absolute z-20 w-32 h-32 rounded-full glass border border-[var(--neon-cyan)] shadow-[0_0_30px_rgba(0,243,255,0.3)] flex items-center justify-center animate-pulse">
                    <span className="font-bold text-[var(--neon-cyan)] tracking-widest">FULLSTACK</span>
                </div>

                {/* Orbit Rings */}
                <div className="absolute w-full h-full rounded-full border border-[var(--border-neon)]/20 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[70%] h-[70%] rounded-full border border-[var(--border-neon)]/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute w-[40%] h-[40%] rounded-full border border-[var(--neon-magenta)]/20 animate-[spin_10s_linear_infinite]"></div>

                {/* Floating Skills */}
                {skills.map((skill, i) => {
                    const angle = (i / skills.length) * 2 * Math.PI;
                    const radius = 220; // Adjust for responsiveness manually if needed, or use vh/vw
                    // Using simple inline styles for the "orbit" effect static positioning for now, could animate
                    // For true orbit, we need keyframes or framer motion path. 
                    // Let's us a simple rotation trick: put them in a container that rotates.
                    return null; // Implemented below inside the rotating containers
                })}

                {/* Re-implementing orbits using rotating containers for simplicity */}
                <div className="absolute w-full h-full animate-[spin_25s_linear_infinite]">
                    {skills.slice(0, 5).map((skill, i) => (
                        <div
                            key={skill}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ transform: `rotate(${i * 72}deg) translate(220px) rotate(-${i * 72}deg)` }}
                        >
                            <div
                                className="glass px-4 py-2 rounded-full text-xs font-bold text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30 shadow-[0_0_10px_rgba(0,243,255,0.1)]"
                                style={{ animation: 'counter-spin 25s linear infinite' }} // Counter-rotate to keep text upright
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute w-[70%] h-[70%] animate-[spin_20s_linear_infinite_reverse]">
                    {skills.slice(5).map((skill, i) => (
                        <div
                            key={skill}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ transform: `rotate(${i * 90}deg) translate(150px) rotate(-${i * 90}deg)` }}
                        >
                            <div
                                className="glass px-4 py-2 rounded-full text-xs font-bold text-[var(--neon-magenta)] border border-[var(--neon-magenta)]/30 shadow-[0_0_10px_rgba(255,0,170,0.1)]"
                                style={{ animation: 'counter-spin-reverse 20s linear infinite' }}
                            >
                                {skill}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        @keyframes counter-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }
         @keyframes counter-spin-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    );
};

export default OrbitalSkills;
