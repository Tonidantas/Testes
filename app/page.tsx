import { HeroScrollDemo } from "@/components/ui/demo";
import { SplineSceneBasic } from "@/components/ui/spline-demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroScrollDemo />
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <SplineSceneBasic />
      </section>
    </main>
  );
}
