import {Box, Container, Divider, Icon, Link, Stack, Text} from "@chakra-ui/react";
import React, {createContext, FC} from "react";
import {TbMinusVertical} from "react-icons/tb";

import {Product} from "../../product/types";

import {ProductLayout} from "./ProductLayout";

interface Props {
  product: Product;
}

export const productContext = createContext<Product>({} as Product);

export const ProductDetails: FC<Props> = ({product}) => {
  return (
    <productContext.Provider value={product}>
      <Stack>
        <Box paddingY={3}>
          <Container maxWidth="container">
            <Stack fontSize="sm">
              <Text fontWeight="bold">
                Tambien puede interesarte: <span style={{fontWeight: "normal"}}>squishmallows</span>
              </Text>
              <Stack direction="row" justifyContent="space-between" paddingY={2}>
                <Stack alignItems="center" direction="row">
                  <Text>Volver al listado</Text>
                  <Icon as={TbMinusVertical} />
                  <Text as={Link}>Juegos y Juguetes</Text>
                  <Text>{`>`}</Text>
                  <Text as={Link}>Peluches</Text>
                </Stack>
                <Stack alignItems="center" direction="row" justifyContent="space-between">
                  <Text as={Link}>Compartir</Text>
                  <Icon as={TbMinusVertical} />
                  <Text as={Link}>Vender uno igual</Text>
                </Stack>
              </Stack>
            </Stack>
            <ProductLayout />
          </Container>
        </Box>
      </Stack>
    </productContext.Provider>
  );
};
