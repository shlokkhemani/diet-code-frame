import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

  return new NextResponse(`<!DOCTYPE html><html><head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://diet-coke-frame.vercel.app/img-2.png" />
  <meta property="fc:frame:button:1" content="Mint" />
  <meta property="fc:frame:button:1:action" content="mint" />
  <meta property="fc:frame:button:1:target" content="eip155:7777777:0xd19b6313bc28722b9e5eaa4c1c41714e14dbce5b:3" />
</head></html>`);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
// <meta property="fc:frame:post_url" content="https://diet-coke-frame.vercel.app/api/frame" />
