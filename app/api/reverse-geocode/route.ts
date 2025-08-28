// app/api/reverse-geocode/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json({ error: "Missing lat/lng" }, { status: 400 });
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY_SERVER}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK") {
    console.error("Google Geocoding error:", data);
    return NextResponse.json({ error: data.status, raw: data }, { status: 500 });
  }

  // Extract city
  let city = "Chandigarh";
  const result = data.results[0];
  if (result) {
    const component = result.address_components.find((c: any) =>
      c.types.includes("locality")
    );
    if (component) {
      city = component.long_name;
    } else {
      const district = result.address_components.find((c: any) =>
        c.types.includes("administrative_area_level_2")
      );
      if (district) city = district.long_name;
    }
  }

  return NextResponse.json({ city });
}
