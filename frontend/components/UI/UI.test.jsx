import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExternalLink from './ExternalLink';

configure({ adapter: new Adapter() });
describe('ExternalLink', () => {
  const externalLink = <ExternalLink href="https://2018.summerofcode.be/">osoc2018</ExternalLink>;
  const ELShallow = shallow(externalLink);
  it('renders correctly', () => {
    const tree = renderer.create(externalLink).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders as <a>', () => {
    expect(ELShallow.is('a')).toBeTruthy();
  });

  it('checks the value of href', () => {
    expect(ELShallow.prop('href')).toEqual('https://2018.summerofcode.be/');
  });

  it('has target _blank', () => {
    expect(ELShallow.prop('target')).toEqual('_blank');
  });

  it('has rel equal to noopener noreferrer', () => {
    expect(ELShallow.prop('rel')).toEqual('noopener noreferrer');
  });

  it('renders children', () => {
    expect(ELShallow.text()).toEqual('osoc2018');
  });
});
