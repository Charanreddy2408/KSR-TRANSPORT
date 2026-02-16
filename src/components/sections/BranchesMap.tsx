"use client"

import dynamic from "next/dynamic"
import { BRANCH_LOCATIONS } from "./Branches"
import "leaflet/dist/leaflet.css"

const INDIA_CENTER: [number, number] = [20.5, 78.96]
const INDIA_BOUNDS: [[number, number], [number, number]] = [
  [6.75, 68.1],
  [35.5, 97.4],
]

const MapInner = dynamic(
  async () => {
    const L = await import("leaflet")
    const { MapContainer, TileLayer, Marker, Popup, Tooltip } = await import("react-leaflet")

    const redPinIcon = L.divIcon({
      className: "red-pin-icon",
      html: `<span style="
        display: block;
        width: 24px;
        height: 24px;
        background: #dc2626;
        border: 2px solid #fff;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      "></span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    })

    return function MapWithMarkers() {
      return (
        <MapContainer
          center={INDIA_CENTER}
          zoom={4}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom
          maxBounds={INDIA_BOUNDS}
          maxBoundsViscosity={1}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {BRANCH_LOCATIONS.map((branch) => (
            <Marker
              key={branch.name}
              position={[branch.lat, branch.lng]}
              icon={redPinIcon}
            >
              <Tooltip
                direction="top"
                offset={[0, -12]}
                opacity={1}
                className="branch-tooltip-card"
              >
                <div className="branch-tooltip-inner">
                  <span className="branch-tooltip-label">KSR Transport</span>
                  <span className="branch-tooltip-title">Branch location</span>
                  <span className="branch-tooltip-name">{branch.name}</span>
                  <span className="branch-tooltip-state">{branch.state}</span>
                </div>
              </Tooltip>
              <Popup>KSR Transport branch location – {branch.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )
    }
  },
  { ssr: false }
)

export function BranchesMap() {
  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 h-[280px] sm:h-[360px] md:h-[420px] min-h-[240px] w-full min-w-0">
      <MapInner />
    </div>
  )
}
