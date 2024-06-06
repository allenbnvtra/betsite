import Header from "@/components/ui/Header/Header";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="flex w-full">
      <Sidebar />
      <section className="w-full">
        <Header />
        <div className="px-4 pt-6">{children}</div>
      </section>
    </main>
  );
}
