import React, { Fragment } from 'react';

//error 404 page not found when user somehow navigates to a route or page that does not exist
const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" />
        404 Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
