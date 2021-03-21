import React from 'react';
import ReactDom from 'react-dom';
import { MultiStepForm } from './MultiStepForm/MultiStepForm';

const App = () => (
  <>
    <MultiStepForm />
  </>
);

ReactDom.render(<App />, document.getElementById('root'));
