import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
 changeQuantityAsync,
 fetchCart,
 removeFromCartAsync,
} from "./cartSlice";
import biohackersTheme from "../../app/theme";
import {
 ThemeProvider,
 Box,
 Container,
 Typography,
 Button,
} from "@mui/material";
import {
 MainContainer,
 SecondaryButton,
 TertiaryButton,
} from "../style/StyleGuide";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Link } from "react-router-dom";


const CartItem = ({ cartItem }) => {
 const dispatch = useDispatch();


 const handleIncrementQuantity = async (productId) => {
   try {
     console.log("in handle increment quantity");
     await dispatch(
       changeQuantityAsync({ product: { id: productId }, numToChangeBy: 1 })
     );
     dispatch(fetchCart());
   } catch (err) {
     console.log("error incrementing quantity in cartitem", err);
   }
 };


 const handleDecrementQuantity = async (productId) => {
   try {
     // console.log('productid:' , productId)
     // if (item.quantity === 1) {
     //   await dispatch(removeFromCartAsync(productId));
     // } else {
     await dispatch(
       changeQuantityAsync({ product: { id: productId }, numToChangeBy: -1 })
     );


     // }
     dispatch(fetchCart());
   } catch (err) {
     console.log("error decrementing  quantity in cartitem", err);
   }
 };


 const handleRemove = async (id) => {
   try {
     // await dispatch(changeQuantityAsync({ product: { id: productId }, newQuantity: 0 }))
     await dispatch(removeFromCartAsync(id));
     dispatch(fetchCart());
   } catch (err) {
     console.log("error removing item from cart", err);
   }
 };


 return (
   <ThemeProvider theme={biohackersTheme}>
     <MainContainer>
       <Container
         sx={{
           display: "flex",
           alignItems: "center",
           border: "1px solid #7F00FF",
           py: 2,
           my: 1,
           mr: 0,
           height: "100%",


           position: "relative",
         }}
       >
         <Box className="cartItemContainer">
           <img
             src={cartItem.product.imageUrl}
             alt={cartItem.product.productName}
             className="cartItemImage"
             height="150px"
             width="150px"
           />
         </Box>
         <Container>
           <Link to={`/products/${cartItem.productId}`}><Typography variant="h5" color="primary.main">{cartItem.product.productName}</Typography></Link>
           <Box
             className="cartItemDetails"
             sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
             }}
           >
             <Box sx={{ display: "flex", alignItems: "center" }}>
               <TertiaryButton
                 variant="contained"
                 size="small"
                 width="25px"
                 sx={{ p: 0.1 }}
                 className="decrementQuantityButton"
                 onClick={() => handleDecrementQuantity(cartItem.productId)}
               >
                 <RemoveRoundedIcon />
               </TertiaryButton>
               <span style={{ display: "inline-block" }}>
                 <Typography variant="h6" color="primary.light" sx={{ mx: 2, px: 1 }}>
                   {cartItem.quantity}
                 </Typography>
               </span>
               <TertiaryButton
                 variant="contained"
                 size="small"
                 sx={{ p: 0.1 }}
                 className="incrementQuantityButton"
                 onClick={() => handleIncrementQuantity(cartItem.productId)}
               >
                 <AddRoundedIcon />
               </TertiaryButton>
             </Box>
             <Typography variant="body1" color="primary.light">
               {cartItem.product.productPrice.toLocaleString("en-US", {
                 style: "currency",
                 currency: "USD",
               })}
             </Typography>
           </Box>


           <SecondaryButton
             variant="contained"
             className="removeFromCartButton"
             onClick={() => handleRemove(cartItem.id)}
             sx={{
               position: "absolute",
               top: 0,
               right: 0,
               my: 3,
               mr: 5
             }}
           >
             <DeleteRoundedIcon />
           </SecondaryButton>
         </Container>
       </Container>
     </MainContainer>
   </ThemeProvider>
 );
};


export default CartItem;