// TODO: Dashboard page placeholder
export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">Research Dashboard</h2>
      <div className="flex items-center gap-2 mb-6">
        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm">Real-time collaboration enabled</span>
      </div>
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="mb-2">Your research tasks will appear here.</p>
        <span className="px-3 py-1 rounded bg-primary text-accent font-semibold">Add New Task</span>
      </div>
    </div>
  );
}
