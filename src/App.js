
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import ItemList from './components/ItemList';
import ItemPage from './components/ItemPage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Routes>
        <Route exact path="/" element={<ItemList entityType="users" />} />
        <Route path="/users/:itemId" element={<ItemPage />} />
       </Routes>
      </Container>
    </Router>
  );
};

export default App;
