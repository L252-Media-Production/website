import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | L252 Media Production",
  description:
    "Meet the founders of L252 Media Production — Emmanuel Acosta and Jancarlos Reyes — and learn why we're passionate about serving churches and businesses with expert AV and IT solutions.",
};

const founders = [
  {
    name: "Emmanuel Acosta",
    role: "Co-Founder",
    image: "/images/Emmanuel-Acosta.jpg",
    bio: [
      "With over 15 years of experience in the film and media industry, Emmanuel Acosta is a seasoned cinematographer and editor known for his versatility and creative precision. His expertise spans audio engineering, lighting design, livestreaming, and camera operation, allowing him to handle multiple aspects of production with ease. Emmanuel has contributed to a diverse range of projects, including cinematic productions, commercials, live events, and corporate videos, delivering high-quality visuals that resonate with audiences.",
      "Whether capturing compelling footage or crafting seamless narratives in the editing suite, Emmanuel excels at turning ideas into captivating visual stories. His in-depth knowledge of livestreaming technologies, combined with hands-on experience in video and audio production, ensures technical excellence in every project. From live broadcasts and music videos to interviews and branded content, Emmanuel's collaborative approach and attention to detail have earned him a reputation as a trusted professional in the evolving media landscape.",
    ],
    skills: ["Cinematography & Editing", "Audio Engineering", "Lighting Design", "Livestreaming", "Live Event Production"],
  },
  {
    name: "Jancarlos Reyes",
    role: "Co-Founder",
    image: "/images/Jancarlos-Reyes.jpg",
    bio: [
      "Jancarlos Reyes is a highly experienced IT professional with over 10 years in IT infrastructure, networking, and modern workplace solutions. He has extensive expertise in Microsoft 365 and Google Workspace, leveraging these platforms for more than 7 years to streamline operations, improve collaboration, and enhance productivity across businesses, nonprofits, and churches. Jancarlos also holds a Dante Level 3 certification, highlighting his advanced skills in audio networking and proficiency with complex AV systems.",
      "With 15+ years of experience supporting nonprofit organizations and churches, Jancarlos has developed a deep understanding of their unique technological needs. His expertise extends to network design, server management, IT support, and cloud services, providing seamless and secure technology solutions. Passionate about bridging the gap between technology and mission, Jancarlos empowers organizations to thrive by integrating the latest tools and innovations. Whether managing cloud platforms, optimizing AV systems, or coordinating live events, his technical expertise and collaborative mindset make him a valuable partner for clients and teams alike.",
    ],
    skills: ["IT Infrastructure & Networking", "Microsoft 365 & Google Workspace", "Dante Level 3 Certified", "AV Systems", "Cloud Services"],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">About L252 Media Production</h1>
          <p className="text-slate-300 text-lg">
            Expert AV Solutions with IT Support You Can Trust — built on a passion for helping organizations communicate with clarity and impact.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            L252 Media Production exists to help churches and businesses communicate their message with the clarity, quality, and reliability it deserves. We believe that great technology should serve the mission — not get in the way of it.
          </p>
          <p>
            Our team brings hands-on experience in audio-visual installation, live event production, IT infrastructure, and technical training. We&apos;ve worked in environments ranging from small community churches to large-scale business events, and we bring the same level of care and professionalism to every project.
          </p>
          <p>
            What sets us apart is our commitment to the people we serve. We don&apos;t just install equipment and disappear. We take the time to understand your space, your team, and your goals — and we stay engaged to make sure everything works the way it should, long after the project is done.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Meet the Founders</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              L252 is led by two professionals whose combined expertise covers the full spectrum of media production and IT — united by a shared commitment to serving people well.
            </p>
          </div>

          <div className="space-y-16">
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div className="flex-shrink-0 w-full lg:w-72">
                  <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 288px"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1">
                  <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-1">
                    {founder.role}
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 mb-5">{founder.name}</h3>

                  <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                    {founder.bio.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Excellence",
                body: "We hold ourselves to a high standard in everything we do — from the quality of our installations to the clarity of our communication.",
              },
              {
                title: "Simplicity",
                body: "Technology should feel empowering, not overwhelming. We design systems and train teams with usability in mind.",
              },
              {
                title: "Service",
                body: "We are genuinely invested in the success of the organizations we work with. Your mission drives our work.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s work together</h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">
          Whether you have a specific project in mind or just want to explore your options, we&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
