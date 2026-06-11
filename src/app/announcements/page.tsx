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
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {announcement.image && (
        <img
          src={announcement.image}
          alt={announcement.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6">
        <p className="text-sm font-medium text-teal-700">
          {announcement.date}
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-900">
          {announcement.title}
        </h2>

        <p className="mt-3 text-sm text-slate-600">
          {announcement.message}
        </p>

        {announcement.link && (
          <a
            href={announcement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
          >
            Register / Learn More
          </a>
        )}
      </div>
    </div>
  ))}
</div>
    </main>
  );
}