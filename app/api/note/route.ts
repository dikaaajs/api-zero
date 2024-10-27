import connectMongoDB from "@/libs/database";
import Note from "@/models/note";
import { NextResponse } from "next/server";
connectMongoDB();

export async function GET(req: any) {
  const creatorId = req.nextUrl.searchParams.get("v");
  const idNote = req.nextUrl.searchParams.get("d");
  try {
    let res;
    if (creatorId) {
      res = await Note.find({ creatorId });
    } else if (idNote) {
      res = await Note.findById(idNote);
    } else {
      res = await Note.find();
    }

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "gagal" }, { status: 500 });
  }
}

export async function POST(req: any) {
  const { headline, valueNote, creatorId } = await req.json();
  try {
    const res = await Note.create({ headline, valueNote, creatorId });
    return NextResponse.json(
      { msg: "berhasil menambahkan note" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "gagal menambahkan note", error },
      { status: 500 }
    );
  }
}
