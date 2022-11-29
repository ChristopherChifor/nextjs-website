import React from "react";
import { Text } from "./display/Text";
import { copyEmail } from "utils/test";

export default function Contact() {
  return (
    <section id="contact-section" className="container py-24">
      <Text variant="h2" className="pb-12">
        Contact me
      </Text>
      <div>
        <Text className="font-medium">
          If you have any questions or want to work together, feel free to send
          me an email at{" "}
          <span
            className="cursor-pointer hover:underline hover:text-amber-500 text-blue-500 transition-all duration-300 dark:text-amber-500 dark:hover:text-blue-500"
            onClick={copyEmail}
          >
            christopher_chifor@yahoo.ca
          </span>{" "}
          (I know, yahoo).
        </Text>
        <Text className="mt-12 mb-4 font-medium">You can also check me out here:</Text>
      </div>
      <div className="flex gap-4 align-items-center">
        <a
          href="https://github.com/ChristopherChifor"
          target="_blank"
          rel="My Github"
          className="hover:opacity-40 transition-all duration-100 hover:scale-110"
        >
          <img
            className="h-12 w-12 dark:invert"
            src="/github.svg"
            alt="Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/christopher-chifor"
          target="_blank"
          rel="My Linkedin"
          className="hover:opacity-40 transition-all duration-100 hover:scale-110"
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
          rel="Linktree for my music as a part of OC : K4"
          className="hover:opacity-40 transition-all duration-100 hover:scale-110"
        >
          <img
            className="h-12 w-12 dark:invert"
            src="/music.svg"
            alt="My Music"
          />
        </a>
        {/* <a
              href="https://github.com/ChristopherChifor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12 w-12 dark:invert"
                src="/github.svg"
                alt="Github"
              />
            </a> */}
      </div>
    </section>
  );
}
