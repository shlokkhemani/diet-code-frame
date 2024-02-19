import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "🔴",
    },
  ],
  image: "https://zizzamia.xyz/park-1.png",
  post_url: "https://zizzamia.xyz/api/frame",
});

export const metadata: Metadata = {
  title: "trump-diet-coke",
  description: "trump-diet-coke",
  openGraph: {
    title: "trump-diet-coke",
    description: "trump-diet-coke",
    images: ["https://zizzamia.xyz/park-1.png"],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div>
      <h1>trump-diet-coke</h1>
      <img src="https://zizzamia.xyz/park-1.png" />
    </div>
  );
}
