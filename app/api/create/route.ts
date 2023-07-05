import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type RequestBody = {
  name: string;
  realm: string;
  region: string;
};

export async function POST(request: Request) {
  const { userId } = auth();
  const { name, realm, region } = (await request.json()) as RequestBody;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!name || !realm || !region) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  await prisma.characters.create({
    data: {
      name,
      realm,
      region,
      userId,
    },
  });

  return NextResponse.json({ success: true });
}
