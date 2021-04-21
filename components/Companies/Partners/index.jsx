import PropTypes from 'prop-types';
import { useContext } from 'react';
import useSWR from 'swr';
import MetaContext from '../../../context/meta';
import fetch from '../../../util/fetch';

import Partner from './Partner';

const Partners = ({ partners }) => {
  const { activeEdition } = useContext(MetaContext);

  const renderPartnerSection = (p) => {
    const $cells = p.map((partner) => (
      <div key={partner.id} className="small-4 medium-auto cell">
        <Partner partner={partner} />
      </div>
    ));
    return (
      <div key={JSON.stringify(p)} className="small-12 cell">
        <div className="grid-x align-center align-middle">{$cells}</div>
      </div>
    );
  };

  const partnersdata = partners || useSWR(`/editions/${activeEdition}/partners.json`, fetch).data;

  if (!partnersdata) return <></>;

  let count = 0;
  const partnerChunks = partnersdata.reduce((collection, partner) => {
    if (collection[count] && collection[count].length === 6) count += 1;
    if (!collection[count]) collection[count] = [];
    collection[count].push(partner);
    return collection;
  }, []);

  const $partners = partnerChunks.map(renderPartnerSection);
  return <div className="grid-x c-partners align-center">{$partners}</div>;
};

Partners.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Partners;
