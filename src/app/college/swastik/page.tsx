import Link from "next/link";
import modules from "@/data/modules.json";
import resources from "@/data/resources.json";
import projects from "@/data/projects.json";
import assignments from "@/data/assignments.json";

export default function SwastikCollegePage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back
          </Link>
          
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Swastik College - BCA Program
          </h1>
          
          <p className="mt-4 text-lg text-blue-50">
            Comprehensive Data Science curriculum for BCA students combining theory, practical notebooks, datasets, and real-world projects.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-3xl font-bold text-blue-800">{modules.length}</p>
            <p className="text-slate-600 mt-2">Learning Modules</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-3xl font-bold text-blue-800">{resources.length}</p>
            <p className="text-slate-600 mt-2">Study Resources</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-3xl font-bold text-blue-800">{projects.length}</p>
            <p className="text-slate-600 mt-2">Hands-on Projects</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-blue-500">
            <p className="text-3xl font-bold text-blue-800">{assignments.length}</p>
            <p className="text-slate-600 mt-2">Assignments</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">About This Course</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            This is a non-credit course designed specifically for BCA students at Swastik College. The curriculum provides a comprehensive introduction to Data Science, covering essential concepts in data analysis, machine learning, and statistical modeling. Each module includes theoretical foundations, practical Jupyter notebooks, real datasets, and challenging projects to reinforce learning.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Students will work with industry-standard tools and libraries, analyze real-world datasets, and complete projects that showcase their understanding of core data science principles.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Modules</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link key={module.id} href="/modules">
              <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-blue-400">
                <h3 className="font-semibold text-slate-900">{module.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{module.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to Start Learning?</h2>
          <p className="mt-3 text-blue-100">
            Explore all modules, resources, and projects for the Swastik College curriculum.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link
              href="/modules"
              className="rounded-lg bg-white px-6 py-3 font-medium text-blue-700 hover:bg-blue-50"
            >
              View All Modules
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-white px-6 py-3 font-medium text-white hover:bg-blue-600"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
