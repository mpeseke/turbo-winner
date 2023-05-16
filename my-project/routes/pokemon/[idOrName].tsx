import { Handlers, PageProps } from "$fresh/server.ts";

interface Pokemon {
  name: string;
  sprite_url: string;
  type1: string;
  type2: string | null;
}

export const handler: Handlers<Pokemon | null> = {
  async GET(_, ctx) {
    const { idOrName } = ctx.params;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const apiResp = await resp.json();
    const pokemon: Pokemon = {
      name: apiResp.name,
      sprite_url: apiResp.sprites.front_default,
      type1: apiResp.types[0].type.name,
      type2: apiResp.types[1]?.type.name || null,
    };
    return ctx.render(pokemon);
  },
};

export default function Page({ data }: PageProps<Pokemon | null>) {
  if (!data) {
    return <h1>Pokemon not found</h1>;
  }

  return (
    <section>
      <h1>{data.name}</h1>
      <img
        src={data.sprite_url}
        alt={`Picture of ${data.name}`}
      />

      <p>Type 1: {data.type1}</p>
      {data.type2 && <p>Type 2: {data.type2}</p>}
    </section>
  );
}
