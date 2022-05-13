import React from "react";

const ProductDetail = ({ listProducts }) => {

  return (
    <div>
      {listProducts.data.map((product) => (
        <div key={`list-${product.name}`}> {product.name}</div>
      ))}
    </div>
  );
};

export default ProductDetail;
export async function getStaticProps(context) {
  const { categoryId } = context.params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/room/${categoryId}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      listProducts: data,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rooms`);
  const data = await res.json();

  const listCategories = data.data;

  const paths = listCategories.map((category) => {
    return { params: { categoryId: "" + category.id } };
  });

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}
