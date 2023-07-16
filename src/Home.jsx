import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FilterTable from "./utils/filterTable";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SimpleChart from "./utils/barplot";
import PieChart from "./utils/piechart";
import Vanheader from "./utils/vanHeader";
import data from "./data.json";
import VanHeader from "./utils/vanHeader";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleCardClick = (newIndex) => {
    console.log(newIndex);
    setIndex(newIndex);
  };
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
      <VanHeader data={data} onCardClick={handleCardClick} />

      {/* <Box
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
                <Typography variant="body1">
                  {"current index: " + index}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box> */}
      {/* Bar Plot Component */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SimpleChart data={data} />
      </Box>

      {/* Pie Chart Component */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <PieChart data={data} />
      </Box>

      {/* Datatable Compoenet */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          <FilterTable counter={index} />
        </div>
      </Box>
    </div>
  );
};

export default Home;
