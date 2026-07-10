export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="mt-4 text-xl text-blue-100">
            Educator | Data Science Enthusiast | Mentor
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Who I Am</h2>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            Welcome! I'm a passionate educator dedicated to making data science accessible and practical for students. With a focus on bridging the gap between academic theory and real-world applications, I create learning experiences that empower students to become skilled data professionals.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            My teaching philosophy centers on hands-on learning, problem-solving, and mentorship. I believe that the best way to learn data science is by working with real datasets, building actual projects, and learning from industry practices. Every concept is tied to practical applications that students can use in their careers.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">My Teaching Journey</h2>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            I've had the privilege of teaching at multiple institutions, each with its unique focus and student demographics. This diverse experience has shaped my approach to education and helped me develop teaching methodologies that work for different learning styles and backgrounds.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">What I Offer</h2>
          
          <ul className="space-y-3 text-slate-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Comprehensive Curriculum:</strong> Structured courses from fundamentals to advanced topics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Real-World Projects:</strong> Hands-on projects using actual datasets and industry tools</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Mentorship:</strong> One-on-one guidance and career development support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Interactive Learning:</strong> Notebooks, datasets, and interactive examples</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Industry Focus:</strong> Teaching practices and tools used in professional settings</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="rounded-xl bg-blue-50 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Accessibility</h3>
              <p className="text-sm text-slate-700">
                Making complex concepts understandable for everyone, regardless of background
              </p>
            </div>
            <div className="rounded-xl bg-teal-50 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Practicality</h3>
              <p className="text-sm text-slate-700">
                Every lesson focuses on real-world applications and practical skills
              </p>
            </div>
            <div className="rounded-xl bg-purple-50 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Empowerment</h3>
              <p className="text-sm text-slate-700">
                Equipping students with confidence and competence for their careers
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">Let's Connect</h2>
          
          <p className="text-slate-700 leading-relaxed">
            Whether you're looking to learn data science, need mentorship, or want to collaborate on projects, I'm here to help. Explore my teaching programs, dive into the courses, and let's build your data science skills together!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h2 className="text-2xl font-bold">Ready to Learn?</h2>
          <p className="mt-3 text-blue-100">
            Explore my teaching programs and start your data science journey
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="/teaching"
              className="rounded-lg bg-white px-6 py-3 font-medium text-blue-700 hover:bg-blue-50"
            >
              Explore Teaching Programs
            </a>
            <a
              href="https://www.linkedin.com/in/anish-manandhar-815209191/"
              className="rounded-lg border border-white px-6 py-3 font-medium text-white hover:bg-blue-600"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
