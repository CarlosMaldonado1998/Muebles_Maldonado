import React from "react";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { Typography, Grid, ButtonBase } from "@mui/material";
import Loading from "@/components/Loading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const MenuCategoryId = ({ onChangeCategory, idCategory }) => {
  const { data, error } = useSWR(`/rooms/${idCategory}`, fetcher);
  if (error) return "An error has occurred.";
  if (!data) return <Loading />;

  const handleChangeCategory = (id) => {
    onChangeCategory(id);
  };

  return (
    <>
      <Typography variant="h5" color="secondary">
        Categoría
      </Typography>
      <ButtonBase onClick={() => handleChangeCategory("Todos")}>
        <Typography variant="h5" color="primary">
          {data.name}
        </Typography>
      </ButtonBase>

      <List>
        <ListItem>
          <ListItemText
            sx={{ my: 0 }}
            secondary={
              data.categories
                ? data.categories.map((category) => (
                    <Grid key={`categorySubmenu-${category.name}`}>
                      <ButtonBase
                        onClick={() => handleChangeCategory(category.id)}
                      >
                        <Typography>{category.name}</Typography>
                      </ButtonBase>
                    </Grid>
                  ))
                : null
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default MenuCategoryId;
