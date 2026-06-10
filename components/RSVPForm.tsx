"use client";
import { useState } from "react";

interface Props {
  onSuccess: (name: string) => void;
}

export default function RSVPForm({ onSuccess }: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) {
      setError("Por favor, digite seu nome completo.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      if (!res.ok) throw new Error();
      onSuccess(name.trim());
    } catch {
      setError("Ops! Algo deu errado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-nunito font-bold text-[#c97b00] text-[12px] tracking-[0.18em] uppercase text-center mb-3">
        Confirme sua presença
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome completo"
        disabled={loading}
        className="rsvp-input"
        style={{ fontSize: 16 }}
        autoComplete="name"
      />
      {error && <p className="text-[#ff9f3f] text-sm text-center mt-2">{error}</p>}
      <button type="submit" disabled={loading} className="rsvp-btn">
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="loading-dot" />
            Confirmando...
          </span>
        ) : (
          "Confirmar presença"
        )}
      </button>
    </form>
  );
}
