import { useContext } from 'react';
import useSWR from 'swr';
import EditionContext from '../../../context/edition';
import fetch from '../../../util/fetch';

import Partner from './Partner';

const Partners = () => {
  const { current: currentEdition } = useContext(EditionContext);

  const renderPartnerSection = partners => {
    const $cells = partners.map(partner => (
      <div key={partner.id} className="small-4 medium-auto cell">
        <Partner partner={partner} />
      </div>
    ));
    return (
      <div key={JSON.stringify(partners)} className="small-12 cell">
        <div className="grid-x align-center align-middle">{$cells}</div>
      </div>
    );
  };
  console.log(currentEdition);

  const { data: partnersdata } = useSWR(`/editions/${currentEdition}/partners.json`, fetch);

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

export default Partners;
