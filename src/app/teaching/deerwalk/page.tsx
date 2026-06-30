import Link from "next/link";
import teaching from "@/data/teaching.json";
import announcements from "@/data/deerwalk/announcements.json";
import assignments from "@/data/deerwalk/assignments.json";
import projects from "@/data/deerwalk/projects.json";

export default function DeerwalkTeachingPage() {
  const deerwalkProgram = teaching.find(p => p.collegePath === "deerwalk")!;

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link href="/teaching" className="text-teal-100 hover:text-white inline-block mb-4">
            ← Back to Teaching Programs
          </Link>
          
          <h1 className="text-5xl font-bold mt-4">{deerwalkProgram.college}</h1>
          <p className="text-xl text-teal-100 mt-2">{deerwalkProgram.program}</p>
          <p className="text-lg text-teal-50 mt-4">{deerwalkProgram.description}</p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-8">
          <h2 className="text-3xl font-bold text-teal-900">{deerwalkProgram.title}</h2>
          <p className="mt-4 text-lg text-slate-700">
            {deerwalkProgram.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block bg-teal-200 text-teal-800 px-4 py-2 rounded-full font-medium">
              {deerwalkProgram.modules.length} Modules
            </span>
            <span className="inline-block bg-teal-200 text-teal-800 px-4 py-2 rounded-full font-medium">
              {deerwalkProgram.projects.length} Projects
            </span>
            <span className="inline-block bg-teal-200 text-teal-800 px-4 py-2 rounded-full font-medium">
              Industry-Focused
            </span>
            <span className="inline-block bg-teal-200 text-teal-800 px-4 py-2 rounded-full font-medium">
              Mentorship
            </span>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold text-teal-900 mb-8">
          Latest Announcements ({announcements.length})
        </h2>
        <div className="grid gap-6">
          {announcements.slice(0, 3).map((announcement, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-lg">{announcement.title}</h3>
                <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full whitespace-nowrap">
                  {announcement.date}
                </span>
              </div>
              <p className="text-slate-600">{announcement.message}</p>
              {announcement.link && (
                <Link
                  href={announcement.link}
                  target="_blank"
                  className="text-teal-600 hover:text-teal-800 font-medium mt-3 inline-block"
                >
                  Learn More →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Assignments */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold text-teal-900 mb-8">
          Assignments ({assignments.length})
        </h2>
        <div className="grid gap-6">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg">{assignment.title}</h3>
                  <p className="text-slate-600 mt-2">{assignment.description}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4 ${
                    assignment.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {assignment.status}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4 text-sm">
                  <span className="text-slate-600">
                    <strong>Due:</strong> {assignment.dueDate}
                  </span>
                  <span className="text-slate-600">
                    <strong>Marks:</strong> {assignment.marks}
                  </span>
                </div>
                <Link
                  href={assignment.submissionLink}
                  target="_blank"
                  className="text-teal-600 hover:text-teal-800 font-medium"
                >
                  Submit →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* College Projects */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold text-teal-900 mb-8">
          Student Projects ({projects.length})
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 p-6 shadow-sm border-l-4 border-teal-500 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl font-bold text-teal-600 bg-teal-200 w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0">
                  {project.id}
                </span>
                <h3 className="font-bold text-slate-900 text-lg">{project.title}</h3>
              </div>
              <p className="text-slate-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-teal-200 text-teal-800 px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm font-semibold text-teal-700">
                Difficulty: {project.difficulty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-4xl font-bold text-teal-900 mb-8">
          Advanced Modules ({deerwalkProgram.modules.length})
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deerwalkProgram.modules.map((module) => (
            <div
              key={module.id}
              className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-slate-900 text-lg">{module.title}</h3>
                <span className="text-sm font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                  Module {module.id}
                </span>
              </div>
              <p className="text-slate-600">{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Program Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-teal-50 p-6 border-l-4 border-teal-500">
            <h3 className="font-bold text-teal-900 mb-2">Advanced Techniques</h3>
            <p className="text-slate-700">Master deep learning, ensemble methods, and cutting-edge ML technologies used in industry.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-6 border-l-4 border-teal-500">
            <h3 className="font-bold text-teal-900 mb-2">Industry Partnerships</h3>
            <p className="text-slate-700">Collaborate with real companies on live projects and gain professional experience.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-6 border-l-4 border-teal-500">
            <h3 className="font-bold text-teal-900 mb-2">Mentorship Program</h3>
            <p className="text-slate-700">Get 1-on-1 guidance from experienced data scientists and industry professionals.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-6 border-l-4 border-teal-500">
            <h3 className="font-bold text-teal-900 mb-2">Career Development</h3>
            <p className="text-slate-700">Build your portfolio, prepare for interviews, and access job placement support.</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-teal-50 p-6 border-2 border-teal-200 text-center">
            <p className="text-4xl font-bold text-teal-800">{deerwalkProgram.modules.length}</p>
            <p className="text-slate-700 mt-2 font-medium">Advanced Modules</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-6 border-2 border-teal-200 text-center">
            <p className="text-4xl font-bold text-teal-800">{deerwalkProgram.projects.length}</p>
            <p className="text-slate-700 mt-2 font-medium">Industry Projects</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-6 border-2 border-teal-200 text-center">
            <p className="text-4xl font-bold text-teal-800">{deerwalkProgram.modules.length + deerwalkProgram.projects.length}</p>
            <p className="text-slate-700 mt-2 font-medium">Total Learning Units</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-3xl font-bold">Ready to Advance Your Career?</h2>
          <p className="mt-3 text-lg text-teal-100">
            Join our Advanced Analytics program and become an industry expert
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/modules"
              className="rounded-lg bg-white px-6 py-3 font-medium text-teal-700 hover:bg-teal-50"
            >
              View Modules
            </Link>
            <Link
              href="/projects"
              className="rounded-lg bg-white px-6 py-3 font-medium text-teal-700 hover:bg-teal-50"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 font-medium text-white hover:bg-teal-600"
            >
              Connect with Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
