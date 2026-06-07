import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/modules", label: "Modules" },
  { href: "/resources", label: "Resources" },
  // { href: "/assignments", label: "Assignments" },
  { href: "/projects", label: "Projects" },
  { href: "/announcements", label: "Announcements" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-800">
          Data Science
        </Link>

        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}