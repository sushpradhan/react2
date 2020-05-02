import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Components/footer/Footer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer/>, div);
});
export default Footer;