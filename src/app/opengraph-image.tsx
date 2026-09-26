import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Kikoba — Wealth is Collective | Simple Chama & Savings Group Software";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read official Kikoba wordmark as base64 for reliable standalone rendering
  const logoPath = path.join(process.cwd(), "public", "brand", "name-white.png");
  let logoDataUri = "";
  try {
    const logoBuffer = fs.readFileSync(logoPath);
    logoDataUri = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch {
    logoDataUri = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          backgroundColor: "#2E2118",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(200, 162, 122, 0.28) 0%, transparent 55%), radial-gradient(circle at 15% 85%, rgba(111, 78, 55, 0.35) 0%, transparent 60%)",
          color: "#F8F4EE",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header: Official Wordmark & Regional Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid rgba(111, 78, 55, 0.6)",
            paddingBottom: "28px",
          }}
        >
          {logoDataUri ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoDataUri}
              alt="Kikoba"
              height={44}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span
              style={{
                fontSize: "36px",
                fontWeight: 900,
                letterSpacing: "4px",
                color: "#F8F4EE",
              }}
            >
              KIKOBA
            </span>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(200, 162, 122, 0.4)",
              backgroundColor: "rgba(35, 24, 17, 0.7)",
              color: "#C8A27A",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            EAST AFRICA
          </div>
        </div>

        {/* Center: Hero Value Proposition */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              color: "#F8F4EE",
            }}
          >
            Wealth is Collective.
          </div>
          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.4,
              color: "#E7E8EA",
              opacity: 0.9,
              fontWeight: 400,
            }}
          >
            Simple, transparent digital accounting and management for chamas,
            vikoba, and table banking groups.
          </div>
        </div>

        {/* Bottom Feature Badges & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(111, 78, 55, 0.6)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ fontSize: "14px", color: "#C8A27A", fontWeight: 600, letterSpacing: "1px" }}>
              • AUTOMATED LEDGERS
            </span>
            <span style={{ fontSize: "14px", color: "#C8A27A", fontWeight: 600, letterSpacing: "1px" }}>
              • LOAN TRACKING
            </span>
            <span style={{ fontSize: "14px", color: "#C8A27A", fontWeight: 600, letterSpacing: "1px" }}>
              • DISPUTE-FREE AUDITS
            </span>
          </div>

          <span
            style={{
              fontSize: "15px",
              color: "rgba(231, 232, 234, 0.7)",
              fontWeight: 600,
              letterSpacing: "1.5px",
            }}
          >
            KIKOBA.CO.KE
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
