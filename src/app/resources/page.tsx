import resources from "@/data/resources.json";
import { resolvePublicFileUrl } from "@/lib/publicFileUrl";

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Resources</h1>
      <p className="mt-2 text-slate-600">
        Download slides, notebooks, datasets, and cheat sheets.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-teal-700">
              {resource.category}
            </p>

            <h2 className="mt-2 text-lg font-semibold text-slate-900">
              {resource.title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {resource.topic} · {resource.type}
            </p>

            <a
              href={resolvePublicFileUrl(resource.url)}
              className="mt-4 inline-block rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}