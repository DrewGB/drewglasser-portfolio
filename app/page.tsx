import Link from "next/link";

export default function Home() {
  return (
      <>
          {/* jumbotron */}
          <div id={"jumbo"} className={"p-15 w-auto p-6 mx-auto relative text-white flex items-center justify-center"}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <div className="relative text-white z-20 flex justify-between items-start fa-align-center">
                    <div className="w-80 rounded-2xl">
                        <h1 className="text-4xl">I design accessible systems, solve real problems, and love what I do.</h1>
                        <p className={"text-lg mt-1"}>A software developer from Saskatoon, Saskatchewan.</p>
                    </div>
                </div>
          </div>
          <main className="min-h-screen w-auto bg-brand-bg text-brand-text pl-8 pr-8 pt-2">
              <div className={"flex justify center max-w my-auto"}>
                  <div className="mx-auto flex flex-col md:flex-row items-start">
                      <div className={"bg-brand-primary text-white w-50 p-4 my-4 rounded-lg shadow-xl"}>
                          <h2 className={"text-3xl font-bold"}>Who am I?</h2>
                          <p className={"text-xl mt-1"}>
                              My name is Drew Glasser-Brown. I’m a software developer based in Saskatoon, currently completing my Computer Systems
                              Technology
                              diploma at Saskatchewan Polytechnic.
                          </p>
                          <p className={"text-xl mt-1"}>
                              As a legally blind Indigenous developer, I bring a unique perspective to software
                              development,
                              especially in building accessible, inclusive, and resilient systems. My lived experience
                              has
                              shaped how I approach problem-solving, collaboration, and user empathy — qualities that
                              are at
                              the
                              core of how I write code and build solutions.
                          </p>
                          <p className={"text-xl mt-1"}>
                              I’ve worked on real-world projects like Project Paramedic (with an industry client), built
                              full-stack apps independently, and tackled complex systems-level programming challenges.
                              I’m
                              excited to bring my skills — and my story — to a team that values diversity, innovation,
                              and
                              making tech work for everyone.
                          </p>
                          <h2 className={"text-3xl font-bold mt-2"}>Skills</h2>
                          <p className={"text-xl mt-1"}>
                              Languages: Java, C#, C, JavaScript, TypeScript, HTML, CSS, SQL, Swift
                          </p>
                          <p className={"text-xl mt-1"}>
                              Frameworks: Next.js, React, Node.js, Express, Blazor, Entity Framework, TypeORM,
                              Bootstrap,
                              Tailwind, Xamarin
                          </p>
                          <br/>
                          <br/>
                          <Link href={"/projects"}
                                className={"bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg p-1"}>See
                              my work</Link>
                      </div>
                      <div className="ml-8 my-4 flex flex-col items-center">
                          <img
                              src="/images/profile2.jpg"
                              alt="Photo of Drew Glasser-Brown"
                              className="w-50 h-50 object-cover rounded-full shadow-xl ring-2 ring-brand-muted"
                          />
                      </div>
                  </div>
              </div>
          </main>
      </>
  );
}
