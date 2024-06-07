import Header from '@/components/ui/Header/Header';
import MobileNav from '@/components/ui/MobileNav/MobileNav';
import Sidebar from '@/components/ui/Sidebar/Sidebar';

export default function RootLayout({ children }) {
  return (
    <main className="flex w-full">
      <Sidebar />
      <section className="w-full">
        <Header />
        <div className="p-5">{children}</div>
        <MobileNav />
      </section>
    </main>
  );
}
