const FLAG_DELAYS = ["0s","0.18s","0.36s","0.54s","0.72s","0.9s","1.08s","1.26s","1.44s","1.62s","1.8s"];
const MID_DELAYS  = ["0.12s","0.3s","0.48s","0.66s","0.84s","1.02s","1.2s","1.38s","1.56s","1.74s"];

const FLAGS_TOP = [
  {x:22,c:"#e63946"},{x:57,c:"#ffe08a"},{x:92,c:"#2a9d8f"},{x:127,c:"#e9c46a"},
  {x:162,c:"#e63946"},{x:197,c:"#f4a261"},{x:232,c:"#ffe08a"},{x:267,c:"#2a9d8f"},
  {x:302,c:"#e63946"},{x:337,c:"#e9c46a"},{x:372,c:"#f4a261"},
];
// y calculado pela catenária Q(0,152 ; 210,176 ; 420,152): y=152+48t(1-t)
const FLAGS_MID = [
  {x:28, c:"#f4a261", y:155},{x:68, c:"#2a9d8f", y:159},{x:108,c:"#e9c46a",y:161},
  {x:148,c:"#e63946", y:163},{x:188,c:"#ffe08a", y:164},{x:228,c:"#f4a261",y:164},
  {x:268,c:"#e63946", y:163},{x:308,c:"#2a9d8f", y:161},{x:348,c:"#e9c46a",y:159},
  {x:388,c:"#ffe08a", y:155},
];
const FLAGS_L = [{x:8,c:"#e63946"},{x:28,c:"#e9c46a"},{x:48,c:"#2a9d8f"},{x:68,c:"#f4a261"},{x:88,c:"#e63946"}];
const FLAGS_R = [{x:314,c:"#ffe08a"},{x:334,c:"#2a9d8f"},{x:354,c:"#e9c46a"},{x:374,c:"#e63946"},{x:394,c:"#f4a261"}];

const STARS = [
  {cx:18,cy:22,r:1.5,op:0.9},{cx:52,cy:35,r:1,op:0.7},{cx:85,cy:18,r:2,op:0.8},
  {cx:118,cy:43,r:1,op:0.6},{cx:162,cy:26,r:1.5,op:0.9},{cx:198,cy:43,r:1,op:0.5},
  {cx:238,cy:17,r:1.5,op:0.8},{cx:268,cy:40,r:1,op:0.7},{cx:305,cy:23,r:2,op:0.8},
  {cx:342,cy:14,r:1,op:0.9},{cx:32,cy:65,r:1,op:0.5},{cx:142,cy:60,r:1.5,op:0.6},
  {cx:250,cy:67,r:1,op:0.7},{cx:188,cy:14,r:1,op:0.6},{cx:70,cy:55,r:1,op:0.5},
];

export default function Scene() {
  return (
    <svg
      viewBox="0 0 420 280"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <defs>
        {/* Céu noturno de São João */}
        <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0d0030" />
          <stop offset="55%"  stopColor="#3a0a22" />
          <stop offset="100%" stopColor="#5c1800" />
        </linearGradient>
        {/* Lua — radial */}
        <radialGradient id="sc-moon" cx="35%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#fffde7" />
          <stop offset="100%" stopColor="#f0d060" />
        </radialGradient>
        {/* Brilho da lua */}
        <radialGradient id="sc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fffde7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff8800" stopOpacity="0" />
        </radialGradient>
        {/* Chão */}
        <linearGradient id="sc-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1a0800" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1a0800" stopOpacity="0.65" />
        </linearGradient>
        {/* Fade inferior — dissolve a cena no fundo do card */}
        <linearGradient id="sc-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#3d1500" stopOpacity="0"   />
          <stop offset="40%"  stopColor="#3d1500" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3d1500" stopOpacity="1"   />
        </linearGradient>
      </defs>

      {/* ── CÉU ── */}
      <rect width="420" height="280" fill="url(#sc-sky)" />

      {/* ── LUA ── */}
      <circle cx="390" cy="40" r="36" fill="url(#sc-glow)" />
      <circle cx="390" cy="40" r="20" fill="url(#sc-moon)" opacity="0.92" />
      {/* cratera suave */}
      <circle cx="383" cy="36" r="3.5" fill="#e8c840" opacity="0.25" />
      <circle cx="394" cy="46" r="2.5" fill="#e8c840" opacity="0.2"  />

      {/* ── ESTRELAS ── */}
      {STARS.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#ffe8a0" opacity={s.op} />
      ))}

      {/* ── BALÕES ── */}
      {/* vermelho */}
      <ellipse cx="55" cy="78" rx="10" ry="13" fill="#e63946" opacity="0.88" />
      <ellipse cx="50" cy="72" rx="3"  ry="4"  fill="#fff" opacity="0.22" />
      <line x1="55" y1="91"  x2="52" y2="118" stroke="#c97b00" strokeWidth="0.8" />
      {/* amarelo */}
      <ellipse cx="158" cy="58" rx="9"  ry="12" fill="#e9c46a" opacity="0.88" />
      <ellipse cx="153" cy="52" rx="2.5" ry="3.5" fill="#fff" opacity="0.22" />
      <line x1="158" y1="70"  x2="155" y2="100" stroke="#c97b00" strokeWidth="0.8" />
      {/* verde-azulado */}
      <ellipse cx="278" cy="65" rx="10" ry="13" fill="#2a9d8f" opacity="0.82" />
      <ellipse cx="273" cy="59" rx="3"  ry="4"  fill="#fff" opacity="0.18" />
      <line x1="278" y1="78"  x2="275" y2="110" stroke="#c97b00" strokeWidth="0.8" />
      {/* laranja */}
      <ellipse cx="345" cy="52" rx="8"  ry="11" fill="#f4a261" opacity="0.85" />
      <ellipse cx="340" cy="47" rx="2.5" ry="3"  fill="#fff" opacity="0.22" />
      <line x1="345" y1="63"  x2="343" y2="90"  stroke="#c97b00" strokeWidth="0.8" />

      {/* ── IGREJA (silhueta, baixa opacidade) ── */}
      <g fill="#1a0800" opacity="0.22">
        {/* Torre esquerda */}
        <rect x="153" y="152" width="25" height="90" />
        {/* Pináculo esquerdo */}
        <polygon points="153,152 165,128 177,152" />
        {/* Cruzeta esquerda */}
        <rect x="163" y="118" width="3" height="14" />
        <rect x="157" y="125" width="15" height="3" />
        {/* Torre direita */}
        <rect x="242" y="152" width="25" height="90" />
        {/* Pináculo direito */}
        <polygon points="242,152 254,128 266,152" />
        {/* Cruzeta direita */}
        <rect x="252" y="118" width="3" height="14" />
        <rect x="246" y="125" width="15" height="3" />
        {/* Fachada central */}
        <rect x="168" y="165" width="84" height="17" />
        {/* Nave */}
        <rect x="175" y="178" width="70" height="64" />
        {/* Portal em arco */}
        <path d="M191,242 V218 Q205,207 219,218 V242 Z" />
        {/* Rosácea */}
        <circle cx="210" cy="187" r="9" />
      </g>

      {/* ── SEGUNDO CORDÃO — catenária Q(0,152 → 210,176 → 420,152) ── */}
      <path d="M0,152 Q210,176 420,152"
        stroke="#c97b00" strokeWidth="1.2" fill="none" />
      {FLAGS_MID.map(({x, c, y}, i) => (
        <g key={i}>
          <polygon points={`${x},${y} ${x+14},${y} ${x+7},${y+15}`} fill={c} />
          <animateTransform
            attributeName="transform" attributeType="XML" type="rotate"
            values={`-5 ${x+7} ${y}; 5 ${x+7} ${y}; -5 ${x+7} ${y}`}
            keyTimes="0;0.5;1" dur="1.8s" begin={MID_DELAYS[i]}
            repeatCount="indefinite" calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
        </g>
      ))}

      {/* ── BARRACA ESQUERDA ── */}
      <g>
        {/* Telhado */}
        <polygon points="0,200 55,167 112,200" fill="#7a2000" />
        <line x1="0" y1="200" x2="55" y2="167" stroke="#c97b00" strokeWidth="0.8" opacity="0.5" />
        <line x1="55" y1="167" x2="112" y2="200" stroke="#c97b00" strokeWidth="0.8" opacity="0.5" />
        {/* Paredes */}
        <rect x="3" y="200" width="106" height="44" fill="#3d1500" />
        {/* Ripas verticais */}
        <line x1="30" y1="200" x2="30" y2="244" stroke="#2a0e00" strokeWidth="2.2" />
        <line x1="57" y1="200" x2="57" y2="244" stroke="#2a0e00" strokeWidth="2.2" />
        <line x1="84" y1="200" x2="84" y2="244" stroke="#2a0e00" strokeWidth="2.2" />
        {/* Balcão */}
        <rect x="0" y="234" width="115" height="9" fill="#5c2000" />
      </g>

      {/* ── BARRACA DIREITA ── */}
      <g>
        {/* Telhado */}
        <polygon points="308,200 365,167 420,200" fill="#7a2000" />
        <line x1="308" y1="200" x2="365" y2="167" stroke="#c97b00" strokeWidth="0.8" opacity="0.5" />
        <line x1="365" y1="167" x2="420" y2="200" stroke="#c97b00" strokeWidth="0.8" opacity="0.5" />
        {/* Paredes */}
        <rect x="311" y="200" width="106" height="44" fill="#3d1500" />
        {/* Ripas */}
        <line x1="338" y1="200" x2="338" y2="244" stroke="#2a0e00" strokeWidth="2.2" />
        <line x1="365" y1="200" x2="365" y2="244" stroke="#2a0e00" strokeWidth="2.2" />
        <line x1="392" y1="200" x2="392" y2="244" stroke="#2a0e00" strokeWidth="2.2" />
        {/* Balcão */}
        <rect x="305" y="234" width="115" height="9" fill="#5c2000" />
      </g>

      {/* ── CHÃO ── */}
      <rect x="0" y="243" width="420" height="37" fill="url(#sc-ground)" />

      {/* ── DANÇARINOS ESQUERDA ── */}
      <g fill="#2d0a00">
        {/* Mulher */}
        <circle cx="122" cy="207" r="6" />
        <path d="M116,213 L107,248 L137,248 L128,213 Z" />
        <line x1="122" y1="215" x2="111" y2="207" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
        <line x1="122" y1="215" x2="133" y2="209" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
        {/* Homem */}
        <circle cx="142" cy="207" r="5.5" />
        <ellipse cx="142" cy="201.5" rx="9" ry="2.2" />
        <rect x="137.5" y="195" width="9" height="8" />
        <rect x="138" y="213" width="8" height="22" />
        <line x1="139" y1="235" x2="134" y2="248" stroke="#2d0a00" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="145" y1="235" x2="150" y2="248" stroke="#2d0a00" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="138" y1="217" x2="128" y2="211" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
        <line x1="146" y1="217" x2="156" y2="209" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ── DANÇARINOS DIREITA ── */}
      <g fill="#2d0a00">
        {/* Homem */}
        <circle cx="278" cy="207" r="5.5" />
        <ellipse cx="278" cy="201.5" rx="9" ry="2.2" />
        <rect x="273.5" y="195" width="9" height="8" />
        <rect x="274" y="213" width="8" height="22" />
        <line x1="275" y1="235" x2="270" y2="248" stroke="#2d0a00" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="281" y1="235" x2="286" y2="248" stroke="#2d0a00" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="274" y1="217" x2="264" y2="209" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
        <line x1="282" y1="217" x2="292" y2="211" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
        {/* Mulher */}
        <circle cx="298" cy="207" r="6" />
        <path d="M292,213 L283,248 L313,248 L304,213 Z" />
        <line x1="298" y1="215" x2="287" y2="209" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
        <line x1="298" y1="215" x2="309" y2="207" stroke="#2d0a00" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ── FOGUEIRA (centralizada, ampliada) ── */}
      <g transform="translate(146, 172) scale(1.35)" className="fogueira-svg">
        <line x1="20" y1="75" x2="50" y2="58" stroke="#7a3500" strokeWidth="5" strokeLinecap="round" />
        <line x1="80" y1="75" x2="50" y2="58" stroke="#7a3500" strokeWidth="5" strokeLinecap="round" />
        <line x1="10" y1="68" x2="50" y2="58" stroke="#5c2800" strokeWidth="4" strokeLinecap="round" />
        <line x1="90" y1="68" x2="50" y2="58" stroke="#5c2800" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="50" cy="72" rx="28" ry="6" fill="#ff4500" opacity="0.55" />
        {/* SMIL nativo — funciona no iOS Safari independente de Reduce Motion */}
        <ellipse cx="50" cy="52" rx="16" ry="22" fill="#ff6b00">
          <animate attributeName="opacity" values="0.9;0.65;0.85;0.9" dur="0.55s" repeatCount="indefinite" />
          <animate attributeName="ry" values="22;25;20;22" dur="0.55s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="42" cy="50" rx="10" ry="18" fill="#ff9f3f">
          <animate attributeName="opacity" values="0.8;0.5;0.75;0.8" dur="0.70s" repeatCount="indefinite" />
          <animate attributeName="ry" values="18;20;17;18" dur="0.70s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="58" cy="52" rx="9" ry="16" fill="#ffb347">
          <animate attributeName="opacity" values="0.7;0.45;0.68;0.7" dur="0.45s" repeatCount="indefinite" />
          <animate attributeName="ry" values="16;18;15;16" dur="0.45s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="50" cy="42" rx="8" ry="16" fill="#ffe08a">
          <animate attributeName="opacity" values="0.9;0.6;0.85;0.9" dur="0.62s" repeatCount="indefinite" />
          <animate attributeName="ry" values="16;19;15;16" dur="0.62s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="50" cy="36" rx="5" ry="12" fill="#ffffff">
          <animate attributeName="opacity" values="0.6;0.3;0.55;0.6" dur="0.38s" repeatCount="indefinite" />
          <animate attributeName="ry" values="12;14;11;12" dur="0.38s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* ── BANDEIRINHAS TOPO ── */}
      <path d="M0,12 Q52,28 105,14 Q157,0 210,14 Q263,28 315,14 Q368,0 420,14"
        stroke="#c97b00" strokeWidth="1.5" fill="none" />
      {FLAGS_TOP.map(({x, c}, i) => (
        <g key={i}>
          <polygon points={`${x},12 ${x+16},12 ${x+8},30`} fill={c} />
          <animateTransform
            attributeName="transform" attributeType="XML" type="rotate"
            values={`-5 ${x+8} 12; 5 ${x+8} 12; -5 ${x+8} 12`}
            keyTimes="0;0.5;1" dur="1.8s" begin={FLAG_DELAYS[i]}
            repeatCount="indefinite" calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
        </g>
      ))}

      {/* ── FADE INFERIOR — dissolve a cena no conteúdo abaixo ── */}
      <rect x="0" y="180" width="420" height="100" fill="url(#sc-fade)" />
    </svg>
  );
}
