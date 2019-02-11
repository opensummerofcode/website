import React from 'react';
import ExternalLink from '../../ui/external-link';

class Partner extends React.Component {
  /*= ({ partner, small = "small-3" }) => {
  const { logo, name, url } = partner;
  let { path } = logo;
  const Logo = async () => {
    await import("../../../assets/img/" + path).then(img => console.log(img));
  };*/
  constructor(props) {
    super(props);
    this.state = { logo: null };
  }
  async componentDidMount() {
    let { path } = this.props.partner.logo;
    const logo = await import('../../../assets/img/' + path);
    this.setState({ logo: logo.default });
  }
  render() {
    const { partner, small = 'small-3', className = '' } = this.props;
    let classNames = ['medium-auto cell', small, className].join(' ');
    return (
      <div className={classNames}>
        <ExternalLink href={partner.url} className="vertical-align-container">
          <img src={this.state.logo} alt={partner.name} />
        </ExternalLink>
      </div>
    );
  }
}

export default Partner;
