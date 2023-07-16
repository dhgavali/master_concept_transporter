import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicTable from "./utils/datatable";
import FilterTable from "./utils/filterTable";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import data from "./data.json";

const Home = () => {
  return (
    <div
      className="main-wrapper"
      style={{
        background: "#FBFFB9",
        padding: "0",
        margin: "0",
      }}
    >
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          background: "black",
          color: "white",
          padding: "20px",
          fontWeight: "500",
        }}
        component="div"
      >
        Welcome to Shipments Portal
      </Typography>

      <Box
        sx={{ display: "flex", cursor: "pointer", justifyContent: "center" }}
      >
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          <FilterTable data={data} />
        </div>
      </Box>
    </div>
  );
};

export default Home;
