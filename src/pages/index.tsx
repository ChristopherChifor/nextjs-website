import { Button } from "components/display/Button";
import { Text } from "components/display/Text";
import { WORK_EXPERIENCES } from "constants/workExperiences";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <main className="container py-36 md:py-48">
        <Text variant="h1">Hey! I'm Chris Chifor</Text>
        <Text variant="h2">Full-Stack Developer + Designer</Text>
        <Text className="mt-10 font-medium">
          Toronto, Canada📍 <br />
          Devout creator passionate about designing functional user interfaces.
        </Text>
        <a href="#contact-section" className="mt-6 mr-4 inline-block">
          <Button theme="secondary">Get in touch </Button>
        </a>
        <Link href="/about" className="mt-6 inline-block">
          <Button>About me </Button>
        </Link>
      </main>

      <section className="container">
        <Text variant="h2" className="pb-6">
          Work Experience
        </Text>
        <div className="space-y-4">
          {WORK_EXPERIENCES.map((workExperience, index) => (
            <div
              className={`
              p-4 rounded-lg hover:scale-105 transition-all hover:cursor-default
              ${workExperience.color}
          `}
              key={workExperience.title}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`flex flex-col justify-center  ${
                    index % 2 === 1
                      ? "md:text-right pr-2 order-1"
                      : "order-1 md:order-none pl-2"
                  }`}
                >
                  <Text variant="h3" className="text-white leading-4">
                    {workExperience.role} <br />
                    <span className="text-lg opacity-80">
                      {workExperience.date}
                    </span>
                  </Text>
                  <Text variant="h5" className="text-white opacity-80"></Text>
                </div>
                <div className="grid place-items-center md:py-4">
                  <img
                    src={workExperience.src}
                    alt={workExperience.title}
                    className="h-36 max-w-xs object-contain invert contrast-200 saturate-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
