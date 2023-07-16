import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography } from "@mui/material";

const BasicPie = ({ data }) => {
  return (
    <div className="">
      <Typography variant="h6">
        {" "}
        Pie chart showing vehicle and shipments{" "}
      </Typography>
      <PieChart
        desc="Pie chart showing vehicle and shipments"
        series={[
          {
            data: [
              {
                id: 0,
                value: data[0].visits.length,
                label: data[0].vehicleLabel,
              },
              {
                id: 1,
                value: data[1].visits.length,
                label: data[1].vehicleLabel,
              },
              {
                id: 2,
                value: data[2].visits.length,
                label: data[2].vehicleLabel,
              },
              {
                id: 3,
                value: data[3].visits.length,
                label: data[3].vehicleLabel,
              },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default BasicPie;
