import LegacyRedirect from "../../../components/LegacyRedirect";

export const metadata = {
  title: "Projects | Ignacio Emiliano Juarez",
  robots: { index: false, follow: true },
};

export default function LegacyProjectsPage() {
  return <LegacyRedirect target="projects" label="Opening the updated Projects section…" />;
}
