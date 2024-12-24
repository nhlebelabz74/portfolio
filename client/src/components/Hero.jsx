import { lazy, Suspense } from "react";
import { styles } from "../constants";
const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-light-purple"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} cursor-pointer`}>
            Hi, I'm <span className="text-light-purple hover:text-gold">Banzile</span>
          </h1>
          <p className={`${styles.heroSubText} cursor-pointer`}>
            I am a Wits Computer Science <br className="sm:block hidden"/> and Mathematics <span className="text-gold font-medium">Graduand</span>
          </p>
        </div>
      </div>

      <Suspense fallback={
        <div className="flex-1 w-full h-full flex items-center justify-center mt-10">
          <p className="text-white">Loading 3D Model...</p>
        </div>
      }>
        <ComputersCanvas />
      </Suspense>
    </section>
  );
}

export default Hero;