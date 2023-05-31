export default function FilteredEventsPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Bacons.</h1>
        {params.slug.map((item, index) => {
          return <span key={index}>{item}/</span>;
        })}
      </div>
    </main>
  );
}
