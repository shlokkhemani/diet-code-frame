import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "🔴",
    },
  ],
  image: "https://diet-coke-frame.vercel.app/img-1.png",
  post_url: "https://diet-coke-frame.vercel.app/api/frame",
});

export const metadata: Metadata = {
  title: "trump-diet-coke",
  description: "trump-diet-coke",
  openGraph: {
    title: "trump-diet-coke",
    description: "trump-diet-coke",
    images: ["https://diet-coke-frame.vercel.app/img-1.png"],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div>
      <h1>trump-diet-coke</h1>
      <img src="https://diet-coke-frame.vercel.app/img-2.png" />
    </div>
  );
}
