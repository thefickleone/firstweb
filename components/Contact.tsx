export default function Contact() {
  return (
    <section className="py-24 bg-black text-center px-6">
      <div className="max-w-4xl mx-auto glass p-16 rounded-[4rem]">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Let's Create.</h2>
        <p className="text-xl text-gray-400 mb-10">Ready to bring your vision to life? Get in touch.</p>
        <a href="mailto:hello@example.com" className="text-2xl md:text-3xl font-medium text-blue-500 hover:text-white transition-colors underline decoration-1 underline-offset-8">
          milan@vision.dev
        </a>
      </div>
      <footer className="mt-20 text-gray-600 text-sm uppercase tracking-widest">
        © 2026 Modern Digital — Built by Milan
      </footer>
    </section>
  );
}
