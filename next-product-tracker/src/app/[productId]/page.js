import { Fragment } from "react";

import fs from "fs/promises";
import path from "path";

async function getData(productId) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return product;
}

export default async function ProductDetailPage({ params: { productId } }) {
  const product = await getData(productId);

  return (
    <Fragment>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </Fragment>
  );
}
