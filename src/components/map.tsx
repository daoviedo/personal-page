import { MapContainer, Marker, TileLayer } from 'react-leaflet';

function Map() {
  return (
    <MapContainer
      style={{
        height: '100%',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
      }}
      center={[29.75328, -95.36425]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[29.75328, -95.36425]}></Marker>
    </MapContainer>
  );
}

export default Map;
