interface Props {
  name: string;
}

export default function SuccessScreen({ name }: Props) {
  return (
    <div className="text-center py-4 success-anim">
      <div className="text-4xl mb-3 success-firework">🎉</div>
      <h2
        className="font-dancing text-[#ffe08a] text-3xl leading-tight mb-1"
        style={{ textShadow: "0 0 16px rgba(255,200,80,0.5)" }}
      >
        Confirmado, {name}!
      </h2>
      <p className="font-dancing text-[#ff9f3f] text-xl">
        Nos vemos no arraial!
      </p>
    </div>
  );
}
