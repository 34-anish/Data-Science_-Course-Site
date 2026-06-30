import Link from "next/link";

const experience = [
  {
    title: "Data Science Educator",
    period: "2023 - Present",
    details:
      "Designing practical data science and machine learning programs for college students, with a strong emphasis on hands-on projects and real-world datasets.",
  },
  {
    title: "Project Mentor",
    period: "2022 - Present",
    details:
      "Guiding student teams through end-to-end project work, including problem framing, data analysis, model building, and presentation.",
  },
  {
    title: "Curriculum Developer",
    period: "2021 - Present",
    details:
      "Creating accessible learning materials and assessments that connect academic theory to professional analytics practice.",
  },
];

const testimonials = [
  {
    name: "Amrit Kandel",
    role: "BCA Student",
    quote:
      "The teaching style is clear and practical. I learned to build real projects with confidence.",
  },
  {
    name: "Shree Pujan Adhikari",
    role: "Student Mentor",
    quote:
      "Every lesson connected directly to real-world work. The mentorship made complex topics approachable.",
  },
  {
    name: "Rajendra Sundar",
    role: "Data Enthusiast",
    quote:
      "This portfolio page really reflects the focus on practical learning and strong student outcomes.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            Portfolio • Data Science Educator • Mentor
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Helping students build portfolio-ready data science skills through real projects.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            I develop learning experiences that blend analytics, machine learning, and storytelling so learners can confidently solve real problems.
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
              With a focus on project-based learning, I help learners turn data into insight. My courses combine foundational concepts, adaptable workflows, and mentorship so students build confidence with real-world analytics.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Focus</p>
                <p className="mt-3 font-semibold text-slate-900">Data science, ML, and visualization</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Approach</p>
                <p className="mt-3 font-semibold text-slate-900">Hands-on, project-based, mentorship-led</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-700 p-8 text-white shadow-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-teal-200">Impact</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/70 p-6">
                  <p className="text-4xl font-bold">4+</p>
                  <p className="mt-2 text-sm text-slate-300">Years teaching data science</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6">
                  <p className="text-4xl font-bold">100+</p>
                  <p className="mt-2 text-sm text-slate-300">Students mentored</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-teal-200">Skills</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Python", "Pandas", "Scikit-learn", "ML", "Data Viz", "Mentorship"].map((skill) => (
                  <span key={skill} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10">
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
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{item.details}</p>
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
          What learners say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-slate-700 leading-7">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
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
            Let’s build a data science journey that turns concepts into career-ready outcomes.
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
