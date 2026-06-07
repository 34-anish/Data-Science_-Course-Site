import announcements from "@/data/announcements.json";

export default function announcementsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Announcements</h1>
      <p className="mt-2 text-slate-600">
        Download slides, notebooks, datasets, and cheat sheets.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {announcements.map((announcement) => (
          <div
            key={announcement.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-teal-700">
              {announcement.date}
            </p>

            <h2 className="mt-2 text-lg font-semibold text-slate-900">
              {announcement.message}
            </h2>

          </div>
        ))}
      </div>
    </main>
  );
}