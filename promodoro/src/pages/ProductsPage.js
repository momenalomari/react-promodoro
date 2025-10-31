import React, { useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Badge,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Pagination,
  useTheme,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../componant/style/product.css';

// -- Sample product list (id's fixed & unique)
const PRODUCTS = [
  { id: 1, name: 'AMG Sport Alloy Wheel', price: 1200, image: 'https://i.pinimg.com/1200x/56/f1/d9/56f1d9d81d5d6fec123a89b259773a77.jpg', category: 'Wheels' },
  { id: 2, name: 'AMG Carbon Steering Wheel', price: 899, image: 'https://i.pinimg.com/736x/77/ce/a6/77cea6563976f3ebb82066b16492c9a7.jpg', category: 'Interior' },
  { id: 3, name: 'AMG Carbon Spoiler', price: 1097, image: 'https://i.pinimg.com/1200x/b0/2e/5c/b02e5c2d92ae7d59c1851f5b7df76be3.jpg', category: 'Exterior' },
  { id: 4, name: 'Mercedes-AMG Pedals', price: 659, image: 'https://i.pinimg.com/1200x/b4/0e/d1/b40ed121cbda92f4e4a4574e45774eda.jpg', category: 'Interior' },
  { id: 5, name: 'AMG Sport Bumper Diffuser E63', price: 1450, image: 'https://i.pinimg.com/736x/4f/26/f1/4f26f19c25daaf96d252891d6615e4a8.jpg', category: 'Exterior' },
  { id: 6, name: 'AMG Light Kit', price: 2499, image: 'https://i.pinimg.com/736x/5a/d6/0f/5ad60feae884e7d09eef36e70c7de38f.jpg', category: 'Lighting' },
  { id: 7, name: 'Interior Hidden Lighting', price: 559, image: 'https://i.pinimg.com/1200x/79/f7/bd/79f7bd449c8c582c10a1ca54239ffd5a.jpg', category: 'Lighting' },
  { id: 8, name: 'AMG Light Logo', price: 1499, image: 'https://i.pinimg.com/1200x/37/44/d3/3744d357ec94b1552f45f81b44153fae.jpg', category: 'Exterior' },
  { id: 9, name: 'AMG GT Body Kit', price: 8699, image: 'https://i.pinimg.com/736x/c6/6b/6c/c66b6c9c903b0bb6d10a3d54059014e4.jpg', category: 'Exterior' },
  { id: 10, name: 'Mercedes-AMG Watch for S-Class', price: 2000, image: 'https://i.pinimg.com/1200x/43/47/1d/43471d73e6087265e8e233db2525939b.jpg', category: 'Lifestyle' },
  { id: 11, name: 'AMG E63S Logo Black Edition', price: 799, image: 'https://i.pinimg.com/1200x/c6/9f/0f/c69f0ff97c022e82e067ab4f35035eef.jpg', category: 'Badges' },
  { id: 12, name: 'AMG Sport Brake Calipers', price: 299, image: 'https://i.pinimg.com/1200x/27/b4/57/27b457f9a8a34cd4eb508c27e7dfa942.jpg', category: 'Brakes' },
  { id: 13, name: 'Perfume for Mercedes', price: 649, image: 'https://i.pinimg.com/1200x/e0/9c/d3/e09cd382d9ee2cd10cd7bd6be9cddeb4.jpg', category: 'Lifestyle' },
  { id: 14, name: 'Mercedes Medal', price: 649, image: 'https://i.pinimg.com/736x/fa/1f/0c/fa1f0cc769a584947615c068587b0eb5.jpg', category: 'Lifestyle' },
  { id: 15, name: 'Mercedes Glasses', price: 649, image: 'https://i.pinimg.com/736x/76/41/3a/76413aa8acc25e4facecbf171028b040.jpg', category: 'Lifestyle' },
];

export default function ProductsPage() {
  const theme = useTheme();
  const { addToCart, totalItems } = useCart();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('popular');
  const [page, setPage] = useState(1);
  const [openPreview, setOpenPreview] = useState(null);

  const categories = useMemo(() => ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))], []);

  // Filtering + sorting + pagination
  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(p => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' ? true : p.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sort === 'low') list.sort((a, b) => a.price - b.price);
    else if (sort === 'high') list.sort((a, b) => b.price - a.price);
    else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [query, category, sort]);

  const perPage = 9;
  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  const currency = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>AMG Modification Parts</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            size="small"
            placeholder="Search parts, e.g. spoiler"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            sx={{ minWidth: 200 }}
          />

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Category</InputLabel>
            <Select value={category} label="Category" onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
              {categories.map((c) => (
                <MenuItem key={c} value={c}>{c}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Sort</InputLabel>
            <Select value={sort} label="Sort" onChange={(e) => setSort(e.target.value)}>
              <MenuItem value="popular">Recommended</MenuItem>
              <MenuItem value="low">Price: Low → High</MenuItem>
              <MenuItem value="high">Price: High → Low</MenuItem>
              <MenuItem value="name">Name</MenuItem>
            </Select>
          </FormControl>

          <IconButton component={Link} to="/cart" aria-label="cart">
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {paged.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <motion.div whileHover={{ translateY: -6 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }} elevation={4}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={p.image}
                    alt={p.name}
                    loading="lazy"
                    sx={{ height: { xs: 160, md: 200 }, objectFit: 'cover' }}
                  />

                  <Chip label={p.category} size="small" sx={{ position: 'absolute', top: 12, left: 12, bgcolor: 'rgba(0,0,0,0.6)', color: '#fff' }} />
                </Box>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }} noWrap title={p.name}>{p.name}</Typography>

                  <Typography variant="subtitle2" color="text.secondary">{currency.format(p.price)}</Typography>

                  <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => addToCart(p)}
                      sx={{ bgcolor: '#e50914', '&:hover': { bgcolor: '#b70a10' }, textTransform: 'none', fontWeight: 700 }}
                    >
                      Add to Cart
                    </Button>

                    <IconButton onClick={() => setOpenPreview(p)} aria-label={`preview ${p.name}`}>
                      <VisibilityIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination count={pageCount} page={page} onChange={(_, val) => setPage(val)} color="primary" />
      </Box>

      {/* Quick preview dialog */}
      <Dialog open={!!openPreview} onClose={() => setOpenPreview(null)} maxWidth="sm" fullWidth>
        {openPreview && (
          <>
            <DialogTitle>{openPreview.name}</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img src={openPreview.image} alt={openPreview.name} style={{ width: '100%', borderRadius: 8 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{currency.format(openPreview.price)}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>Category: {openPreview.category}</Typography>

                  <Typography sx={{ mt: 2 }} color="text.secondary">
                    High-quality AMG-compatible part. Installation guidance and support available.
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                    <Button variant="contained" onClick={() => { addToCart(openPreview); setOpenPreview(null); }} sx={{ bgcolor: '#e50914', '&:hover': { bgcolor: '#b70a10' } }}>Add to Cart</Button>
                    <Button component={Link} to={`/product/${openPreview.id}`} onClick={() => setOpenPreview(null)}>View Details</Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenPreview(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
