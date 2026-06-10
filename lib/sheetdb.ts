export async function saveRSVP(name: string): Promise<void> {
  const url = process.env.SHEETDB_API_URL;
  if (!url) throw new Error("SHEETDB_API_URL não configurada");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        Nome: name,
        "Data/Hora": new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        }),
      },
    }),
  });

  if (!res.ok) throw new Error(`SheetDB respondeu ${res.status}`);
}
