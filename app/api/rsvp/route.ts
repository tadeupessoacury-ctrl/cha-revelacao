import { NextRequest, NextResponse } from "next/server";
import { saveRSVP } from "@/lib/sheetdb";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Nome inválido" }, { status: 400 });
    }
    await saveRSVP(name.trim());
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro ao salvar confirmação" }, { status: 500 });
  }
}
