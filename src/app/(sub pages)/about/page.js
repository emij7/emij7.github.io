import LegacyRedirect from "../../../components/LegacyRedirect";

export const metadata = {
  title: "About | Ignacio Emiliano Juarez",
  robots: { index: false, follow: true },
};

export default function LegacyAboutPage() {
  return <LegacyRedirect target="about" label="Opening the updated About section…" />;
}
