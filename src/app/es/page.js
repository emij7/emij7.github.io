import PortfolioPage from "../../components/PortfolioPage";
import { portfolioContent } from "../../content/portfolio";

export const metadata = {
  title: "Ignacio Emiliano Juarez | Software Engineer & Full Stack Developer",
  description:
    "Software Engineer y Full Stack Developer especializado en React, Next.js, TypeScript, Node.js y Laravel. Desarrollo web y mobile desde la idea hasta producción.",
  alternates: {
    canonical: "/es/",
    languages: {
      en: "/",
      es: "/es/",
    },
  },
  openGraph: {
    locale: "es_AR",
    url: "/es/",
  },
};

export default function SpanishHomePage() {
  return <PortfolioPage content={portfolioContent.es} />;
}
