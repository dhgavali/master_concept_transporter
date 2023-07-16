import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

const SimpleTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const visits = data[3]?.visits || [];
  const columns = ["shipmentLabel", "address", "VisitTime"];

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = visits.filter((item) =>
    Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  const formatTime = (time) => {
    const formattedTime = new Date(time).toLocaleTimeString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return formattedTime;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          margin="normal"
          style={{ background: "white", borderRadius: "10px" }}
        />
      </div>
      {/* <Typography variant="body1">{data[0].vehicleid}</Typography> */}
      <TableContainer component={Paper} style={{ marginBottom: 20 }}>
        <Typography
          variant="h6"
          component="div"
          align="center"
          textAlign={"center"}
          style={{ padding: 5 }}
        >
          {data[0].vehicleLabel} Data{" "}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={index}>
                  {/* {columns.map((column) => (
                    <TableCell key={column}>{item[column]}</TableCell>
                  ))} */}
                  {columns.map((column, columnIndex) => (
                    <TableCell key={columnIndex}>
                      {columnIndex === 2
                        ? formatTime(item[column])
                        : item[column]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default SimpleTable;
