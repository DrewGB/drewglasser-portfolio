import Head from "next/head";

export default function Resume() {
    return (
        <>
            <Head>
                <title>Resume - Drew Glasser</title>
            </Head>
            <main className="min-h-screen bg-brand-bg text-brand-text md:p-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mt-2 md:mt-0 mb-4">Resume</h1>

                    <div className="text-center mb-6">
                        <a
                            href="/files/Drew_Glasser-Brown_Resume.pdf"
                            download
                            className="inline-block bg-brand-accent text-white px-2 py-1 rounded-lg shadow-md hover:bg-brand-accent-hover transition"
                        >
                            Download Resume (PDF)
                        </a>
                    </div>

                    {/* Summary */}
                    <section className="mb-3 bg-brand-primary text-white p-4 md:rounded-lg md:shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
                        <p>
                            A highly motivated software developer with strong experience in full-stack web development, accessible design, and problem solving.
                            Passionate about building tools that help people — from training systems to modern web applications.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-3 bg-brand-primary text-white p-4 md:rounded-lg md:shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                            <ul>
                                <li>Java</li>
                                <li>C#</li>
                                <li>C</li>
                                <li>TypeScript</li>
                            </ul>
                            <ul>
                                <li>Next.js</li>
                                <li>Blazor</li>
                                <li>Express</li>
                                <li>Node.js</li>
                            </ul>
                            <ul>
                                <li>Tailwind CSS</li>
                                <li>Bootstrap</li>
                                <li>PostgreSQL</li>
                                <li>Entity Framework</li>
                            </ul>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-3 bg-brand-primary text-white p-4 md:rounded-lg md:shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Education</h2>
                        <div className="text-sm">
                            <p className="font-medium">
                                Computer Systems Technology Diploma
                            </p>
                            <p>Saskatchewan Polytechnic — Graduating June 2025</p>
                        </div>
                    </section>

                    {/* Project Experience */}
                    <section className="mb-4 bg-brand-primary text-white p-4 md:rounded-lg md:shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">Project Experience</h2>
                        <div className="text-sm space-y-4">
                            <div>
                                <p className="font-medium">Project Paramedic – Saskpoly Paradocs</p>
                                <p>Full-stack Blazor application for paramedic training. Built care plan flowcharts, drug monograph linking, and preview tools. Led flowchart rendering logic with MermaidJS and EF integration.</p>
                            </div>
                            <div>
                                <p className="font-medium">ForkedIn (Social Recipe App)</p>
                                <p>Next.js + Express full-stack app with JWT auth, Cloudinary image uploads, PostgreSQL integration, and profile/recipe UI.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
