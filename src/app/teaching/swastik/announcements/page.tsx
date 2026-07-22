"use client";

import { useEffect, useState } from "react";
import announcements from "@/data/swastik/announcements.json";
import { resolvePublicFileUrl } from "@/lib/publicFileUrl";

type Announcement = {
  title: string;
  date: string;
  message: string;
  image?: string;
  link?: string;
};

export default function AnnouncementsPage() {
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAnnouncement(null);
      }
    };

    if (selectedAnnouncement) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedAnnouncement]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Announcements</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {announcements.map((announcement) => (
          <button
            key={announcement.title}
            type="button"
            onClick={() => setSelectedAnnouncement(announcement)}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {announcement.image && (
              <img
                src={resolvePublicFileUrl(announcement.image)}
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

              <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                {announcement.message}
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-teal-700">
                View announcement →
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedAnnouncement && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="announcement-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAnnouncement(null)}
              aria-label="Close announcement"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-700 shadow hover:bg-white"
            >
              ×
            </button>

            {selectedAnnouncement.image && (
              <img
                src={resolvePublicFileUrl(selectedAnnouncement.image)}
                alt={selectedAnnouncement.title}
                className="max-h-[420px] w-full object-cover"
              />
            )}

            <div className="p-8">
              <p className="text-sm font-semibold text-teal-700">
                {selectedAnnouncement.date}
              </p>

              <h2
                id="announcement-title"
                className="mt-3 text-3xl font-bold text-slate-900"
              >
                {selectedAnnouncement.title}
              </h2>

              <p className="mt-5 whitespace-pre-line leading-7 text-slate-600">
                {selectedAnnouncement.message}
              </p>

              {selectedAnnouncement.link && (
                <a
                  href={selectedAnnouncement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-block rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  Link
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

