import { getAllEvents, getEventById } from "@/helpers/api-util";
import Image from "next/image";

export async function generateStaticParams() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return paths;
}

export default async function EventDetailPage({ params }) {
  const event = await getEventById(params.eventId);
  if (!event) {
    return <p>No event Found </p>;
  }
  const { title, image, description, location } = event;
  const imagePath = `/${image}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{title}</h1>
      <div>
        <Image src={imagePath} alt={title} height={250} width={150} />
      </div>
      <div>
        <address>{location}</address>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
