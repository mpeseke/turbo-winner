"use client";
import EventList from "@/components/events/EventList";
import { getAllEvents } from "../dummy-data";
import { useRouter } from "next/navigation";
import EventsSearch from "@/components/events/EventsSearch";

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </main>
  );
}
