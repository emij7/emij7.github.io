import PortfolioPage from "../components/PortfolioPage";
import { portfolioContent } from "../content/portfolio";

export default function HomePage() {
  return <PortfolioPage content={portfolioContent.en} />;
}
