import React from "react";
import {
  Grid,
  CardActionArea,
  Card,
  Paper,
  CardMedia,
  Typography,
} from "@mui/material";
import imageUrl from "@/constants/imageUrl";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const CardCategories = ({ infoCategory }) => {
  return (
    <Paper elevation={16} sx={{ width: 200, borderRadius: "15px" }}>
      <Link href={`/productos/categoria/${infoCategory.id}`} passHref>
        <CardActionArea>
          <Card sx={{ width: 200, borderRadius: "15px" }}>
            <Grid container p={2}>
              <Grid item xs={12}>
                <CardMedia
                  component="img"
                  sx={{ width: 70 }}
                  image={imageUrl(infoCategory.url)}
                  alt={infoCategory.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  py={3}
                  variant="h5"
                  textAlign="left"
                  color="secondary"
                >
                  {infoCategory.name}
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign="right">
                <EastIcon fontSize="large" color="secondary" />
              </Grid>
            </Grid>
          </Card>
        </CardActionArea>
      </Link>
    </Paper>
  );
};

export default CardCategories;
