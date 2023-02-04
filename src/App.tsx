import React from "react";
import "./App.css";
import { StoreProvider } from "./store/store";
import { ThemeProvider } from "./store/themeContext/themeContext";
import LandingOverlay from "./components/landingOverlay/landingOverlay";
import ModalContainer from "./containers/modalContainer/modalContainer";
import { ContractProvider } from "./store/contractContext/contractContext";
import { ViewportProvider } from "./store/themeContext/viewportContext";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./store/services/graph";
import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/ibm-plex-mono/300.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";

const App = () => {
  return (
    <div className="App">
      <StoreProvider>
        <ThemeProvider>
          <ContractProvider>
            <ViewportProvider>
              <ApolloProvider client={client}>
                <LandingOverlay />
                <ModalContainer />
              </ApolloProvider>
            </ViewportProvider>
          </ContractProvider>
        </ThemeProvider>
      </StoreProvider>
    </div>
  );
};

export default App;
