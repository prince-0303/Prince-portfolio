import { motion } from 'framer-motion';

const FloatingShape = ({ delay, className }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
            y: [0, -20, 0]
        }}
        transition={{
            duration: 10,
            delay: delay,
            repeat: Infinity,
            ease: "linear"
        }}
        className={`absolute border border-[var(--border-neon)]/30 backdrop-blur-sm ${className}`}
    />
);

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden perspective-1000">

            {/* Background Shapes */}
            <FloatingShape delay={0} className="w-64 h-64 border-opacity-20 rounded-full top-[20%] left-[10%]" />
            <FloatingShape delay={2} className="w-48 h-48 border border-[var(--neon-magenta)]/20 rotate-45 top-[60%] right-[15%]" />
            <FloatingShape delay={4} className="w-96 h-96 border rounded-full border-[var(--neon-cyan)]/10 -bottom-20 -left-20" />

            {/* Grid Floor */}
            <div className="absolute bottom-0 w-full h-[50vh] bg-[linear-gradient(to_top,transpartent_0%,var(--bg-void)_100%)] opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(var(--border-neon) 1px, transparent 1px), linear-gradient(90deg, var(--border-neon) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px)'
                }}
            ></div>

            <div className="text-center z-10 p-8 glass rounded-2xl border border-[var(--neon-cyan)]/20 shadow-[0_0_50px_rgba(0,243,255,0.1)]">
                <h1 className="text-6xl md:text-8xl font-bold mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-main)] to-[var(--text-muted)]">
                    PRINCE
                </h1>
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent mb-6"></div>
                <p className="text-xl md:text-2xl font-light tracking-[0.2em] text-[var(--neon-cyan)] drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                    PYTHON FULLSTACK DEVELOPER
                </p>
            </div>
        </section>
    );
};

export default Hero;
