import {Box, Container, Image, Stack} from "@chakra-ui/react";
import React, {useContext, useState} from "react";

import {productContext} from "./ProductDetails";

export const Images = () => {
  const {pictures} = useContext(productContext);
  const [currentImage, setCurrentImage] = useState(pictures[0].url);

  const handleImageClick = (url: string) => {
    setCurrentImage(url);
  };

  return (
    <Container maxWidth="container">
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          {pictures.map((picture, index) => (
            <Box
              key={index}
              border="1px"
              borderColor={`${picture.url === currentImage ? "blue.400" : "gray.300"}`}
              borderRadius="5px"
              cursor="pointer"
              outline={`${picture.url === currentImage ? "auto" : "none"}`}
              outlineColor="blue.400"
              p="2px"
            >
              <Image
                h={10}
                objectFit="contain"
                src={picture.url}
                w={10}
                onClick={handleImageClick.bind(null, picture.url)}
              />
            </Box>
          ))}
        </Stack>
        <Stack alignItems="center" flex={1} justifyContent="center">
          <Image objectFit="fill" src={currentImage} />
        </Stack>
      </Stack>
    </Container>
  );
};
