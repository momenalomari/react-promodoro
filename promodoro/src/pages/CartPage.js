import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  Button,
  Stack,
  Divider,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  Badge,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CartPage() {
  const theme = useTheme();
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const currency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const handleChangeQty = (id, next) => {
    if (next < 1) return;
    updateQuantity(id, next);
  };

  if (!cart.length) {
    return (
      <Box sx={{ p: { xs: 3, md: 6 }, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <img
            src="https://cdn.dribbble.com/users/63269/screenshots/6193997/empty-cart.png"
            alt="Empty cart"
            style={{ maxWidth: 360, width: '60%', margin: '0 auto' }}
          />

          <Typography variant="h5" sx={{ mt: 3, fontWeight: 700 }}>
            Your cart is empty
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            Browse our products and add the perfect upgrades to your Mercedes.
          </Typography>

          <Button component={Link} to="/product" variant="contained" size="large" sx={{ px: 4 }}>
            Browse Products
          </Button>
        </motion.div>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 800 }}>
        Shopping Cart
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
              >
                <Card
                  sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, borderRadius: 2 }}
                  elevation={3}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{ width: 140, height: 100, objectFit: 'cover', borderRadius: 1 }}
                  />

                  <CardContent sx={{ flexGrow: 1, p: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {item.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {currency.format(item.price)}
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center" sx={{ mt: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <IconButton
                          aria-label={`decrease ${item.name}`}
                          size="small"
                          onClick={() => handleChangeQty(item.id, item.quantity - 1)}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>

                        <TextField
                          aria-label={`quantity for ${item.name}`}
                          size="small"
                          value={item.quantity}
                          onChange={(e) => handleChangeQty(item.id, parseInt(e.target.value || 1, 10))}
                          inputProps={{ min: 1, style: { textAlign: 'center' } }}
                          sx={{ width: 82 }}
                        />

                        <IconButton
                          aria-label={`increase ${item.name}`}
                          size="small"
                          onClick={() => handleChangeQty(item.id, item.quantity + 1)}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Stack>

                      <IconButton
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`remove ${item.name}`}
                        color="error"
                        sx={{ ml: { sm: 2 }, alignSelf: { xs: 'flex-start', sm: 'center' } }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{ p: 3, borderRadius: 2, position: { md: 'sticky' }, top: { md: 96 } }}>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Order Summary
                </Typography>
                <Badge badgeContent={cart.reduce((s, it) => s + it.quantity, 0)} color="primary">
                  <ShoppingCartCheckoutIcon />
                </Badge>
              </Stack>

              <Divider />

              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography sx={{ fontWeight: 700 }}>{currency.format(subtotal)}</Typography>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Shipping and taxes calculated at checkout.
              </Typography>

              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<ShoppingCartCheckoutIcon />}
                component={Link}
                to="/checkout"
                sx={{ bgcolor: '#e50914', '&:hover': { bgcolor: '#b70a10' } }}
              >
                Proceed to Checkout
              </Button>

              <Button fullWidth variant="outlined" color="inherit" onClick={() => setConfirmOpen(true)}>
                Clear Cart
              </Button>

              <Button
                component={Link}
                to="/product"
                fullWidth
                variant="text"
                sx={{ textTransform: 'none' }}
              >
                Continue Shopping
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Clear Cart</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to remove all items from your cart?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button
            color="error"
            onClick={() => {
              clearCart();
              setConfirmOpen(false);
            }}
          >
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
