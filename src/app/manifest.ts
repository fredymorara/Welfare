import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kikoba — Wealth is Collective",
    short_name: "Kikoba",
    description:
      "Digital Accounting & Management Platform for East African Chamas, Vikoba, and Savings Groups.",
    start_url: "/",
    display: "standalone",
    background_color: "#2E2118",
    theme_color: "#2E2118",
    icons: [
      {
        src: "/brand/icon-main.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/icon-main.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
