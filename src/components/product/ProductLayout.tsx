import {Box, Container, Stack, Text} from "@chakra-ui/react";
import React, {FC} from "react";

import {Images} from "./Images";

export const ProductLayout: FC = () => {
  return (
    <Stack>
      <Box backgroundColor="white" boxShadow="md" paddingY={3}>
        <Container maxW="container">
          <Stack direction="row">
            <Images />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};
