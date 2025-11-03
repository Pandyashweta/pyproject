export function AnimatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen text-center px-4 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(118, 119, 233, 0.15) 0%, rgba(231, 60, 126, 0) 50%)",
            animation: "beat 5s ease-in-out infinite",
          }}
        />
      </div>
      {children}
    </div>
  );
}