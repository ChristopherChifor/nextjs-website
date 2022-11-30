import { Tab } from "@headlessui/react";
import React from "react";
import { Text } from "components/display/Text";
import { categories } from "constants/technologies";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { cx } from "utils/cx";
import Link from "next/link";
import { Button } from "components/display/Button";

export default function Categories() {
  return (
    <main className="container py-36 md:py-48">
      <Text variant="h1">About Me</Text>
      <Text className="pb-6" variant="h2">
        Thanks for stopping by!
      </Text>
      <Text className="mt-6 max-w-lg">
        I'm a software developer and designer based in Toronto, Canada. I'm
        currently studying at the University of Toronto as a 4th year Statistics
        and Computer Science student.
      </Text>
      <Text className="mt-6 max-w-lg">
        I'm passionate about designing functional UIs and building scalable
        applications. Oh, also I produce dance music and DJ in my free time. You
        can check out my work{" "}
        <a
          href="https://linktr.ee/ock4"
          target="_blank"
          className="cursor-pointer underline hover:text-amber-500 text-blue-500 transition-all duration-300 dark:text-amber-500 dark:hover:text-blue-500"
        >
          here
        </a>
        .
      </Text>
      <Text variant="h2" className="pt-16 pb-6">
        Here are some of the technologies I use everyday:
      </Text>

      <div className="dark:invert">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-800/20 p-1 py-2">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  cx(
                    "w-full rounded-lg py-4 text-sm font-medium leading-5 text-black",
                    "ring-white ring-opacity-60 ring-offset-2",
                    "ring-offset-blue-800 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : " hover:bg-white/[0.12]  hover:text-blue-600 transition-all"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 border dark:border-blue-500/50 rounded-xl">
            {Object.values(categories).map((category, index) => (
              <Tab.Panel
                key={index}
                className={cx(
                  "rounded-xl bg-white p-3 py-4 dark:text-black",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {category.map((post) => (
                    <Disclosure key={post.title}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={cx(
                              "w-full px-4 py-2 text-left",
                              "text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                              "relative rounded-md p-3 hover:bg-gray-100 flex justify-between",
                              "cursor-pointer"
                            )}
                            as="li"
                          >
                            <div>
                              <h3 className="flex w-full justify-between text-sm font-medium leading-5">
                                {post.title}
                              </h3>
                              <p className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                {post.date}
                              </p>
                            </div>
                            <ChevronUpIcon
                              className={`${
                                open
                                  ? "transition-all duration-300"
                                  : "rotate-180 transform transition-all duration-300"
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-1 pb-2 text-sm text-gray-500">
                            {post.content}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="flex justify-between -mb-24 mt-12 max-w-lg">
        <Text className="">
          That's basically me. I appreciate you taking the time to read about me
          and what I've done! If you're in Toronto and would like to connect,
          dont hesitate to email me!
          <div className="mt-4">
            <Link href="/" className="mt-6">
              <Button>Go Home</Button>
            </Link>
          </div>
        </Text>
      </div>
    </main>
  );
}
