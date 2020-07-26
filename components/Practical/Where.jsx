import useSWR from 'swr';
import fetch from '../../util/fetch';
import Location from './Where/Location';

const Where = () => {
  const renderLocation = (location) => (
    <Location
      name={location.name}
      address={location.address}
      coordinates={location.coordinates}
    />
  );

  const { data: locations } = useSWR(`/locations.json`, fetch);
  if (!locations) return <></>;
  const $locations = locations.map(l => renderLocation(l));

  return (
    <>
      {$locations}

      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-10 medium-6 large-5 cell">
          <p>
            We compensate all your public transports costs. However, you are free to come by car or
            book yourself a fancy hotel, but we don&apos;t reimburse those things.
          </p>
        </div>
      </div>
    </>
  );
};

export default Where;
