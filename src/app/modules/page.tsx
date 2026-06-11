"use client";

import modulesData from "@/data/modules.json";
import { resolvePublicFileUrl } from "@/lib/publicFileUrl";

type Resource = {
  label: string;
  type: string;
  url: string;
};

type Module = {
  title: string;
  slug: string;
  level: string;
  description: string;
  topics: string[];
  resources?: Resource[];
};

const modules = modulesData as Module[];

function downloadUrl(url: string) {
  const a = document.createElement("a");
  a.href = encodeURI(resolvePublicFileUrl(url));
  a.target = "_blank";
  a.rel = "noreferrer";
  a.click();
}

export default function ModulesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Course Modules</h1>
      <p className="mt-2 text-slate-600">
        Browse Data Science lessons, notes, notebooks, and datasets.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <div
            key={module.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {module.level}
              </span>

              
            </div>

            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              {module.title}
            </h2>

            <p className="mt-2 text-slate-600">{module.description}</p>

            <ul className="mt-4 list-inside list-disc text-sm text-slate-600">
              {module.topics.map((topic: string) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>

            {module.resources && module.resources.length > 0 && (
              <div className="mt-4 space-y-2">
                {module.resources.map((res: Resource) => (
                  <div key={res.url} className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 p-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{res.label}</p>
                      <p className="text-xs text-slate-500">{res.type}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => downloadUrl(res.url)}
                        className="rounded-md bg-blue-700 px-3 py-1 text-sm font-medium text-white"
                      >
                        Download
                      </button>
                      

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}