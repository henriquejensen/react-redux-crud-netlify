import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "components/GlobalStyles";
import Container from "components/Container";
import Routes from "routes";
import store from "store";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyles />
        <Routes />
      </Container>
    </Provider>
  );
}
