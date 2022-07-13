import React, {FC} from "react";
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch, AiOutlineGift} from "react-icons/ai";
import {IoLocationOutline} from "react-icons/io5";
import {BsCart2} from "react-icons/bs";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.png";

export const Navabar: FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={2}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Link to="/">
                  <Image objectFit="contain" src={logo} />
                </Link>
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input
                    paddingX={2}
                    placeholder="Buscar productos, marcas y más..."
                    variant="unstyled"
                  />
                  <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={3}>
                <Icon as={AiOutlineGift} height={8} width={8} />
                <Text fontSize="lg" fontWeight="400">
                  Envíos gratis en 24 hs a partir de $4.000
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={IoLocationOutline} height={7} width={7} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Buenos Aires 1876
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={5}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row" fontSize="sm" spacing={6}>
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={BsCart2} height={5} width={5} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};
