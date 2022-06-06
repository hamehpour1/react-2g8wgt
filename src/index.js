import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <StrictMode>
        <QueryClientProvider client={queryClient}>

    <App />
    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>

  </StrictMode>
);
