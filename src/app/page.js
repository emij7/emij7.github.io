import Image from "next/image";
import bg from "../../public/background/home-background-bt.jpg";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="bg-image"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
      />
    </main>
  );
}
