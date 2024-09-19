import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Vision } from "@/components/vision";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <Vision />
      <About />
      <Why />
    </div>
  );
}
