// TODO: About page placeholder
export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">About</h2>
      <p className="max-w-xl text-center mb-8">
        This system automates research workflows, analyzes large datasets, and
        generates actionable insights and reports. Built with Next.js 14, React
        18, FastAPI, and Tailwind CSS.
      </p>
      <span className="px-4 py-2 rounded-full bg-accent text-primary font-semibold shadow">
        Learn More
      </span>
    </div>
  );
}
