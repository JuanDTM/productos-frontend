import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import ProductoForm from "c:/Users/MI PC/productos-frontend/src/components/productoForm";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductoList />} />
                <Route path="/producto/crear" element={<ProductoForm />} />
                <Route path="/producto/editar/:id" element={<ProductoForm />} />
            </Routes>
        </Router>
    );
};

export default App;
