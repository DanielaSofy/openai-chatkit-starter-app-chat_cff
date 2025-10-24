// app/page.tsx
"use client";

import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main style={{ height: "100vh", width: "100%" }}>
      <Chat />
    </main>
  );
}
