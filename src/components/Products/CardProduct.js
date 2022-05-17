import React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  Paper,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import imageUrl from "@/constants/imageUrl";
import Link from "next/link";

const CardProduct = ({ infoProduct }) => {
 
  return (
    <Paper>
      <Link href={`/productos/${infoProduct.id}`} passHref>
        <CardActionArea>
          <Card>
            <CardHeader
              title={infoProduct.name}
              titleTypographyProps={{ color: "primary", variant: "h6" }}
              // subheader={infoProduct.category_id}
            />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid>
                <CardMedia
                  component="img"
                  sx={{ width: 180 }}
                  image={imageUrl(infoProduct.images[0].url)}
                  alt={infoProduct.name}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CardContent>
                  <Typography
                    textAlign={"center"}
                    variant="h5"
                    color="secondary"
                  >
                    $ {infoProduct.prices[0].value}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </CardActionArea>
      </Link>
    </Paper>
  );
};

export default CardProduct;
