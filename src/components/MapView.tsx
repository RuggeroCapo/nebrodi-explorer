import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MapView = () => {
  const nebrodiCenter: [number, number] = [37.95, 14.60]; // Adjusted center to fit all points

  const nebrodiBounds: L.LatLngBoundsExpression = [
    [37.70, 14.30], // SouthWest
    [38.15, 15.00]  // NorthEast
  ];

  const events = [
    { title: "Sagra del Suino Nero dei Nebrodi", position: [37.850, 14.717] as [number, number] },
    { title: "Jazz Festival Costa Tirrenica", position: [38.150, 14.733] as [number, number] },
    { title: "Festa della Provola dei Nebrodi", position: [38.017, 14.600] as [number, number] },
    { title: "Festival dell'Arte Contemporanea", position: [37.933, 14.367] as [number, number] },
  ];

  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] rounded-2xl overflow-hidden shadow-sm relative">
      <MapContainer
        center={nebrodiCenter}
        zoom={10}
        minZoom={9}
        maxZoom={13}
        maxBounds={nebrodiBounds}
        maxBoundsViscosity={1.0}
        dragging={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        style={{ height: '100%', width: '100%' }}
        className="z-0 pointer-events-none"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event, index) => (
          <Marker key={index} position={event.position}>
            <Popup>
              {event.title}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Overlay with demo text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none h-full">
        <div className="h-full w-full flex items-center justify-center text-4xl font-bold text-white/10">
          demo demo demo demo demo demo demo demo demo demo
        </div>
      </div>
    </div>
  );
};