import Image from "next/image";
import bg from "../../public/background/home-background-bt.png";
import RenderModel from "../components/RenderModel";
import BatLogo from "../components/models/BatLogo";
import Navigation from "../components/navigation";
import RainBackground from "../components/RainBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="bg-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen">
        {/* nav and 3dmodels */}
        <Navigation />
        <RenderModel>
          <BatLogo />
        </RenderModel>
      </div>
      <RainBackground />
    </main>
  );
}
