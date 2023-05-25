import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${itemId}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
      });
  }, [itemId]);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#0d7b97',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h4" gutterBottom>
          Item Details
        </Typography>
        {item ? (
          <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {item.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: {item.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website: {item.website}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {item.address.street}, {item.address.suite}, {item.address.city},{' '}
                {item.address.zipcode}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Company: {item.company.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Username: {item.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Catchphrase: {item.company.catchPhrase}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website: {item.website}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </div>
    </ThemeProvider>
  );
};

export default ItemDetails;
