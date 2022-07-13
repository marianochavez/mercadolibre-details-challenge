import React, {FC} from "react";
import {
  Box,
  Stack,
  Container,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

export const Footer: FC = () => {
  return (
    <Stack>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem border={0}>
            <Container maxWidth={200}>
              <AccordionButton
                _expanded={{bg: "gray.200", color: "gray.700"}}
                _focus={{border: "none"}}
                background="white"
                color="gray.500"
                justifyContent="center"
              >
                <Stack direction="row">
                  <Text fontSize="sm">Más información</Text>
                  <AccordionIcon />
                </Stack>
              </AccordionButton>
            </Container>
            <AccordionPanel background="gray.200" borderColor="gray.300" p={10}>
              <Container maxWidth="container.lg">
                <Stack
                  color="gray.500"
                  direction="row"
                  fontSize="sm"
                  justifyContent="space-between"
                >
                  <Stack direction="column">
                    <Text color="black" fontWeight="bold" pb={2}>
                      Acerca de
                    </Text>
                    <Text>Mercado Libre</Text>
                    <Text>Investor relations</Text>
                    <Text>Tendencias</Text>
                    <Text>Sustentabilidad</Text>
                  </Stack>
                  <Stack direction="column">
                    <Text color="black" fontWeight="bold" pb={2}>
                      Otros sitios
                    </Text>
                    <Text>Developers</Text>
                    <Text>Mercado Pago</Text>
                    <Text>Mercado Shops</Text>
                    <Text>Mercado Envíos</Text>
                    <Text>Mercado Ads</Text>
                    <Text>Mercado Libre Ideas</Text>
                  </Stack>
                  <Stack direction="column">
                    <Text color="black" fontWeight="bold" pb={2}>
                      Ayuda
                    </Text>
                    <Text>Comprar</Text>
                    <Text>Vender</Text>
                    <Text>Resolución de problemas</Text>
                    <Text>Centro de seguridad</Text>
                  </Stack>
                  <Stack direction="column">
                    <Text color="black" fontWeight="bold" pb={2}>
                      Redes sociales
                    </Text>
                    <Text>Twitter</Text>
                    <Text>Facebook</Text>
                    <Text>Instagram</Text>
                    <Text>YouTube</Text>
                  </Stack>
                  <Stack direction="column">
                    <Text color="black" fontWeight="bold" pb={2}>
                      Mi cuenta
                    </Text>
                    <Text>Resumen</Text>
                    <Text>Favoritos</Text>
                    <Text>Vender</Text>
                  </Stack>
                  <Stack direction="column">
                    <Text color="black" fontWeight="bold" pb={2}>
                      Mercado Puntos
                    </Text>
                    <Text>Nivel 6</Text>
                    <Text>Disney+</Text>
                    <Text>Star+</Text>
                    <Text>HBO MAX</Text>
                    <Text>Paramount+</Text>
                  </Stack>
                </Stack>
              </Container>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box background="white" boxShadow="sm" paddingY={3} style={{marginTop: "0"}}>
        <Container maxWidth="container.xl">
          <Stack
            alignItems="center"
            direction="row"
            fontSize="smaller"
            justifyContent="space-between"
          >
            <Text>Trabajá con nosotros</Text>
            <Text>Términos y condiciones</Text>
            <Text>Cómo cuidamos tu privacidad</Text>
            <Text>Accesibilidad</Text>
            <Text>Información al usuario financiero</Text>
            <Text>Ayuda</Text>
            <Text>Defensa al consumidor</Text>
            <Text>Información sobre seguros</Text>
          </Stack>
          <Text color="gray.500" fontSize="12px">
            Copyright © Test
          </Text>
          <Text color="gray.500" fontSize="12px">
            Av. Caseros 3039 Piso 2, CP 1264, Parque Patricios, CABA
          </Text>
        </Container>
      </Box>
    </Stack>
  );
};
