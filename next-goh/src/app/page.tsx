import Image from "next/image";
import CharacterList from "./components/CharacterList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>SWGOH - Team Builder - Synergies Checker</h1>
      <div className="m-5 p-5 bg-slate-500 rounded-xl shadow-sm flex flex-col items-center">
        <h2>This will be the character list area</h2>
        <CharacterList />
      </div>
    </main>
  );
}
