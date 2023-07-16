import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VanHeader from "@mui/icons-material/LocalShippingOutlined";

const VanHeader = ({ data }) => {
  return (
    <Box sx={{ display: "flex", cursor: "pointer", justifyContent: "center" }}>
      {data.map((data, key) => {
        return (
          <Card
            key={key}
            sx={{
              maxWidth: 300,
              margin: 5,
              background: "#008DD5",
              color: "white",
            }}
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
            {/* <CardActions>
            <Button size="small">Card Button</Button>
          </CardActions> */}
          </Card>
        );
      })}
    </Box>
  );
};

export default VanHeader;
