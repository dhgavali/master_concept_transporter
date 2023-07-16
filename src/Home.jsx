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

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "black",
          padding: 2,
          color: "#f2f2f2",
          textAlign: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <Typography variant="body1">
            {"Project Developed by : "}{" "}
            <a href="https://dhgavali.me" style={{TextDecoderation: "none", color:"grey"}}>Dhananjay Gavali</a>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Home;
