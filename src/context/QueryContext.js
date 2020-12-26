import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import PropTypes from "prop-types";

const queryClient = new QueryClient();

export const QueryClientAppProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </>
    </QueryClientProvider>
  );
};

QueryClientAppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
