import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AdminHeaderbar from "./AdminHeaderbar";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";
import {
  getAllCategories,
  selectCategory,
} from "../categories/allCategoriesSlice";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../products/singleProductSlice";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const categories = useSelector(selectCategory);

  console.log("products:", products);
  console.log("categories:", categories);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToAdd, setProductToAdd] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setDeleteOpen(true);
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setEditOpen(true);
  };

  const handleAddClick = (product) => {
    setProductToAdd(product);
    setAddOpen(true);
  };

  const handleDeleteProduct = async () => {
    try {
      await dispatch(deleteProduct(productToDelete.id));
      setDeleteOpen(false);
      setProductToDelete(null);
      await dispatch(getAllProducts());
    } catch (err) {
      console.log("error removing product", err);
    }
  };

  const handleEditProduct = async () => {
    try {
      await dispatch(updateProduct(productToEdit));
      setEditOpen(false);
      setProductToEdit({ ...productToEdit });
      await dispatch(getAllProducts());
    } catch (err) {
      console.log("error updating product", err);
    }
  };

  const handleAddProduct = async () => {
    try {
      await dispatch(createProduct(productToAdd));
      setAddOpen(false);
      setProductToAdd({ ...productToAdd });
      await dispatch(getAllProducts());
    } catch (err) {
      console.log("error adding product", err);
    }
  };

  const backdropProps = {
    style: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
  };

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
          <Typography variant="h5">Products</Typography>
          <PrimaryButton
            variant="contained"
            size="medium"
            onClick={() => handleAddClick()}
            sx={{ cursor: "pointer", marginRight: 2 }}
          >
            <AddCircleRoundedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Add Product</Typography>
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
                  Product ID
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
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Inventory
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(products) &&
                products.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ borderBottomColor: "1px solid primary.main" }}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {product.id}
                    </TableCell>
                    <TableCell>
                      <EditRoundedIcon
                        onClick={() => handleEditClick(product)}
                        sx={{ cursor: "pointer", marginRight: 2 }}
                      />
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      (placeholder)
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <img
                        src={product.imageUrl}
                        alt={product.productName}
                        width="100px"
                      />
                    </TableCell>
                    <TableCell sx={{ textAlign: "left" }}>
                      {product.productName}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      USD{" "}
                      {product.productPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {Array.isArray(categories) &&
                        categories.map((category) =>
                          product.categoryId === category.id
                            ? category.name
                            : null
                        )}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <DeleteRoundedIcon
                        onClick={() => handleDeleteClick(product)}
                        sx={{ cursor: "pointer" }}
                      />
                    </TableCell>

                    {/* Dialog Management */}

                    {/* Delete Dialog */}
                    <Dialog
                      open={deleteOpen}
                      onClose={() => setDeleteOpen(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      BackdropProps={backdropProps}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are You Sure?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <b>
                            {productToDelete && productToDelete.productName}
                          </b>{" "}
                          will be removed
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            setDeleteOpen(false);
                            setProductToDelete(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          autoFocus
                          variant="contained"
                          size="small"
                          onClick={() => handleDeleteProduct()}
                        >
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>

                    {/* Edit Dialog */}

                    <Dialog
                      open={editOpen}
                      onClose={() => setEditOpen(false)}
                      aria-labelledby="form-dialog-title"
                      BackdropProps={backdropProps}
                    >
                      <DialogTitle id="form-dialog-title">
                        Edit User
                      </DialogTitle>
                      <DialogContent>
                        <TextField
                          required
                          fullWidth
                          autoFocus
                          margin="dense"
                          id="productName"
                          label="Product Name"
                          type="text"
                          value={productToEdit && productToEdit.productName}
                          onChange={(e) =>
                            setProductToEdit({
                              ...productToEdit,
                              productName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          required
                          fullWidth
                          margin="dense"
                          id="price"
                          label="Price"
                          type="number"
                          value={productToEdit && productToEdit.productPrice}
                          onChange={(e) =>
                            setProductToEdit({
                              ...productToEdit,
                              productPrice: e.target.value,
                            })
                          }
                        />
                        <TextField
                          required
                          fullWidth
                          margin="dense"
                          id="imageUrl"
                          label="Image URL"
                          type="url"
                          value={productToEdit && productToEdit.imageUrl}
                          onChange={(e) =>
                            setProductToEdit({
                              ...productToEdit,
                              imageUrl: e.target.value,
                            })
                          }
                        />
                        <FormControl component="fieldset"  sx={{ my: 2 }}>
                        <FormLabel
                          component="legend"
                          sx={{ color: "primary.main" }}
                        >
                          Product Category:
                        </FormLabel>
                          <RadioGroup
                            aria-label="category"
                            name="category"
                            value={productToEdit && productToEdit.categoryId}
                            onChange={(e) =>
                              setProductToEdit({
                                ...productToEdit,
                                categoryId: e.target.value,
                              })
                            }
                          >
                            {Array.isArray(categories) &&
                              categories.map((category) => (
                                <FormControlLabel
                                  key={category.id}
                                  value={category.id}
                                  control={<Radio />}
                                  label={category.name}
                                  sx={{ mx: 2}}
                                />
                              ))}
                          </RadioGroup>
                        </FormControl>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            setEditOpen(false);
                            setProductToEdit(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleEditProduct()}
                          autoFocus
                        >
                          Save Changes
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminProducts;
