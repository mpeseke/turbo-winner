import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Hello World!</h1>
      <ul>
        <li key="1">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li key="2">
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
