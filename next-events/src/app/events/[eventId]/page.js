import { getEventById } from "@/app/dummy-data";
import Image from "next/image";

export default function EventDetailPage({ params }) {
  const event = getEventById(params.eventId);
  if (!event) {
    return <p>No event Found </p>;
  }
  const { title, image, description, location } = event;
  const imagePath = `/${image}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{title}</h1>
      <div>
        <Image src={imagePath} alt={event.title} height={250} width={150} />
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
