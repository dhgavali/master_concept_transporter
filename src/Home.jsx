import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicTable from "./utils/datatable";
import FilterTable from "./utils/filterTable";
import data from "./data.json";

const Home = () => {
  return (
    <div
      className="main-wrapper"
      style={{
        background: "#FBFFB9",
        padding: "0",
        margin: "0",
        height: "100vh",
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
              <CardContent>
                <Typography variant="h5" component="div">
                  {" "}
                  {data.vehicleLabel.toLocaleUpperCase()}{" "}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body1">
                  <br />
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
