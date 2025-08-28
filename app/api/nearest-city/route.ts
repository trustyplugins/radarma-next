import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

const aliases: Record<string, string> = {
  "sahibzada ajit singh nagar": "mohali",
  // add more mappings here
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let cityName = searchParams.get("city");

  if (!cityName) {
    return NextResponse.json({ city_slug: "chandigarh" });
  }

  cityName = cityName.toLowerCase().trim();

  // normalize aliases
  if (aliases[cityName]) {
    cityName = aliases[cityName];
  }

  // check Supabase cities table
  const { data: city, error } = await supabase
    .from("cities")
    .select("id, category_slug")
    .ilike("category", cityName)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error.message);
    return NextResponse.json({ city_slug: "chandigarh" }, { status: 500 });
  }

  return NextResponse.json({ city_slug: city?.category_slug || "chandigarh" });
}
