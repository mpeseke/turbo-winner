import { NextResponse } from "next/server";

const CHAR_SOURCE_URL = "http://api.swgoh.gg/characters"; //all characters from API

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const res = await fetch(`${CHAR_SOURCE_URL}/${id}`);

  const character = await res.json();

  return NextResponse.json(character);
}
