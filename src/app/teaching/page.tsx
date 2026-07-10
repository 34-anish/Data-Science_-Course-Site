import Link from "next/link";
import teaching from "@/data/teaching.json";

export default function TeachingPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-5xl font-bold">My Teaching Programs</h1>
          <p className="mt-4 text-xl text-blue-100">
            Discover my comprehensive data science and advanced analytics programs at leading institutions
          </p>
        </div>
      </section>

      {/* College Programs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {teaching.map((program) => (
            <Link
              key={program.id}
              href={`/teaching/${program.collegePath}`}
              className="group"
            >
              <div
                className={`rounded-2xl border-2 h-full p-8 transition-all hover:shadow-2xl hover:scale-105 cursor-pointer ${
                  program.collegePath === "swastik"
                    ? "border-blue-200 bg-white hover:border-blue-400"
                    : "border-teal-200 bg-white hover:border-teal-400"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      program.collegePath === "swastik"
                        ? "bg-blue-100"
                        : "bg-teal-100"
                    }`}
                  >
                    <span
                      className={`text-2xl font-bold ${
                        program.collegePath === "swastik"
                          ? "text-blue-800"
                          : "text-teal-800"
                      }`}
                    >
                      {program.college.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2
                      className={`text-2xl font-bold ${
                        program.collegePath === "swastik"
                          ? "text-blue-900"
                          : "text-teal-900"
                      }`}
                    >
                      {program.college}
                    </h2>
                    <p
                      className={`text-sm font-semibold ${
                        program.collegePath === "swastik"
                          ? "text-blue-700"
                          : "text-teal-700"
                      }`}
                    >
                      {program.program}
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 mb-6 text-lg font-medium">
                  {program.title}
                </p>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                

                <div
                  className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                    program.collegePath === "swastik"
                      ? "text-blue-600"
                      : "text-teal-600"
                  }`}
                >
                  <span>Explore Program</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Program Overview</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-slate-900 mb-3">Swastik College</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ BCA Program Focus</li>
                <li>✓ Beginner to Intermediate</li>
                <li> Industry-Driven Approach</li>
                <li>✓ 9 Core Modules</li>
                <li>✓ 10 Resources</li>
                <li>✓ 30 Students</li>
                <li>✓ 9 Projects</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-slate-900 mb-3">Deerwalk College</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Advanced Python Programming</li>
                <li>✓ Beginner to Intermediate</li>
                <li>✓ Fundamentals-First Approach</li>
                <li>✓ Ongoing</li>
              </ul>
            </div>

            {/* <div className="rounded-xl bg-white p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-slate-900 mb-3">Both Programs</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Hands-On Learning</li>
                <li>✓ Real Datasets</li>
                <li>✓ Interactive Notebooks</li>
                <li>✓ Project-Based</li>
                <li>✓ Mentorship Support</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">By The Numbers</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-6 text-center border-2 border-blue-200">
            <p className="text-4xl font-bold text-blue-800">2</p>
            <p className="text-slate-700 mt-2 font-medium">Institutions</p>
          </div>

          <div className="rounded-xl bg-teal-50 p-6 text-center border-2 border-teal-200">
            <p className="text-4xl font-bold text-teal-800">
              20+
            </p>
            <p className="text-slate-700 mt-2 font-medium">Total Modules</p>
          </div>

          <div className="rounded-xl bg-purple-50 p-6 text-center border-2 border-purple-200">
            <p className="text-4xl font-bold text-purple-800">
              10+
            </p>
            <p className="text-slate-700 mt-2 font-medium">Hands-On Projects</p>
          </div>

          <div className="rounded-xl bg-orange-50 p-6 text-center border-2 border-orange-200">
            <p className="text-4xl font-bold text-orange-800">
              20+
            </p>
            <p className="text-slate-700 mt-2 font-medium">Learning Units</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Choose Your Learning Path</h2>
          <p className="mt-3 text-lg text-blue-100">
            Select a college program above to explore tailored curriculum and projects
          </p>
        </div>
      </section>
    </main>
  );
}
