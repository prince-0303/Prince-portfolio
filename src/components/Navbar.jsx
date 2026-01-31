const Navbar = () => {
    const links = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#connect' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-50 glass border-b-0 left-0 right-0">
            <a href="#hero" className="font-bold text-xl tracking-widest text-[var(--neon-cyan)] drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">
                PRINCE
            </a>
            <ul className="flex gap-8 list-none">
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--neon-magenta)] transition-colors hover:drop-shadow-[0_0_5px_rgba(255,0,170,0.8)]"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
