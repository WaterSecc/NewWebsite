"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// make Leaflet default marker work in Next.js
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const position: LatLngExpression = [36.8375, 10.1658]; // Manar I, Tunis
const gmapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Manar%20I%2C%2016%20University%20Street%2C%20Tunis%202092";

export default function MapSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT : copy */}
          <div className="max-w-xl lg:pl-4">
            <h2 className="ml-8 mb-1 text-4xl font-extrabold leading-tight text-black dark:text-white md:text-5xl">
              Where to find us.
            </h2>

            <p className="ml-8  text-lg leading-7 text-gray-700 dark:text-gray-300">
              You can visit our offices or get in touch for a demo session.
            </p>

            <div className="mt-6 space-y-1.5 text-2xl text-black dark:text-white">
              <div className="ml-8 font-bold">We are located in:</div>
              <div className="ml-8 ">Manar I, 16</div>
              <div className="ml-8 ">University Street</div>
              <div className="ml-8 ">Tunis 2092</div>
            </div>

            <a
              href={gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 mt-8 inline-flex items-center justify-center rounded-full border-2 border-bleujdid px-6 py-3 text-lg font-normal text-bleujdid transition-colors hover:bg-bleujdid hover:text-white"
            >
              Google Maps
            </a>
          </div>

          {/* RIGHT : map */}
          <div className="mr-18 h-[380px] rounded-3xl ring-1 ring-black/10 shadow-sm overflow-hidden md:h-[460px] lg:h-[520px]">
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  WaterSec HQ
                  <br />
                  16, University Street – Manar I, Tunis 2092
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
