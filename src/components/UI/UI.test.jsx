import React from 'react';
import renderer from 'react-test-renderer';
import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ExternalLink href="https://2018.summerofcode.be/">osoc2018</ExternalLink>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
