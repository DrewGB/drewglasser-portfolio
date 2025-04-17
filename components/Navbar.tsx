import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-brand-primary text-white flex justify-between align-center">
            <div className="flex">
                <div>
                    <Link href="/" className="no-underline ">
                        <h1 className="text-3xl p-2 font-bold">drewglasser.dev</h1>
                    </Link>
                </div>
            </div>
            <div>
                <ul className="flex gap-4 p-2 mr-4">
                    <li>
                        <Link href="/projects" className="hover:text-brand-accent transition-colors text-xl">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="hover:text-brand-accent transition-colors text-xl">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-brand-accent transition-colors text-xl">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
