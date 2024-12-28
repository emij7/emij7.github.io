import Image from "next/image";
import bg from "../../public/background/home-background-bt.png";
import RenderModel from "../components/RenderModel";
import BatLogo from "../components/models/BatLogo";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="bg-image"
        fill
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        {/* nav and 3dmodels */}
        <RenderModel>
          <BatLogo />
        </RenderModel>
      </div>
    </main>
  );
}
