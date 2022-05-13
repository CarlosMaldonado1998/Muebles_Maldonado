import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CardActionArea, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";
import imageUrl from "@/constants/imageUrl";
import { Button, Paper } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const CardProduct = ({ infoProduct }) => {
  const theme = useTheme();

  return (
    <Paper>
      <Link href={`/productos/${infoProduct.id}`} passHref>
        <CardActionArea>
          <Card>
            <CardHeader
              title={infoProduct.name}
              titleTypographyProps={{ color: "primary", variant: "h6" }}
              // subheader="September 14, 2016"
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
                  sx={{ width: 180, padding: "10px" }}
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
