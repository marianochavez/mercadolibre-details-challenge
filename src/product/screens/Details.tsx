import React from "react";

import {Product} from "../types";
import mock from "../mock";
import {ProductDetails} from "../../components/product/ProductDetails";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return <ProductDetails product={product} />;
};

export default DetailsScreen;
