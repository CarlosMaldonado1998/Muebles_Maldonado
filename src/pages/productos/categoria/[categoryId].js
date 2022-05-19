import React, {useState} from "react";
import WhatsappButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import { Container, Grid } from "@mui/material";

import TableProducts from "@/components/Products/TableProducts";
import MenuCategoryId from "@/components/MenuCategoryId";

const CategoryDetail = ({ listProducts, categoryId }) => {

  const [filterCategory, setFilterCategory] = useState("Todos");
  const [dataFilter, setDataFilter] = useState([]);
  const handleFilterCategory = (id) => {
    setFilterCategory(id);
    handleFilterData(id);
  };
  console.log("list", listProducts)
  const handleFilterData = (id) => {
    const newData = listProducts.data
      .filter((product) => product.category_id == id)
      .map((product) => product);
    setDataFilter(newData);
  };

  return (
    <>
      <Header title={"Categorías"} />
      <Container sx={{ minHeight: "80vh" }}>
        <Grid pt={4} container>
          <Grid item xs={2} md={2}>
            <MenuCategoryId idCategory={categoryId} onChangeCategory={handleFilterCategory} />
          </Grid>
          <Grid item xs={10} md={10}>
            {filterCategory !== "Todos" ? (
              <TableProducts infoProducts={dataFilter} />
            ) : (
              <TableProducts infoProducts={listProducts.data} />
            )}
          </Grid>
        </Grid>
      </Container>
      <WhatsappButton message={"Hola! "} />
    </>
  );
};

export default CategoryDetail;
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
      categoryId,
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
