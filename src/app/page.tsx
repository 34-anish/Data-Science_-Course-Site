import Link from "next/link";

const experience = [
  {
    title: "Advanced Python Instructor",
    period: "June, 2026 - Present",
    location: "Deerwalk College",
    details:
      "Currently teaching advanced Python Programming, Data Science and Statistics for grade 12 .",
  },
  {
    title: "Data Science Instructor",
    period: "May, 2026 - Present ",
    location: "Swastik College",
    details:
      "Designed practical data science and machine learning curriculum for BCA 5th semester students.",
  },
  {
    title: "AI/ML Engineer",
    period: "October, 2024 - Present",
    location: "Javra Software",
    details:
      "Specialized in production AI system integration, designing and deploying LLM-based solutions, RAG pipelines, and AI agents that enhance structured and unstructured data processing within backend workflows.",
  },
  {
    title: "LLM Researcher",
    period: "September, 2023 - May, 2024",
    location: "IIT Hyderabad",
    details:
      "Focused on reliability, optimization, and seamless integration of AI-driven solutions.",
  },
];

const testimonials = [
  {
    name: "Ananda Khatiwada",
    role: "Manager",
    quote:
      "Anish Manandhar is an exceptional AI professional and a genuinely reliable teammate. ",
  },
  {
    name: "Roshni Baral",
    role: "HR Professional",
    quote:
      "Anish is truly a rare find. While his technical expertise as an AI/ML Engineer is top-tier, what truly sets him apart is his personality",
  },
  {
    name: "Mala Deep Upadhaya",
    role: "Lecturer | Researcher  ",
    quote:
    " Focused on reliability, optimization, and seamless integration of AI-driven logic into business-critical systems",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            AI/ML Engineer • Data Science Instructor • Mentor
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Mathematical thinker, AI/ML Engineer, Instructor, Lifelong learner.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Driven and skilled AI/ML Engineer with a focus on research on Large
            Language Models with a proven track record of delivering
            high-performing, efficient, and real-world applicable solutions.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-950/20 transition hover:bg-slate-100"
            >
              Learn More About Me
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              I make data science practical, engaging, and career-ready.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Deeply passionate about machine learning and deep learning
              research, with a strong background in mathematics and computer
              science, I am enthusiastic about exploring the potential of these
              cutting-edge technologies to solve complex problems and drive
              innovation.{" "}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Focus
                </p>
                <p className="mt-3 font-semibold text-slate-900">
                  Data science, ML, and visualization
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Approach
                </p>
                <p className="mt-3 font-semibold text-slate-900">
                  Hands-on, project-based, mentorship-led
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-700 p-8 text-white shadow-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-teal-200">
                Impact
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/70 p-6">
                  <p className="text-4xl font-bold">3+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Years of experience
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6">
                  <p className="text-4xl font-bold">100+</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Students mentored
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-teal-200">
                Skills
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Python",
                  "Pandas",
                  "Scikit-learn",
                  "ML",
                  "Data Viz",
                  "Mentorship",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
            Experience
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Professional Highlights
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {item.period}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span>{item.location}</span>
                </div>

                <p className="mt-5 border-t border-slate-100 pt-5 text-slate-600 leading-7">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
          Testimonials
        </p>
        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          What others say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-slate-700 leading-7">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-teal-700 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to collaborate or learn?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Let’s build a data science journey that turns concepts into
            career-ready outcomes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-950/20 transition hover:bg-slate-100"
            >
              Get in Touch
            </Link>
            <Link
              href="/teaching"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View Teaching Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
