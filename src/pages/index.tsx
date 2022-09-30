import { Button } from "components/display/Button";
import { Text } from "components/display/Text";
import { ArrowUpRightIcon } from "components/icons/ArrowUpRightIcon";
import { WORK_EXPERIENCES } from "constants/workExperiences";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { copyEmail } from "utils/test";

export default function Home() {
  return (
    <>
      <Toaster />
      <main className="container py-36 md:py-48">
        <Text variant="h1">Hey! I'm Chris Chifor</Text>
        <Text variant="h2">Full-Stack Developer + Designer</Text>
        <Text className="mt-6">
          Toronto, Canada📍 <br />
          Devout creator passionate about designing functional user interfaces.
        </Text>
        <a href="#contact-section" className="mt-6 mr-4 inline-block">
          <Button theme="secondary">
            Get in touch{" "}
          </Button>
        </a>
        <Link href="/about">
          <a className="mt-6 inline-block">
            <Button>
              About me{" "}
            </Button>
          </a>
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
              p-4 rounded-lg
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

      <section className="container py-24" id="contact-section">
        <Text variant="h2" className="pb-6">
          Contact me
          <div>
            <Text>
              If you have any questions or want to work together, feel free to
              send me an email at{" "}
              <span
                className="cursor-pointer hover:underline text-blue-500"
                onClick={copyEmail}
              >
                christopher_chifor@yahoo.ca
              </span>{" "}
              (I know, yahoo).
            </Text>
            <Text className="my-6">You can also check me out here:</Text>
          </div>
          <div className="flex gap-4 align-items-center">
            <a
              href="https://github.com/ChristopherChifor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12 w-12 dark:invert"
                src="/github.svg"
                alt="Github"
              />
            </a>
            <a
              href="https://github.com/ChristopherChifor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12 w-12 dark:invert"
                src="/linkedin.svg"
                alt="Linkedin"
              />
            </a>
            <a
              href="https://linktr.ee/ock4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12 w-12 dark:invert"
                src="/music.svg"
                alt="My Music"
              />
            </a>
            <a
              href="https://github.com/ChristopherChifor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12 w-12 dark:invert"
                src="/github.svg"
                alt="Github"
              />
            </a>
          </div>
        </Text>
      </section>
    </>
  );
}
