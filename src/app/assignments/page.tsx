"use client";

import assignmentsData from "@/data/assignments.json";
import { resolvePublicFileUrl } from "@/lib/publicFileUrl";

type Assignment = {
  title: string;
  description?: string;
  solution?: string;
  slug?: string;
};

const assignments = assignmentsData as Assignment[];

function downloadUrl(url: string) {
  const a = document.createElement("a");
  a.href = encodeURI(resolvePublicFileUrl(url));
  a.target = "_blank";
  a.rel = "noreferrer";
  a.click();
}

export default function AssignmentsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Course assignments</h1>
      <p className="mt-2 text-slate-600">Browse Data Science assignments and solutions.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {assignments.map((item, idx) => (
          <div key={item.slug ?? idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            {item.description && <p className="mt-2 text-sm text-slate-600">{item.description}</p>}

            <div className="mt-4 flex gap-2">
              {item.solution ? (
                <>
                  <button
                    onClick={() => downloadUrl(item.solution as string)}
                    className="rounded-md bg-blue-700 px-3 py-1 text-sm font-medium text-white"
                  >
                    Download solution
                  </button>

                  <a
                    href={resolvePublicFileUrl(item.solution as string)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-green-700 px-3 py-1 text-sm font-medium text-white"
                  >
                    Open solution
                  </a>
                </>
              ) : (
                <span className="text-sm text-slate-500">No solution available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}