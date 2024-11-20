import React from 'react';
import axios from 'axios';

const ProductoDelete = ({ productoId, onProductoEliminado }) => {
    const handleDelete = () => {
        axios.delete('http://tudominio.com/api/eliminar-producto', {
            data: { id: productoId },
            headers: {
                Authorization: 'Bearer TU_TOKEN_AQUI', // Si usas autenticación
            }
        })
        .then(response => {
            onProductoEliminado();
        })
        .catch(error => {
            console.error("Hubo un error al eliminar el producto: ", error);
        });
    };

    return <button onClick={handleDelete}>Eliminar Producto</button>;
};

export default ProductoDelete;
