import { fetchMetadata } from "frames.js/next";
import HomePage from "@/app/home";

export async function generateMetadata() {
  return {
    title: "Miles O'Meter",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
        new URL(
            "/frames",
            process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}`
                : "http://localhost:3000"
        )
    ),
  };
}

export default function Page() {
  return <HomePage/>
}