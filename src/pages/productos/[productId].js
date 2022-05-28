import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import ImagesProduct from "@/components/Products/ImagesProduct";
import InfoProduct from "@/components/Products/InfoProduct";
import ColorsProduct from "@/components/Products/ColorsProduct";
import DetailProduct from "@/components/Products/DetailProduct";
import PriceProduct from "@/components/Products/PriceProduct";
import InfoAdditional from "@/components/Products/InfoAdditional";

const ProductDetail = ({ product }) => {
  console.log("datapro", product);
  return (
    <>
      <Container>
        <Grid py={2} container>
          <Grid item xs={12} md={6}>
            <ImagesProduct listImages={product.images}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoProduct dataProduct={product} />
            <ColorsProduct dataColors={product.colors} />
            <PriceProduct listPrices={product.prices}/>
          </Grid>
        </Grid>
        <Grid py={2}>
          <DetailProduct dataProduct={product} />
        </Grid>
        <InfoAdditional />
      </Container>
    </>
  );
};

export default ProductDetail;
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${params.productId}`
    );
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        product: data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/all`
    );
    const data = await res.json();

    const listProducts = data.data;

    const paths = listProducts.map((product) => {
      return { params: { productId: "" + product.id } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}
