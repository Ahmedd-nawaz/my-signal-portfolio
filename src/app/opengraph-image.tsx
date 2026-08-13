import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: "#FF5A1F" }} />
          <div style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: "#FF5A1F" }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: "#FF5A1F" }} />
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#F5F5F5", letterSpacing: -2 }}>
          AHMED NAWAZ
        </div>
        <div style={{ fontSize: 30, color: "#8C8C8C", marginTop: 20 }}>
          I design and build AI products, alone, end to end.
        </div>
      </div>
    ),
    { ...size }
  );
}