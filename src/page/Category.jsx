import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
} from '@mui/material';
import axios from 'axios';

const Category = () => {
  // const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryId}`);
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
    // }, [categoryId]);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
        {/* Category {categoryId} Products */}
      </Typography>

      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <List sx={{ display: 'flex', maxWidth: '100%', overflow: 'hidden' }}>
          {products.map((product) => (
            <ListItem key={product.id} sx={{ display: 'inline-block', maxWidth: 460, maxHeight: 320}}>
              <Card sx={{ maxWidth: 460, maxHeight: 320}}>
                <CardMedia
                  component="img"
                  alt={product.title}
                  height={120}
                  width={120}
                  image={product.image}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Price: ${product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Category: {product.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Category;