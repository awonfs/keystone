import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/prisma/prisma";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const characters = await prisma.characters.findMany({
    where: {
      userId,
    },
  });

  return NextResponse.json(characters);
}
