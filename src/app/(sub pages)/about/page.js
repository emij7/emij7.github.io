import Image from "next/image";
import bg from "../../../../public/background/about-background.jpg";
import RenderModel from "../../../components/RenderModel";
// import BatMask from "../../../components/models/BatMask";
import AboutDetails from "../../../components/about";
import dynamic from "next/dynamic";

const BatMask = dynamic(
  () => import("../../../components/models/BatMask"),
  { ssr: false }
);

export default function Projects() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="bg-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <BatMask />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl text-accent">
            Emiliano Juarez
          </h1>
          <p className="font-light text-foreground text-base">
            Find out who is behind the mask.
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
