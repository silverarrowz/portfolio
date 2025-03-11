import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="w-screen md:h-screen p-10 md:mt-0 md:p-24 min-h-screen mt-20 overflow-hidden bg-background">
        <div className="inset-0 absolute bg-background-alt z-0 animate-fade-out-scale origin-bottom"></div>
        <div className="flex items-center flex-col gap-16 h-full md:flex-row md:gap-32 md:justify-around md:mt-0 relative z-10">
          <Hero />
        </div>
      </main>
    </>
  );
}
