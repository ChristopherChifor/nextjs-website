import NextLink from "next/link";
import { useRef, type ComponentProps, type MouseEvent, type ReactNode } from "react";

function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} target="_blank" rel="noopener noreferrer" />;
}

const MAX_TILT = 4;

function TiltCard({ href, children }: { href: string; children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * MAX_TILT * 2;
    const rotateX = (0.5 - y) * MAX_TILT * 2;

    card.style.transition = "transform 80ms ease-out, box-shadow 80ms ease-out";
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY * 0.5}px ${rotateX * 0.5}px 22px rgba(15, 23, 42, 0.12)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.style.transition = "transform 400ms ease, box-shadow 400ms ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.boxShadow = "none";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="block h-full cursor-pointer"
      style={{ perspective: "700px" }}
    >
      <div
        ref={cardRef}
        className="border border-gray-200 rounded-lg p-6 bg-white/50 min-h-[220px] h-full flex flex-col will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen w-screen overflow-auto bg-gradient-to-br from-blue-100 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        {/* Header */}
        <header className="mb-12">
          {/* Mobile Layout */}
          <div className="md:hidden mt-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Chris Chifor
            </h1>
            <p className="text-gray-600 italic text-lg mb-4">
              software engineer & designer
            </p>
            <p className="text-gray-900 text-lg mb-8">
              Building practical tools for web and mobile.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start mb-4 mt-16">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Chris Chifor
              </h1>
              <p className="text-gray-600 text-lg">
                Building practical tools for web and mobile.
              </p>
            </div>
            <div className="text-right text-gray-500 italic">
              software engineer & designer
            </div>
          </div>
        </header>

        {/* TL;DR Section */}
        <section className="mb-16">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">tl;dr</h2>
            <span className="text-gray-400 italic text-sm">
              the who/what/where
            </span>
          </div>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-blue-500 mt-1">👨‍💻</span>
              <span>
                Founding Engineer{" "}
                <Link
                  href="https://www.voro.club"
                  className="text-blue-500 underline"
                >
                  @Voro
                </Link>
                , previously{" "}
                <Link
                  href="https://qbash.com/"
                  className="text-blue-500 underline"
                >
                  @qbash
                </Link>{" "}
                and{" "}
                <Link
                  href="https://pipeiq.ai/"
                  className="text-blue-500 underline"
                >
                  @PipeIQ
                </Link>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 mt-1">🔧</span>
              <span>
                Building your favorite local club hub{" "}
                <Link
                  href="https://www.voro.club"
                  className="text-blue-500 underline"
                >
                  @Voro
                </Link>
                . Previously built a{" "}
                <Link
                  href="https://developers.addepar.com/docs/welcome"
                  className="text-blue-500 underline"
                >
                  React UI library
                </Link>{" "}
                @ Addepar
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 mt-1">💡</span>
              <span>Obsessed with intuitive & delightful interfaces</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-bold text-gray-900">My Work</h2>
            <span className="text-gray-400 italic text-sm">
              professional experience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Voro */}
            <TiltCard href="https://www.voro.club">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Voro</h3>
                <span className="text-sm text-gray-400">Feb 2026 – Present</span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-blue-500 font-medium">Product Engineering</span>
                  <span className="text-gray-600 ml-2">Shipped clubs, events, messaging, and onboarding across iOS and web.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">Events Platform</span>
                  <span className="text-gray-600 ml-2">Built public event pages, web RSVP, sharing, and in-app activity feeds.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">Full-stack Delivery</span>
                  <span className="text-gray-600 ml-2">Notifications, referrals, and location-based discovery from UI to API.</span>
                </div>
              </div>
            </TiltCard>

            {/* Isle of Code */}
            <TiltCard href="https://isleofcode.com/">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Isle of Code</h3>
                <span className="text-sm text-gray-400">Jan 2024 – Jan 2026</span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-blue-500 font-medium">Front End Consulting</span>
                  <span className="text-gray-600 ml-2">Supported Addepar’s web product development.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">UI Library</span>
                  <span className="text-gray-600 ml-2">Built and integrated a scalable component library.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">Collaboration</span>
                  <span className="text-gray-600 ml-2">Worked with stakeholders to deliver features.</span>
                </div>
              </div>
            </TiltCard>

            {/* PipeIQ.ai */}
            <TiltCard href="https://pipeiq.ai/">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">PipeIQ.ai</h3>
                <span className="text-sm text-gray-400">Jun 2023 – Jan 2024</span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-blue-500 font-medium">Lead Front End</span>
                  <span className="text-gray-600 ml-2">Drove front end for a generative AI startup.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">Team Mentorship</span>
                  <span className="text-gray-600 ml-2">Mentored and guided the dev team.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">AI System</span>
                  <span className="text-gray-600 ml-2">Developed a proprietary AI marketing system.</span>
                </div>
              </div>
            </TiltCard>

            {/* Education */}
            <TiltCard href="https://utoronto.ca/">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">University of Toronto</h3>
                <span className="text-sm text-gray-400">Sept 2019 – Apr 2023</span>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-blue-500 font-medium">Majors/Minors</span>
                  <span className="text-gray-600 ml-2">Computer Science, Statistics, Math, Economics.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">Relevant Courses</span>
                  <span className="text-gray-600 ml-2">Neural Networks, Deep Learning, Machine Learning, Software Design, Business of Software.</span>
                </div>
                <div>
                  <span className="text-blue-500 font-medium">Graduated with Honours</span>
                  <span className="text-gray-600 ml-2">Completed a rigorous interdisciplinary program.</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <span className="text-gray-400 italic text-sm">
              how to reach me
            </span>
          </div>
          <p className="text-gray-700">
            If you want to chat, feel free to send me an email at{" "}
            <Link
              href="mailto:christopher_chifor@yahoo.ca"
              className="text-blue-500 underline"
            >
              christopher_chifor@yahoo.ca
            </Link>
            . You can also find me on{" "}
            <Link href="https://github.com/ChristopherChifor" className="text-blue-500 underline">
              GitHub
            </Link>
            {" "}and{" "}
            <Link href="https://www.linkedin.com/in/christopher-chifor/" className="text-blue-500 underline">
              LinkedIn
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
