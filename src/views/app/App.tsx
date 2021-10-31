import { QueryClient, QueryClientProvider } from "react-query";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Routes from "./Routes";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider theme={createTheme()}>
        <StyledThemeProvider theme={createTheme()}>
          <Routes />
        </StyledThemeProvider>
      </MUIThemeProvider>
    </QueryClientProvider>
  );
}
