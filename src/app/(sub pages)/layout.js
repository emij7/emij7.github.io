import HomeButton from "../../components/HomeButton";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 md:px-20 px-8">
      <HomeButton />
      {children}
    </main>
  );
}
