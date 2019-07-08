import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Students from '.';

describe('Students', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Students />
      </Router>,
      div
    );
  });

  afterAll(() => {
    return ReactDOM.unmountComponentAtNode(document.getElementsByTagName('div'));
  });
});
