// app/page.tsx
"use client";
import ChatKitPanel from "@/components/ChatKitPanel";

export default function Home() {
  return (
    <main style={{ height: "100vh", width: "100%" }}>
      <ChatKitPanel theme="light" />
    </main>
  );
}
