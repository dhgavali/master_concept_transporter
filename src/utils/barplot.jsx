import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Typography } from "@mui/material";

const Barchart = ({ data }) => {
  return (
    <div className="" >
      <Typography variant="h6" textAlign={"center"}>
        Bar Plot showing vehicle and shipments{" "}
      </Typography>
      <BarChart
        xAxis={[
          {
            id: "barCategories",

            data: [
              data[0].vehicleLabel,
              data[1].vehicleLabel,
              data[2].vehicleLabel,
              data[3].vehicleLabel,
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            color: "green",

            data: [
              data[0].visits.length,
              data[1].visits.length,
              data[2].visits.length,
              data[3].visits.length,
            ],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default Barchart;
