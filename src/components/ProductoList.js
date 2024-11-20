

//'http://localhost:8000/api/poductos';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000.com/api/productos', {
            headers: {
                Authorization: 'Bearer TU_TOKEN_AQUI', // Si usas autenticación
            }
        })
        .then(response => {
            setProductos(response.data);
        })
        .catch(error => {
            console.error("Hubo un error al obtener los productos: ", error);
        });
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - {producto.precio}
                        {/* Agregar botones para editar y eliminar */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductoList;

