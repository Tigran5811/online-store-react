import React from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation();
    const searchParams = parse(location.search, { ignoreQueryPrefix: true });
    return (
      <Component
        searchParams={searchParams}
        pathname={location.pathname}
        {...props}
      />
    );
  };

  return Wrapper;
};
