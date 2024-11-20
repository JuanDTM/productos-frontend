import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductoForm = ({ productoId, onProductoGuardado }) => {
    const [producto, setProducto] = useState({ nombre: '', precio: '' });

    useEffect(() => {
        if (productoId) {
            // Obtener el producto si se está editando
            axios.get(`http://tudominio.com/api/producto/${productoId}`)
                .then(response => {
                    setProducto(response.data);
                })
                .catch(error => {
                    console.error("Hubo un error al obtener el producto: ", error);
                });
        }
    }, [productoId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = productoId 
            ? `http://tudominio.com/api/actualizar-producto` 
            : `http://tudominio.com/api/crear-producto`;

        const method = productoId ? 'post' : 'post'; // Puedes usar PUT para editar

        axios[method](url, producto, {
            headers: {
                Authorization: 'Bearer TU_TOKEN_AQUI', // Si usas autenticación
            }
        })
        .then(response => {
            onProductoGuardado();
            setProducto({ nombre: '', precio: '' }); // Resetear formulario
        })
        .catch(error => {
            console.error("Hubo un error al guardar el producto: ", error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                />
            </label>
            <label>
                Precio:
                <input
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Guardar Producto</button>
        </form>
    );
};

export default ProductoForm;
