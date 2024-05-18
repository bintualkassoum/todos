// src/app/dashboard/layout.tsx

import '../globals.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </header>
          <main className="flex-grow p-4">
            {children}
          </main>
          <footer className="bg-white shadow p-4 text-center">
            <p>&copy; 2024 Your Company</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
