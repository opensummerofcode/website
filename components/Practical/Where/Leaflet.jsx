import { Map as LeafletMap, TileLayer, CircleMarker } from 'react-leaflet-universal';

const Leaflet = ({ longitude, latitude }) => {
  const position = [latitude, longitude];

  return (
    <LeafletMap center={position} zoom={15} style={{ height: '250px' }}>
      <TileLayer
        url="https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png"
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a target="_blank" href="https://geo6.be/">GEO-6</a>'
      />
      <CircleMarker center={position} radius={3} />
    </LeafletMap>
  );
};

export default Leaflet;
