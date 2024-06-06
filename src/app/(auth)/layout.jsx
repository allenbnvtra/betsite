export default function RootLayout({ children }) {
  return (
    <main className="h-screen w-full bg-[#111e33] pt-2 md:px-10 md:pt-7">
      <div className="h-full">{children}</div>
    </main>
  );
}
