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
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const AdminOrders = () => {
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
          <Typography variant="h5">Orders</Typography>
          <PrimaryButton variant="contained" size="medium">
            <AddShoppingCartRoundedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Add Order</Typography>
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
                  Order ID
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
                  (Placeholder)
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

export default AdminOrders;
