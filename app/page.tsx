"use client";
import { useState } from "react";
import Invite from "@/components/Invite";
import RSVPForm from "@/components/RSVPForm";
import SuccessScreen from "@/components/SuccessScreen";

export default function Home() {
  const [confirmed, setConfirmed] = useState<string | null>(null);

  return (
    <div className="invite-card">
      <Invite />
      <div className="px-5 pb-5 cascade-in" style={{ animationDelay: "0.6s" }}>
        {confirmed ? (
          <SuccessScreen name={confirmed} />
        ) : (
          <RSVPForm onSuccess={setConfirmed} />
        )}
      </div>
    </div>
  );
}
