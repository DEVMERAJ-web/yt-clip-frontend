"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <main style={{ padding: 40 }}>
      <h1>YouTube Clip Cutter</h1>

      <input
        placeholder="YouTube link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Start (00:00:10)"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="End (00:01:00)"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />

      <br /><br />

      <button onClick={() => alert("Working!")}>
        Generate Clip
      </button>
    </main>
  );
}
