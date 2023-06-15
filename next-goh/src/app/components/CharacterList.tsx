async function getCharacterData() {
  const res = await fetch("http://api.swgoh.gg/characters");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Characters() {
  const characters = await getCharacterData();

  return (
    <ul>
      {characters.map((item) => (
        <li key={item.pk}>{item.name}</li>
      ))}
    </ul>
  );
}

export default async function CharacterList() {
  const data = await getCharacterData();
  console.log(data);

  return (
    <div className="">
      <Characters />
    </div>
  );
}
