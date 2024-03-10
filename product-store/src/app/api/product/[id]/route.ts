import { NextResponse } from "next/server";

import { fetchPerfumeById } from "@/app/lib/data";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const productID = params.id;
  try {
    const res = await fetchPerfumeById(productID);

    return NextResponse.json(res);
  } catch {
    console.log("Error occured while fething the perfume");
  }
}
