import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { AppContextProvider } from "SRC/context/AppContext";
import { QueryClientAppProvider } from "SRC/context/QueryContext";

export const Providers = ({ children }) => {
  return (
    <Suspense fallback="loading">
      <AppContextProvider>
        <QueryClientAppProvider>{children}</QueryClientAppProvider>
      </AppContextProvider>
    </Suspense>
  );
};

Providers.propTypes = {
  children: PropTypes.node
};
