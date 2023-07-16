import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { PieChart } from "@mui/x-charts/PieChart";

import data from "./data.json";

const Home = () => {
  // JSON.parse(data);
  // const mydata = JSON.parse(data);

  return (
    <div
      className="main-wrapper"
      style={{
        // background: "#FBFFB9",
        padding: "0",
        margin: "0",
        height: "100vh",
      }}
    >
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
      <Typography
        variant="h5"
        style={{ textAlign: "center", padding: "20px", fontWeight: "500" }}
        component="div"
      >
        Welcome to Shipments Portal
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
    </div>
  );
};

export default Home;
