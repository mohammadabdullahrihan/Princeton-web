import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ProjectInMap = () => {
  const locations = [
    { position: [23.8103, 90.4125], name: "Dhaka" }, // ঢাকা
    { position: [22.3569, 91.7832], name: "Chittagong" }, // চট্টগ্রাম
    { position: [24.3636, 88.6241], name: "Rajshahi" }, // রাজশাহী
  ];

  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, i) => {
        <Marker key={i} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>;
      })}
    </MapContainer>
  );
};

export default ProjectInMap;
