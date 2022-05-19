import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import {
  Grid,
  CardActionArea,
  Card,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const CardAllProductos = () => {
    return (
        <Paper elevation={16} sx={{ width: 200, borderRadius: "15px" }}>
          <Link href={`/productos/todos`} passHref>
            <CardActionArea>
              <Card sx={{ width: 200, borderRadius: "15px" }}>
                <Grid container p={2}>
                  <Grid item xs={12}>
                   <HomeIcon size="large" color="secondary"/>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      py={3}
                      variant="h5"
                      textAlign="left"
                      color="secondary"
                    >
                      Todos los productos
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
}

export default CardAllProductos