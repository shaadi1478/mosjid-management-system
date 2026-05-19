import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="mt-6 space-y-3">
          <a href="/admin" className="block">Dashboard</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}