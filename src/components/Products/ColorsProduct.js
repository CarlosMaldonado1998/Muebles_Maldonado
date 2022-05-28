import React from "react";
import {
  Grid,
  Typography,
  Paper,
  CardMedia,
  Avatar,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import imageUrl from "@/constants/imageUrl";
const ColorsProduct = ({ dataColors }) => {
  console.log("dataColors", dataColors);
  return (
    <>
      <Grid>
        {dataColors.length > 0 ? (
          <>
            <Typography color="secondary" sx={{ fontWeight: 600 }}>
              Colores:
            </Typography>
            <Grid container>
              {dataColors.map((color) => (
                <Grid m={1} textAlign="center">
                  <Tooltip title={color.name}>
                    <Avatar
                      alt="Remy Sharp"
                      src={imageUrl(color.url)}
                      sx={{ width: 65, height: 65 }}
                    />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default ColorsProduct;
