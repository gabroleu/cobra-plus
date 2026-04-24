export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-black">
      <div className="flex">
        <aside className="w-64 h-screen border-r">
          <h1 className="p-4 font-bold text-primary">Cobra+</h1>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}