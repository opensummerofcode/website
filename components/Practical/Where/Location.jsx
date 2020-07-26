import Leaflet from './Leaflet';

const Location = ({ name, address, coordinates }) => {
  return (
    <>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-6 large-5 cell">
          <p className="u-margin--t">
            <strong>{name}</strong>
            <br />
            {address}
          </p>
        </div>
        <div className="small-12 medium-6 large-7 cell">
          <Leaflet longitude={coordinates.lng} latitude={coordinates.lat} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Location;
