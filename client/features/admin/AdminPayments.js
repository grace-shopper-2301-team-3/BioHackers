import React from "react";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const AdminPayments = () => {
  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Payments</Typography>
          <PrimaryButton variant="contained" size="medium">
            <AddCardRoundedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Add Payment</Typography>
          </PrimaryButton>
        </Container>

        <Container style={{ height: 400, width: "100%", height: "100%" }}>
          <Table sx={{ backgroundColor: "#200040", my: "30px" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Payment Type
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Description
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Provider
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ borderBottomColor: "1px solid primary.main" }}
              >
                <TableCell sx={{ textAlign: "left" }}>
                (placeholder)
                </TableCell>
                <TableCell>
                  <EditRoundedIcon />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  (placeholder)
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                (placeholder)
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <DeleteRoundedIcon />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminPayments;
