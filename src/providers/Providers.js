import React, { Suspense } from "react";
import PropTypes from "prop-types";

export const Providers = ({ children }) => {
  return <Suspense fallback="loading">{children}</Suspense>;
};

Providers.propTypes = {
  children: PropTypes.node
};
