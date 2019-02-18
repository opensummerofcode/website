import React from 'react';
import renderer from 'react-test-renderer';
import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ExternalLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
