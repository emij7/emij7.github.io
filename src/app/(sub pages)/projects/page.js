import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../../components/RenderModel";
import dynamic from "next/dynamic";
// import Batman from "../../../components/models/Batman";

const Batman = dynamic(
  () => import("../../../components/models/Batman"),
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
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed xl:top-20 xl:left-0 h-screen -z-20">
        <RenderModel>
          <Batman />
        </RenderModel>
      </div>
    </>
  );
}
