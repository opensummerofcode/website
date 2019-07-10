import partnersdata from '../../../assets/data/partners.json';
import Partner from './Partner';

const Partners = () => {
  const renderPartnerSection = partners => {
    const $cells = partners.map(partner => (
      <div key={partner.id} className="small-4 medium-auto cell">
        <Partner partner={partner} />
      </div>
    ));
    return (
      <div className="small-12 cell">
        <div className="grid-x align-center align-middle">{$cells}</div>
      </div>
    );
  };

  let count = 0;
  const partnerChunks = partnersdata.reduce((collection, partner) => {
    if (collection[count] && collection[count].length === 6) count += 1;
    if (!collection[count]) collection[count] = [];
    collection[count].push(partner);
    return collection;
  }, []);

  const $partners = partnerChunks.map(renderPartnerSection);
  console.log($partners);
  return <div className="grid-x c-partners align-center">{$partners}</div>;
};

export default Partners;
