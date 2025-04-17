'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and X icons

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-brand-primary text-white">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <div>
                        <Link href="/" className="no-underline">
                            <h1 className="text-2xl font-bold">drewglasser.dev</h1>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-lg">
                        <Link href="/projects" className="hover:text-brand-accent transition-colors">
                            Projects
                        </Link>
                        <Link href="/resume" className="hover:text-brand-accent transition-colors">
                            Resume
                        </Link>
                        <Link href="/contact" className="hover:text-brand-accent transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-brand-primary px-4 pb-4 space-y-2 text-lg">
                    <Link href="/projects" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/resume" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>
                        Resume
                    </Link>
                    <Link href="/contact" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
