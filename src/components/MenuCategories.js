import React from "react";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import {
  Typography,
  Grid,
  ButtonBase,
} from "@mui/material";
import Loading from "@/components/Loading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const MenuCategories = ({ onChangeCategory }) => {
  const { data, error } = useSWR(`/rooms`, fetcher);
  if (error) return "An error has occurred.";
  if (!data) return <Loading />;

  const handleChangeCategory = (id) => {
    onChangeCategory(id);
  };

  return (
    <>
      <ButtonBase onClick={() => handleChangeCategory("Todos")}>
        <Typography variant="h6" color="primary" >Mostrar Todos</Typography>
      </ButtonBase>
      <Typography variant="h6" color="secondary">
        Categorías
      </Typography>
      <List>
        {data.data.map((room) => (
          <>
            <ListItem key={`menu-${room.name}`}>
              <ListItemText
                primary={room.name}
                sx={{ my: 0 }}
                secondary={
                  room.categories
                    ? room.categories.map((category) => (
                        <Grid key={`submenu-${category.name}`}>
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
          </>
        ))}
      </List>
    </>
  );
};

export default MenuCategories;
