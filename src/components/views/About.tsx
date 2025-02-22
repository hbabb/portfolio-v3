import ProfilePic from "@/assets/images/ai-profile-corporate.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function About() {
  return (
    <section className="flex flex-col items-center py-10" id="about">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-10 md:flex-row-reverse md:items-start">
        <div className="mb-6 flex-shrink-0 md:mb-0 md:ml-8">
          <Image
            src={ProfilePic}
            alt="Heath Babb"
            className="mt-4 size-24 rounded-full object-cover shadow-md md:size-64"
            width={300}
            height={300}
          />
        </div>
        <article className="text-center md:text-justify">
          <h1 className="my-4 text-sm font-bold md:text-left md:text-2xl">
            Heath Babb
          </h1>
          <div className="text-foreground max-w-5xl py-5 leading-relaxed">
            I build, optimize, and solve problems -- whether in{" "}
            <span className="font-bold tracking-tight">
              web development, data engineering, CAD systems, or technical
              consulting
            </span>
            . With a career built on{" "}
            <span className="font-bold tracking-tight">
              efficiency, precision, and innovation
            </span>
            , I bring a unique cross-industry skill set that allows me to bridge
            gaps between technology and real-world applications.
            <br />
            <br />I transitioned into <span>web development</span> after years
            of{" "}
            <span className="font-bold tracking-tight">
              engineering workflows, data analysis, and system integration
            </span>
            . Studying through freeCodeCamp, Codecademy, Udemy, Scrimba, and
            Frontend Mentors, I&apos;ve developed expertise in{" "}
            <span className="font-bold tracking-tight">
              React, Next.js, TailwindCSS, and TypeScript
            </span>
            . But I&apos;m not just a developer -- I&apos;m a{" "}
            <span className="font-bold tracking-tight">problem solver</span> who
            understands how to make technology work{" "}
            <span className="font-bold tracking-tight">
              smarter, faster, and more efficiently
            </span>
            .
            <br />
            <br />
            Beyond development, I have a strong background in{" "}
            <span className="font-bold tracking-tight">
              CAD, data analytics, and process optimization
            </span>
            , including:
            <br />
            <ul>
              <li>
                ✅{" "}
                <span className="font-bold tracking-tight">
                  CAD & Engineering Technology
                </span>
                - AutoCAD, Civil 3D, Trimble Business Center, GIS mapping, LiDAR
                processing, and more.
              </li>
              <li>
                ✅{" "}
                <span className="font-bold tracking-tight">
                  Data Engineering & Analysis
                </span>
                - SQL, PostgreSQL, MongoDB, Excel, Power BI, Tableau, and more.
              </li>
              <li>
                ✅{" "}
                <span className="font-bold tracking-tight">
                  Technical Consulting
                </span>
                - System optimization, workflow automation, process improvement,
                and more.
              </li>
            </ul>
            <br />
            I&apos;ve{" "}
            <span className="font-bold tracking-tight">
              modernized outdated workflows, automated processed that saved
              hours of labor, and implemented smarter systems
            </span>
            - across surveying, manufacturing, and engineering. Growing up on a
            family farm taught me that hard work, adaptability and
            problem-solving are non-negotiable - and I bring that same mindset
            to every project.
            <br />
            <br />
            I&apos;m{" "}
            <span className="font-bold tracking-tight">
              open for contract work, consulting, and collaboration
            </span>
            -whether you need a{" "}
            <span className="font-bold tracking-tight">
              developer, data engineer, CAD expert, or technical consultant
            </span>
            , let&apos;s connect!
          </div>
        </article>
      </div>
      <article className="my-10">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-8">
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Skills Icon Here */}
            <span>Skill Name</span>
          </div>
        </div>
      </article>
      <Button variant="default" size="lg" asChild className="mt-10">
        <a href="#contact">Contact Me</a>
      </Button>
    </section>
  );
}
