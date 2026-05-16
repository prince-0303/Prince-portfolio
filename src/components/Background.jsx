import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--bg-void)] pointer-events-none">
            {/* Subtle Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                }}
            />

            {/* Animated Glowing Orbs */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[10%] w-[40vw] h-[40vw] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] md:blur-[150px] opacity-[0.15]"
            />

            <motion.div
                animate={{
                    x: [0, -60, 60, 0],
                    y: [0, 60, -60, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[10%] w-[35vw] h-[35vw] bg-[var(--neon-cyan)] rounded-full mix-blend-screen filter blur-[120px] md:blur-[150px] opacity-[0.1]"
            />

            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] md:blur-[150px] opacity-[0.1]"
            />
        </div>
    );
};

export default Background;
