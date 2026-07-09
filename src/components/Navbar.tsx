import Link from "next/link";

const links = [

  { href: "/teaching", label: "Teaching" },
  { href: "/teaching/swastik", label: "Swastik" },
  { href: "/teaching/deerwalk", label: "Deerwalk" },
  // { href: "/projects", label: "Projects" },
  // { href: "/announcements", label: "Announcements" },
  { href: "https://www.linkedin.com/in/anish-manandhar-815209191/", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-800">
          Home
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