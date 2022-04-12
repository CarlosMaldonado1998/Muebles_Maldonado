import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListIcon from "@mui/icons-material/List";
import WorkIcon from "@mui/icons-material/Work";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BusinessIcon from "@mui/icons-material/Business";
import Routes from "@/constants/routes";
import Link from "next/link";

const itemsNavigation = [
  {
    text: "Inicio",
    to: Routes.HOME,
    icon: <HomeIcon color="primary" />,
  },
  {
    text: "Catálogo",
    to: Routes.PRODUCTS,
    icon: <ListIcon color="primary" />,
  },
  {
    text: "Envíos",
    to: Routes.SHIPMENT,
    icon: <LocalShippingIcon color="primary" />,
  },
  {
    text: "Nosotros",
    to: Routes.ABOUT,
    icon: <BusinessIcon color="primary" />,
  },
  {
    text: "Servicios",
    to: Routes.SERVICES,
    icon: <WorkIcon color="primary" />,
  },
  {
    text: "Contáctanos",
    to: Routes.CONTACT,
    icon: <ContactSupportIcon color="primary" />,
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NavItems = ({ onHandleDrawerClose }) => {
  const theme = useTheme();

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={onHandleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon color="primary" />
          ) : (
            <ChevronRightIcon color="primary" />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {itemsNavigation.map((text, index) => (
          <Link href={text.to} key={`nav-item-${text.text}`}>
            <ListItem button onClick={onHandleDrawerClose}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText
                primary={text.text}
                primaryTypographyProps={{
                  color: "primary",
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default NavItems;
