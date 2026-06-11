import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="mt-2 text-slate-600">Projects done by our students.</p>
        </div>
        <div className="text-sm text-slate-500">{projects.length} projects</div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{project.title}</h2>

            <p className="mt-2 text-sm text-slate-600">{project.description || "No description provided."}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                <div>
                  <strong>Leader:</strong> {project.leader || "—"}
                </div>
                <div className="mt-1">
                  <strong>Members:</strong>{' '}
                  {project.members && project.members.length > 0 ? (
                    project.members.join(", ")
                  ) : (
                    <span className="text-slate-400">No additional members</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-sm text-amber-600">
                  {Array.from({ length: Math.max(0, Number(project.rating || 0)) }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block rounded-md bg-blue-700 px-3 py-1 text-sm font-medium text-white"
                  >
                    LinkedIn
                  </a>
                ) : (
                  <span className="mt-3 text-sm text-slate-400"></span>
                )}
                {project.github_link ? (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block rounded-md bg-blue-700 px-3 py-1 text-sm font-medium text-white"
                  >
                    Github 
                  </a>
                ) : (
                  <span className="mt-3 text-sm text-slate-400"></span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}