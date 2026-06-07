import Link from "next/link";
import modules from "@/data/modules.json";
import resources from "@/data/resources.json";
import assignments from "@/data/assignments.json";
import projects from "@/data/projects.json";
import announcements from "@/data/announcements.json";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
            Data Science Course Portal
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">
            Learn Data Science with notes, notebooks, datasets, and projects.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-50">
            Non-credit course for BCA student, Swastik College
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/modules"
              className="rounded-lg bg-white px-5 py-3 font-medium text-blue-800"
            >
              Start Learning
            </Link>

            <Link
              href="/resources"
              className="rounded-lg border border-white px-5 py-3 font-medium text-white"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-blue-800">{modules.length}</p>
          <p className="text-slate-600">Modules</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-blue-800">{resources.length}</p>
          <p className="text-slate-600">Resources</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-blue-800">{projects.length}</p>
          <p className="text-slate-600">Projects</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-bold text-blue-800">
            {announcements.length}
          </p>
          <p className="text-slate-600">Announcements</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-slate-900">
          Latest Announcements
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {announcements.map((announcement) => (
            <div
              key={announcement.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">{announcement.date}</p>
              <h3 className="mt-2 font-semibold text-slate-900">
                {announcement.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {announcement.message}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}