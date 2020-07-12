import React, { Fragment } from 'react';
import spinner from './spinner.gif';

//Component to import the spinner gif that is used for loading

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);
