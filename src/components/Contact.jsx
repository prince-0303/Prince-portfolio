import { motion } from 'framer-motion';
import { Send, Linkedin, Github, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "dfe56883-12a8-482c-9a89-1366b11d742a", // Get this from web3forms.com
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error'); // Handle error if needed
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'success') {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-4 border border-[var(--accent-green)]/30 rounded-xl bg-[var(--accent-green)]/5">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-[var(--accent-green)] flex items-center justify-center text-black mb-4"
                >
                    <CheckCircle size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-[var(--accent-green)]">Message Sent Successfully</h3>
                <p className="text-[var(--text-muted)]">Thanks for reaching out, {formData.name || 'Friend'}. I'll get back to you as soon as possible.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-[var(--text-main)] underline hover:text-[var(--neon-cyan)]"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-4 border border-[var(--border-neon)]/80 p-6 rounded-xl relative hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-shadow duration-300" onSubmit={handleSubmit}>
            <div>
                <label className="block text-xs font-bold text-[var(--neon-cyan)] mb-2 tracking-wider">NAME</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                    className="w-full bg-[var(--bg-void)]/50 border border-[var(--border-neon)]/30 rounded p-3 text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-[var(--text-muted)]/50"
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-[var(--neon-cyan)] mb-2 tracking-wider">EMAIL</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                    className="w-full bg-[var(--bg-void)]/50 border border-[var(--border-neon)]/30 rounded p-3 text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-[var(--text-muted)]/50"
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-[var(--neon-cyan)] mb-2 tracking-wider">MESSAGE</label>
                <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Message"
                    required
                    className="w-full bg-[var(--bg-void)]/50 border border-[var(--border-neon)]/30 rounded p-3 text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--neon-cyan)] transition-colors placeholder:text-[var(--text-muted)]/50"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-[var(--neon-purple)]/20 border border-[var(--neon-purple)] text-[var(--neon-purple)] font-bold rounded hover:bg-[var(--neon-purple)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? (
                    <Loader2 size={16} className="animate-spin" />
                ) : (
                    <>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        Submit
                    </>
                )}
            </button>

            {status === 'error' && (
                <p className="text-red-500 text-xs text-center mt-2">
                    Transmission failed. Please try again or email directly.
                </p>
            )}
        </form>
    );
};

const Contact = () => {
    return (
        <section id="connect" className="py-32 px-4 max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)]">
                CONTACT ME
            </h2>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full glass rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[var(--border-neon)]/50 shadow-[0_0_30px_rgba(0,243,255,0.05)]"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-[var(--text-main)] mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[var(--neon-magenta)] rounded-full animate-pulse"></span>
                            CURRENT STATUS: OPEN TO WORK
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                            I am currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
                        </p>

                        <div className="flex gap-4 mt-8">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/princebiju/", color: "hover:text-[#0077b5]" },
                                { icon: Github, href: "https://github.com/prince-0303", color: "hover:text-white" },
                                // { icon: Mail, href: "mailto:connectprince03@gmail.com", color: "hover:text-[var(--neon-magenta)]" } // Removed as requested
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 glass rounded-lg text-[var(--text-muted)] ${item.color} transition-colors border border-transparent hover:border-[var(--border-neon)]`}
                                >
                                    <item.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <Form />
                </div>
            </motion.div>

            <footer className="mt-24 text-xs font-mono text-[var(--border-neon)]/50">
                <p>PYTHON FULLSTACK DEVELOPER: PRINCE // v3.0.0</p>
            </footer>
        </section>
    );
};

export default Contact;
