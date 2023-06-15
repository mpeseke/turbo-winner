import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/helpers/api-util";

export const metadata = {
  title: "NextJS Events",
  description: "Find inspiring events to evolve your self",
};

async function getData() {
  return getFeaturedEvents();
}

export default async function Home() {
  const featuredEvents = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>The Home Page</h1>
        <EventList items={featuredEvents} />
      </div>
    </main>
  );
}
