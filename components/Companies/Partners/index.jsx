import partnersdata from '../../../assets/data/partners.json';
import Partner from './Partner';

const Partners = () => {
  const $partners = partnersdata.map(partner => <Partner partner={partner} key={partner.id} />);
  return (
    <div className="grid-x c-partners">
      <div className="small-12 cell">
        <div className="grid-x small-up-4 medium-up-5 large-up-8">{$partners}</div>
      </div>
    </div>
  );
};

export default Partners;
