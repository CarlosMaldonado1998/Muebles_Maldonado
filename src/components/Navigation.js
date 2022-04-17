import React from "react";
import Routes from "@/constants/routes";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  Grid,
  Drawer,
  Link as MuiLink,
  ButtonBase,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import NavItems from "./NavItems";
import LOGO from "../../public/Recurso1.png";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const drawerWidth = 240;

const itemsNavigation = [
  {
    text: "Inicio",
    to: Routes.HOME,
  },
  {
    text: "Catálogo",
    to: Routes.PRODUCTS,
  },
  {
    text: "Galería",
    to: Routes.GALLERY,
  },
  {
    text: "Servicios",
    to: Routes.CUSTOMERSERVICE,
  },
  {
    text: "Contáctanos",
    to: Routes.CONTACT,
  },
];

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ElevationScroll(props) {
  const { children, window } = props;

  return React.cloneElement(children, {
    elevation: 4,
    style: {
      backgroundColor: "rgba(232, 191, 86, 0.95)",
      color: "rgba(232, 191, 86, 0.95)",
    },
  });
}

const Navigation = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" className={styles.navbar}>
          <Container maxWidth="xl">
            <Toolbar>
              {/**Cuando esta mediano o pequeño desaparece el boton de abrir **/}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon color={"secondary"} />
                </IconButton>
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Link href={Routes.HOME} passHref>
                      <ButtonBase>
                        <Image src={LOGO} width={95} height={75} />
                      </ButtonBase>
                    </Link>
                  </Box>
                </Grid>
                <Grid>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      alignItems: "right",
                    }}
                  >
                    {itemsNavigation.map((page) => (
                      <Link href={page.to} passHref key={`nav-${page.text}`}>
                        <ButtonBase>
                          <Typography mr={3} color="secondary" variant="h5">
                            {page.text}
                          </Typography>
                        </ButtonBase>
                      </Link>
                    ))}
                  </Box>
                </Grid>
              </Grid>

              <Grid>
                {/**Cuando esta pequeño Titulo**/}
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <Image src={LOGO} width={100} height={75} />
                </Box>
              </Grid>
              {/**Cuando esta grande Titulo**/}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <NavItems onHandleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
};

export default Navigation;
