export default function Home(){
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <section className="text-center p-10">
        <h1 className="text-5xl font-bold">Miss Lily AI Teacher</h1>
        <p className="mt-6 text-lg">
          Your child's AI English teacher for Primary 1-6.
        </p>
        <a className="inline-block mt-8 px-8 py-3 rounded-xl bg-black text-white" href="/teacher">
          Start Learning
        </a>
      </section>
    </main>
  )
}
