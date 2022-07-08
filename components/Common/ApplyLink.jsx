import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../../util/fetch';
import ExternalLink from '../UI/ExternalLink';

const geoJsonFetcher = () => fetcher('http://www.geoplugin.net/json.gp');

export const applicationTallyURL = 'https://tally.so/r/wL8Rvw';

// Generates an "Apply" link based on the location of the visitor.
// This geolocation info is requested client-side
//
// If the visitor is in a EEA/Switzerland country, this link redirects them to
// the Tally application form.

// If they are outside these countries, it redirects them to a warning page about
// oSoc not being able to support visas ("non-EU warning").
//
// Reason: non-EEA/Swiss students can not work with a "student job contract" in Belgium:
//
// https://werk.belgie.be/nl/themas/arbeidsovereenkomsten/bijzondere-arbeidsovereenkomsten/overeenkomst-voor-tewerkstelling-van
// > "De buitenlandse studenten afkomstig uit een land van de Europese Economische Ruimte
// >  of uit Zwitserland hebben dezelfde rechten en verplichtingen als de Belgische studenten,
// >  zelfs als ze geen onderwijs volgen in België of hier niet verblijven."
const ApplyLink = () => {
  const { data, error } = useSWR('/geo-info.json', geoJsonFetcher);
  // TODO: set timeout

  const buttonContent = (
    <>
      Apply as a student
      <span className="button__info">Live in Belgium!</span>
    </>
  );

  const validCountryButton = (
    <ExternalLink href={applicationTallyURL} target="_blank" className="button">
      {buttonContent}
    </ExternalLink>
  );

  const invalidCountryButton = (
    <Link href="/non-eu-warning">
      <a className="button">{buttonContent}</a>
    </Link>
  );

  // If there is an error, or if the location data is still loading,
  // then never redirect to the warning page.
  if (error || !data) {
    return validCountryButton;
  }

  if (
    data.geoplugin_continentCode != null &&
    data.geoplugin_countryName != null &&
    !(
      // EEA are the EU countries + Iceland, Liechtenstein & Norway.
      (
        data.geoplugin_inEU === 1 ||
        /Iceland|Liechtenstein|Norway|Switzerland/.test(data.geoplugin_countryName)
      )
    )
  ) {
    return invalidCountryButton;
  }

  return validCountryButton;
};

export default ApplyLink;
