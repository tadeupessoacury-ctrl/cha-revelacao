export default function Invite() {
  return (
    <>
      {/* Estrelas */}
      <div className="stars" aria-hidden="true">
        {[
          { w: 3, top: "10%", left: "7%",  delay: "0s"   },
          { w: 2, top: "18%", left: "91%", delay: "0.3s" },
          { w: 2, top: "40%", left: "4%",  delay: "0.6s" },
          { w: 3, top: "55%", left: "89%", delay: "0.9s" },
          { w: 2, top: "70%", left: "10%", delay: "1.1s" },
          { w: 2, top: "85%", left: "93%", delay: "0.7s" },
        ].map((s, i) => (
          <span key={i} className="star" style={{ width: s.w, height: s.w, top: s.top, left: s.left, animationDelay: s.delay }} />
        ))}
      </div>

      {/* Bandeirinhas */}
      <div className="cascade-in" style={{ animationDelay: "0s" }}>
        <Bandeirinhas />
      </div>

      {/* Fogueira */}
      <div className="flex justify-center mt-1 cascade-in" style={{ animationDelay: "0.1s" }}>
        <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" className="w-28 fogueira-svg">
          <line x1="20" y1="75" x2="50" y2="58" stroke="#7a3500" strokeWidth="5" strokeLinecap="round" />
          <line x1="80" y1="75" x2="50" y2="58" stroke="#7a3500" strokeWidth="5" strokeLinecap="round" />
          <line x1="10" y1="68" x2="50" y2="58" stroke="#5c2800" strokeWidth="4" strokeLinecap="round" />
          <line x1="90" y1="68" x2="50" y2="58" stroke="#5c2800" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="50" cy="72" rx="28" ry="6" fill="#ff4500" opacity="0.5" />
          <ellipse className="flame-a" cx="50" cy="52" rx="16" ry="22" fill="#ff6b00" opacity="0.9" />
          <ellipse className="flame-b" cx="42" cy="50" rx="10" ry="18" fill="#ff9f3f" opacity="0.8" />
          <ellipse className="flame-c" cx="58" cy="52" rx="9"  ry="16" fill="#ffb347" opacity="0.7" />
          <ellipse className="flame-d" cx="50" cy="42" rx="8"  ry="16" fill="#ffe08a" opacity="0.9" />
          <ellipse className="flame-e" cx="50" cy="36" rx="5"  ry="12" fill="#ffffff" opacity="0.6" />
        </svg>
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

        {/* Info cards — 3 em coluna, largura total */}
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

function Bandeirinhas() {
  const flags = [
    { x: 22,  c: "#e63946", delay: "0s"    },
    { x: 57,  c: "#ffe08a", delay: "0.18s" },
    { x: 92,  c: "#2a9d8f", delay: "0.36s" },
    { x: 127, c: "#e9c46a", delay: "0.54s" },
    { x: 162, c: "#e63946", delay: "0.72s" },
    { x: 197, c: "#f4a261", delay: "0.9s"  },
    { x: 232, c: "#ffe08a", delay: "1.08s" },
    { x: 267, c: "#2a9d8f", delay: "1.26s" },
    { x: 302, c: "#e63946", delay: "1.44s" },
    { x: 337, c: "#e9c46a", delay: "1.62s" },
    { x: 372, c: "#f4a261", delay: "1.8s"  },
  ];
  return (
    <div className="w-full overflow-hidden h-12">
      <svg viewBox="0 0 420 54" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
        <path d="M0,12 Q52,28 105,14 Q157,0 210,14 Q263,28 315,14 Q368,0 420,14"
          stroke="#c97b00" strokeWidth="1.5" fill="none" />
        {flags.map(({ x, c, delay }, i) => (
          <g key={i} className="flag-sway" style={{ animationDelay: delay }}>
            <polygon points={`${x},12 ${x + 16},12 ${x + 8},30`} fill={c} />
          </g>
        ))}
      </svg>
    </div>
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
