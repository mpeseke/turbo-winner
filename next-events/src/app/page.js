import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "./dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>The Home Page</h1>
        <EventList items={featuredEvents} />
      </div>
    </main>
  );
}
