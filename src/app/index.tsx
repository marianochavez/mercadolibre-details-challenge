import {Container} from "@chakra-ui/react";
import React from "react";

import {Footer, Navabar} from "../components/ui";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Navabar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
      <Footer />
    </>
  );
};

export default App;
