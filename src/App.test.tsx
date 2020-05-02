import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

it('renders Without Crashing', () => {
  const div= document.createElement('div');
  ReactDOM.render(<App/>,div)
  
});
 