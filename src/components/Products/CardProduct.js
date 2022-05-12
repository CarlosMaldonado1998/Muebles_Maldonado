import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, CardActionArea } from "@mui/material";
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
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
            >
              <CardContent>
                <Typography variant="h6" color="primary">
                  {infoProduct.name}
                </Typography>
                <Typography color="secondary">
                  {infoProduct.material}
                </Typography>
                <Typography py={4}>$ {infoProduct.prices[0].value}</Typography>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ChevronRightIcon />}
                >
                  Ver
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 180, padding: "10px" }}
                image={imageUrl(infoProduct.images[0].url)}
                alt={infoProduct.name}
              />
            </Grid>
          </Card>
        </CardActionArea>
      </Link>
    </Paper>
  );
};

export default CardProduct;
