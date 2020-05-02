
import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Components/card/Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card/>, div);
});

export default Card;



