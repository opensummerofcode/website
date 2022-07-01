import PropTypes from 'prop-types';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet-universal';

const Leaflet = ({ longitude, latitude }) => {
  const position = [latitude, longitude];

  return (
    <LeafletMap center={position} zoom={15} style={{ height: '250px' }}>
      <TileLayer
        url="https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png"
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a target="_blank" href="https://geo6.be/">GEO-6</a>'
      />
      <Marker position={position} />
    </LeafletMap>
  );
};

Leaflet.propTypes = {
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
};

export default Leaflet;
