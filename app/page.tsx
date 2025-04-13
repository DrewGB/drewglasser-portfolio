import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen bg-brand-bg text-brand-text pl-8 pr-8 pt-2">
          <div className="flex mt-2">
              <div className={"bg-brand-primary text-white w-50 p-4 my-4 rounded-lg shadow-xl"}>
                  <h2 className={"text-3xl font-bold"}>Who am I?</h2>
                  <p className={"text-xl mt-1"}>
                      I’m a software developer based in Saskatoon, currently completing my Computer Systems Technology
                      diploma at Saskatchewan Polytechnic.
                  </p>
                  <p className={"text-xl mt-1"}>
                      As a legally blind Indigenous developer, I bring a unique perspective to software development,
                      especially in building accessible, inclusive, and resilient systems. My lived experience has
                      shaped how I approach problem-solving, collaboration, and user empathy — qualities that are at the
                      core of how I write code and build solutions.
                  </p>
                  <p className={"text-xl mt-1"}>
                      I’ve worked on real-world projects like Project Paramedic (with an industry client), built
                      full-stack apps independently, and tackled complex systems-level programming challenges. I’m
                      excited to bring my skills — and my story — to a team that values diversity, innovation, and
                      making tech work for everyone.
                  </p>
                  <h2 className={"text-3xl font-bold mt-2"}>Skills</h2>
                  <p className={"text-xl mt-1"}>
                      Languages: Java, C#, C, JavaScript, TypeScript, HTML, CSS, SQL
                  </p>
                  <p className={"text-xl mt-1"}>
                      Frameworks: Next.js, React, Node.js, Express, Blazor, Entity Framework, TypeORM, Bootstrap, Tailwind
                  </p>
                  <br />
                  <br />
                  <Link href={"/projects"} className={"bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg p-1"}>See my work</Link>
              </div>
              <div>
                  <img src={""} alt={"Drew Glasser-Brown"} className={"rounded-full w-48 h-48 shadow-md"}/>
              </div>
          </div>
      </main>
  );
}
