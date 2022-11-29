import { Button } from "components/display/Button";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="container py-36 md:py-48">
        <h1 className="text-center text-6xl lg:text-8xl tracking-tight font-bold">
          Whoops.
        </h1>
        <div className="flex justify-center pt-6">
          <Button theme="secondary">
            <a
              href="/"
              className="text-center text-2xl lg:text-4xl tracking-tight font-bold "
            >
              Go back home.
            </a>
          </Button>
        </div>
      </main>
    </>
  );
}
