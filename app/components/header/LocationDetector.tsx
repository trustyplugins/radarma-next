"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserCity } from "../core/data/redux/storage"; // adjust path

export default function LocationDetector() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function detectCity() {
      if (!("geolocation" in navigator)) {
        dispatch(setUserCity("chandigarh"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const geoRes = await fetch(`/api/reverse-geocode?lat=${latitude}&lng=${longitude}`);
            const geoData = await geoRes.json();
           // console.log(geoData);
            const cityName = geoData.city;

            const res = await fetch(`/api/nearest-city?city=${cityName}`);
            const { city_slug } = await res.json();

            dispatch(setUserCity(city_slug));
          } catch {
            dispatch(setUserCity("chandigarh"));
          }
        },
        () => {
          dispatch(setUserCity("chandigarh"));
        }
      );
    }

    const savedCity = localStorage.getItem("user_city");
    if (savedCity) {
      dispatch(setUserCity(savedCity));
    } else {
      detectCity();
    }
  }, [dispatch]);

  return null;
}
