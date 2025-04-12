import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-brand-muted text-brand-text flex justify-between align-center">
            <div className="flex">
                <div>
                    <Link href="/" className="text-brand-text no-underline ">
                        <h1 className="text-3xl p-2 font-bold">Drew Glasser-Brown</h1>
                    </Link>
                </div>
            </div>
            <div>
                <ul className="flex gap-4 p-2 mr-4">
                    <li>
                        <Link href="/projects" className="text-brand-text no-underline hover:shadow-md">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="text-brand-text no-underline hover:shadow-md">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-brand-text no-underline hover:shadow-md">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
