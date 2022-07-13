import React from "react";
import {Link, Text} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Text>{`<HomeScreen />`}</Text>
      <br />
      <Link as={RouterLink} to="/productId">
        Ver página de detalle de producto
      </Link>
    </div>
  );
};

export default HomeScreen;
