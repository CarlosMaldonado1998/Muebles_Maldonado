import React from "react";

const ProductDetail = ({ product }) => {

  return (
    <div>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.material}</p>
      <p>{product.warranty}</p>
      <p>{product.delivery_time}</p>
      <p>{product.room_id}</p>
      <p>{product.category_id}</p>
    </div>
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
