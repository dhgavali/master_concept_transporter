import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import VanHeader from "@mui/icons-material/LocalShippingOutlined";
import "../index.css";

const VanHeader = ({ data, onCardClick }) => {
  // console.log()
  const handleCardClick = (cardIndex) => {
    onCardClick(cardIndex - 1);
  };
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        flexFlow: "wrap",
      }}
    >
      {data.map((data, key) => {
        return (
          <Card
            className="mycard"
            key={key}
            sx={{
              maxWidth: 300,
              margin: 5,
              background: "#008DD5",
              color: "white",
            }}
            onClick={() => handleCardClick(data.vehicleid)}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "Center",
                flexFlow: "column",
                textAlign: "Center",
              }}
            >
              <Typography>
                <LocalShippingOutlinedIcon style={{ fontSize: 50 }} />
              </Typography>
              <Typography variant="h5" component="div">
                {data.vehicleLabel.toLocaleUpperCase()}{" "}
              </Typography>

              <Typography variant="body1">
                {"Total Shipments : " + data.visits.length}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default VanHeader;
