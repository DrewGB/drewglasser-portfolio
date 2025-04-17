import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-brand-primary text-white px-6 py-3">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                {/* Navigation links */}
                <div>
                    <h2 className="text-xl font-semibold mb-1">Navigation</h2>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/projects" className="hover:text-brand-accent transition-colors text-lg">Projects</Link>
                        </li>
                        <li>
                            <Link href="/resume" className="hover:text-brand-accent transition-colors text-lg">Resume</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-brand-accent transition-colors text-lg">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Centered copyright */}
                <div className="flex flex-col items-center justify-center sm:col-span-1">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Drew Glasser-Brown</p>
                    <br/>
                    <p className="text-md">Built with Next.js. View the <a className={"underline"} href={"https://github.com/DrewGB/drewglasser-portfolio"}>repo</a>. </p>
                </div>

                {/* Social media */}
                <div className="flex flex-col sm:items-end items-center gap-2">
                    <h2 className="text-xl font-semibold mb-1">Connect</h2>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/drewgb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="size-3"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/drew-glasser-brown-480245160/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="size-3"/>
                        </a>
                        <a
                            href="mailto:drewglasser@hotmail.com"
                            className="hover:text-brand-accent transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="size-3"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}