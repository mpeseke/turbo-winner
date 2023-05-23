import Link from "next/link";

interface Client {
  id: string;
  name: string;
}

const clients: Client[] = [
  { id: "max", name: "Maximilian Pegasus" },
  { id: "mar", name: "Marlon is the GOAT" },
];

export default function ClientsPage() {
  return (
    <div>
      this is the clients page
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
