import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
function Account() {
  const { id } = useParams();
  const [accountData, setAccountData] = useState({});
  const getData = async () => {
    const { data } = await axios.get(`/api/accounts/${id}`);
    setAccountData(data);
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
          <TableBody>
            {Object.keys(accountData).map((name) => {
              return (
                <TableRow key={name}>
                  <TableCell>
                    {name === "id"
                      ? name.toUpperCase()
                      : name.charAt(0).toUpperCase() + name.slice(1)}
                  </TableCell>
                  <TableCell>{accountData[name]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Account;
