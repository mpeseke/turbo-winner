import { NextResponse } from "next/server";

const CHAR_SOURCE_URL = "http://api.swgoh.gg/characters/"; //all characters from API

export async function GET() {
  const res = await fetch(CHAR_SOURCE_URL);

  const characters = await res.json();
  return NextResponse.json(characters);
}
