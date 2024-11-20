import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductoList from './components/ProductoList';

function App() {
  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      <ProductoList />
    </div>
  );
}

export default App;
