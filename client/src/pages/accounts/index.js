import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  TableContainer,
  Box,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [columns, setColumns] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("/api/accounts");
    let finalData = data.map((item) => {
      delete item.updatedOn;
      return item;
    });
    setAccounts(finalData);
    const tableHeaderKeys = data.map((ele) => {
      return Object.keys(ele).map((item) => {
        if (item === "createdOn") {
          item = "Created On";
          return item;
        }
        return item.charAt(0).toUpperCase() + item.slice(1);
      });
    })[0];
    tableHeaderKeys.push("Action");
    setTableHeaders(tableHeaderKeys);
    const cols = data.map((item) => Object.keys(item))[0];
    setColumns(cols);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        margin: "0px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: "1000px",
      }}
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, idx) => {
                return <TableCell key={idx}>{header}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => {
              return (
                <TableRow key={account.id}>
                  {columns.map((col) => {
                    return <TableCell>{account[col]}</TableCell>;
                  })}
                  <TableCell>
                    <Link component={RouterLink} to={`/accounts/${account.id}`}>
                      View
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Accounts;
