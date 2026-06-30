import Link from "next/link";
import modules from "@/data/modules.json";
import resources from "@/data/resources.json";
import projects from "@/data/projects.json";
import assignments from "@/data/assignments.json";

export default function DeerwalkCollegePage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link href="/" className="text-teal-100 hover:text-white mb-4 inline-block">
            ← Back
          </Link>
          
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Deerwalk College - Advanced Analytics
          </h1>
          
          <p className="mt-4 text-lg text-teal-50">
            Advanced machine learning and analytics program focused on industry applications and bridging academic theory with professional practice.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-800">{modules.length}</p>
            <p className="text-slate-600 mt-2">Advanced Modules</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-800">{resources.length}</p>
            <p className="text-slate-600 mt-2">Technical Resources</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-800">{projects.length}</p>
            <p className="text-slate-600 mt-2">Industry Projects</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-800">{assignments.length}</p>
            <p className="text-slate-600 mt-2">Capstone Tasks</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-teal-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">About This Program</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The Advanced Analytics program at Deerwalk College is designed for students seeking deep expertise in machine learning, predictive analytics, and data-driven decision making. This program bridges the gap between academic theory and industry practice through collaborative projects and mentorship.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Students work on real-world case studies, develop production-ready machine learning models, and gain hands-on experience with cutting-edge tools used in industry. The curriculum emphasizes practical applications, code quality, and deployment strategies.
          </p>
        </div>
      </section>

      {/* Advanced Topics Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Program Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <h3 className="font-bold text-slate-900 text-lg">Advanced ML Techniques</h3>
            <p className="mt-3 text-sm text-slate-600">Deep learning, ensemble methods, NLP, and computer vision for real-world applications.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <h3 className="font-bold text-slate-900 text-lg">Industry Partnerships</h3>
            <p className="mt-3 text-sm text-slate-600">Collaborate on live projects with industry experts and gain practical professional experience.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <h3 className="font-bold text-slate-900 text-lg">Mentorship Program</h3>
            <p className="mt-3 text-sm text-slate-600">1-on-1 guidance from experienced data scientists and machine learning engineers.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-teal-500">
            <h3 className="font-bold text-slate-900 text-lg">Career Development</h3>
            <p className="mt-3 text-sm text-slate-600">Portfolio building, interview preparation, and job placement support.</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Modules</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link key={module.id} href="/modules">
              <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-teal-400">
                <h3 className="font-semibold text-slate-900">{module.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{module.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 text-center">
          <h2 className="text-2xl font-bold">Join the Advanced Analytics Program</h2>
          <p className="mt-3 text-teal-100">
            Master advanced techniques and prepare for leadership roles in data science.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link
              href="/modules"
              className="rounded-lg bg-white px-6 py-3 font-medium text-teal-700 hover:bg-teal-50"
            >
              Explore Curriculum
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 font-medium text-white hover:bg-teal-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
