import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <title>Home - Drew Glasser</title>
          </Head>
          {/* jumbotron */}
          <div id={"jumbo"} className={"overflow-x-hidden py-4 p-3 md:p-12 sm:p-16 w-auto mx-auto relative text-white flex items-center justify-center"}>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <div className="relative text-white z-20 flex justify-between items-start fa-align-center">
                    <div className="w-full sm:max-w-3xl md:max-w-full rounded-2xl">
                        <h1 className="text-4xl">I design accessible systems, solve real problems, and love what I do.</h1>
                        <p className={"text-lg mt-1"}>A software developer from Saskatoon, Saskatchewan.</p>
                    </div>
                </div>
          </div>
          <main className="overflow-x-hidden min-h-screen bg-brand-bg text-brand-text lg:pl-2 lg:pr-2 xl:pl-8 xl:pr-8 pt-2">
              <div className={"flex flex-col lg:flex-row justify-center items-start max-w-6xl lg:max-w-100 mx-auto gap-8"}>
                  <div className="mx-auto flex flex-col lg:flex-row items-start">
                      <div className="bg-brand-primary text-white w-full lg:w-5/9 p-4 mt-4 lg:rounded-lg lg:shadow-xl mb-3 lg:mb-6">
                          <h2 className={"text-3xl font-bold"}>Who am I?</h2>
                          <p className={"text-xl mt-1"}>
                              My name is Drew Glasser-Brown. I’m a software developer based in Saskatoon, currently
                              completing my Computer Systems
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
                      <div className="mt-4 lg:ml-4 mb-3 lg:mb-6 flex justify-center lg:justify-start w-8/9 mx-auto lg:w-4/9">
                          <img
                              src="/images/profile2.jpg"
                              alt="Photo of Drew Glasser-Brown"
                              className="w-25 h-25 md:w-30 md:h-30 lg:w-50 lg:h-50 object-cover rounded-full shadow-xl ring-2 ring-brand-muted"
                          />
                      </div>
                  </div>
              </div>
          </main>
      </>
  );
}
