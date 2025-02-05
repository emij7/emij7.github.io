import Image from "next/image";
import bg from "../../public/background/home-background-bt.png";
import RenderModel from "../components/RenderModel";
// import BatLogo from "../components/models/BatLogo";
import Navigation from "../components/navigation";
import RainBackground from "../components/RainBackground";
import dynamic from "next/dynamic";

const BatLogo = dynamic(
  () => import("../components/models/BatLogo"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="bg-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen">
        {/* nav and 3dmodels */}
        <Navigation />
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pt-20 -z-20">
          <p className="text-foreground font-light text-2xl">
            Ignacio Emiliano Juarez
          </p>
        </div>
        <RenderModel>
          <BatLogo />
        </RenderModel>
      </div>
      <RainBackground />
    </main>
  );
}
