import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const ItemList = ({ entityType }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${entityType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching ${entityType}:`, error);
      });
  }, [entityType]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {entityType} List
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginBottom: '16px' }}
        />
        <Grid container spacing={2}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Link to={`/${entityType}/${item.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    maxWidth: 500,
                    margin: '0 auto',
                    marginBottom: '10px',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
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
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default ItemList;
