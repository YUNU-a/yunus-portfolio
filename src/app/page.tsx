import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 500vh container for the scrolling experience */}
      <div className="relative h-[500vh] w-full">
        {/* The fixed UI overlying the canvas */}
        <Overlay />
        {/* The Sticky Canvas scrubbing the video */}
        <ScrollyCanvas />
      </div>

      {/* Content after the scroll */}
      <div className="relative z-10 bg-background flex flex-col">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
