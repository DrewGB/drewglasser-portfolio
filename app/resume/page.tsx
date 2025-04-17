

export default function Resume() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-text p-4">
            <h1 className="text-4xl font-bold text-brand-text text-center">
                Resume
            </h1>
            <section className="max-w-4xl mx-auto py-3 px-4">
                <p className="mb-4 text-2xl">Download my resume or view the key sections below.</p>

                <a
                    href="/files/Drew_Glasser-Brown_Resume.pdf"
                    download
                    className="inline-block bg-brand-accent text-white px-2 py-1 rounded-lg shadow-md hover:bg-brand-accent-hover"
                >
                    Download Resume
                </a>

                <div className="mt-2">
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <p className="text-brand-text mb-2">
                        Java, C#, JavaScript, C, TypeScript, Next.js, Blazor, PostgreSQL, Express, Node.js, Entity Framework, TypeORM, Bootstrap, Tailwind CSS, Xamarin
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <p className="text-brand-text mb-2">
                        Computer Systems Technology Diploma, Saskatchewan Polytechnic (Graduating June 2025)
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                    <p className="text-brand-text">
                        Client project: <em>Saskpoly Paradocs</em> — Full-stack Blazor app for paramedic training.
                    </p>
                </div>
            </section>
        </main>
    )
}