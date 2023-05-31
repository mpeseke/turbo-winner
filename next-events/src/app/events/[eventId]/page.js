import { getEventById } from "@/app/dummy-data";
import Image from "next/image";

export default function EventDetailPage({ params }) {
  const event = getEventById(params.eventId);
  const { title, image, description, location } = event;
  const imagePath = `/${image}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{title}</h1>
      <div>
        <Image src={imagePath} alt={event.title} height={500} width={500} />
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
