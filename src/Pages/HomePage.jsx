import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";



export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">


      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1">
          <Hero />
        </main>
      </div>


    </div>
  );
}
