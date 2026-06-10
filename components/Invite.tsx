import Scene from "./Scene";

export default function Invite() {
  return (
    <>
      {/* Cena do arraial */}
      <div className="cascade-in" style={{ animationDelay: "0s" }}>
        <Scene />
      </div>

      {/* Conteúdo */}
      <div className="px-5 text-center">

        {/* Badge + Título */}
        <div className="cascade-in" style={{ animationDelay: "0.2s" }}>
          <div className="badge-festa">Festa Junina</div>
          <h1
            className="font-dancing text-[#ffe08a] text-4xl leading-none mt-3 mb-1"
            style={{ textShadow: "0 0 24px rgba(255,200,80,0.6), 2px 2px 0 #7a3500" }}
          >
            Revelação!
          </h1>
        </div>

        {/* Divisor */}
        <Divider emoji="🎉" />

        {/* Pedro ou Clara */}
        <div className="names-box cascade-in" style={{ animationDelay: "0.3s" }}>
          <p className="font-nunito font-bold text-[#c97b00] text-[11px] tracking-[0.2em] uppercase mb-1.5">
            Menino ou Menina?
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="font-dancing text-[#87ceeb] text-4xl" style={{ textShadow: "0 0 16px rgba(100,200,255,0.5)" }}>
              Pedro
            </span>
            <span className="font-nunito font-bold text-[#c97b00] text-sm">ou</span>
            <span className="font-dancing text-[#f9a8d4] text-4xl" style={{ textShadow: "0 0 16px rgba(255,150,200,0.5)" }}>
              Clara
            </span>
          </div>
        </div>

        {/* Divisor */}
        <Divider emoji="💛" />

        {/* Info cards */}
        <div className="cascade-in flex flex-col gap-2" style={{ animationDelay: "0.4s" }}>
          <InfoRow icon="📅" label="DATA"    line1="28 de Junho de 2026" line2="Sábado"               />
          <InfoRow icon="🕒" label="HORÁRIO" line1="A partir das 15h"                                 />
          <InfoRow icon="📍" label="LOCAL"   line1="Rua Doutor Mario Viana, 486" line2="Play do Condomínio" />
        </div>

        {/* Rodapé */}
        <div className="cascade-in" style={{ animationDelay: "0.5s" }}>
          <p className="font-dancing text-[#ffe08a] text-[19px] mt-3 mb-2" style={{ textShadow: "0 0 8px rgba(255,200,80,0.4)" }}>
            Venha celebrar conosco!
          </p>
        </div>
      </div>

      {/* Separador antes do form */}
      <div className="mx-5 mt-2 mb-1 h-px bg-gradient-to-r from-transparent via-[#c97b00] to-transparent" />
    </>
  );
}

function Divider({ emoji }: { emoji: string }) {
  return (
    <div className="flex items-center gap-2 my-2 w-4/5 mx-auto">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c97b00] to-transparent" />
      <span className="text-base">{emoji}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c97b00] to-transparent" />
    </div>
  );
}

function InfoRow({ icon, label, line1, line2 }: { icon: string; label: string; line1: string; line2?: string }) {
  return (
    <div className="flex items-center gap-3 bg-[rgba(255,220,120,0.06)] border border-[rgba(201,123,0,0.35)] rounded-xl px-4 py-2.5">
      <span className="text-lg flex-shrink-0">{icon}</span>
      <div className="text-left">
        <p className="font-nunito font-bold text-[#c97b00] text-[8px] tracking-widest uppercase leading-none mb-0.5">{label}</p>
        <p className="text-[#ffe8b0] font-bold text-[13px] leading-snug">{line1}</p>
        {line2 && <p className="text-[rgba(255,220,140,0.65)] text-[11px] italic leading-snug">{line2}</p>}
      </div>
    </div>
  );
}
