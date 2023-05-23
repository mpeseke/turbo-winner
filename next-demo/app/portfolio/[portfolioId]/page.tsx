export default function PortfolioProjectPage({
  params,
}: {
  params: { portfolioId: string };
}) {
  return (
    <div>
      <h1 className="text-xl">{params.portfolioId} Portfolio Page</h1>
    </div>
  );
}
