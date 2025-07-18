import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="h-screen w-screen md:overflow-hidden overflow-auto bg-gradient-to-br from-blue-100 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-between items-start mb-4 mt-16">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Chris Chifor
              </h1>
              <p className="text-gray-600 text-lg">
                Building practical tools for the web.
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
                Software Engineer{" "}
                <Link
                  href="https://aisle.sh/"
                  className="text-blue-500 underline"
                >
                  @Aisle.sh
                </Link>
                , led frontend & design{" "}
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
                Built a{" "}
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
            {/* Isle of Code */}
            <a href="https://isleofcode.com/" className="block group h-full">
              <div className="border border-gray-200 rounded-lg p-6 bg-white/50 transition-transform transform group-hover:scale-105 cursor-pointer min-h-[220px] h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Isle of Code</h3>
                  <span className="text-sm text-gray-400">Jan 2024 – Present</span>
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
              </div>
            </a>

            {/* PipeIQ.ai */}
            <a href="https://pipeiq.ai/" className="block group h-full">
              <div className="border border-gray-200 rounded-lg p-6 bg-white/50 transition-transform transform group-hover:scale-105 cursor-pointer min-h-[220px] h-full flex flex-col">
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
              </div>
            </a>

            {/* Mykigai */}
            <a href="https://mykigai.substack.com/" className="block group h-full">
              <div className="border border-gray-200 rounded-lg p-6 bg-white/50 transition-transform transform group-hover:scale-105 cursor-pointer min-h-[220px] h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Mykigai</h3>
                  <span className="text-sm text-gray-400">Apr 2021 – Oct 2021</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-blue-500 font-medium">UI/UX Design</span>
                    <span className="text-gray-600 ml-2">Built interfaces to improve user experience.</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-medium">Recommendation Engine</span>
                    <span className="text-gray-600 ml-2">Helped create a product curation engine.</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-medium">New Features</span>
                    <span className="text-gray-600 ml-2">Launched pages for podcasts, books, and events.</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Education */}
            <a href="https://utoronto.ca/" className="block group h-full">
              <div className="border border-gray-200 rounded-lg p-6 bg-white/50 transition-transform transform group-hover:scale-105 cursor-pointer min-h-[220px] h-full flex flex-col">
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
              </div>
            </a>
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
