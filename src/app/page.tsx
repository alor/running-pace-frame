import { fetchMetadata } from "frames.js/next";
import HomePage from "@/app/home";
import {appURL} from "@/app/utils";

export async function generateMetadata() {
  return {
    title: "Miles O'Meter",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
        new URL(
            "/frames",
            appURL()
        )
    ),
  };
}

export default function Page() {
  return <HomePage/>
}