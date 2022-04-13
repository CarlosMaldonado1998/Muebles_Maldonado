import React from "react";

import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import styled from "@emotion/styled";


const FloatingIcon = styled(Fab)(({ theme }) => ({
    margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
    "&:hover ": {
       
        background: "green",
    transform: "scale(1,1.2)",
  },
}));

const Whats = styled(WhatsAppIcon)(({ theme }) => ({
  color: "#fff",
}));
const phone = "593959504842";
const WhatsappButton = ({ message }) => {
  return (
    <>
      <Link
        href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
        passHref
      >
        <FloatingIcon  color="green" target="_blank">
          <Whats  />
        </FloatingIcon>
      </Link>
    </>
  );
};

export default WhatsappButton;
